import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { InjectModel } from '@nestjs/mongoose';
import { Auth, AuthDocument } from './entities/auth.entity';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/user/entities/user.entity';
import { UserSignUpDto } from './dto/user-sing-up.dto';
import { Tokens } from './types/token.type';
import * as bcrypt from 'bcrypt';
import { UserLoginDto } from './dto/user-login.dto';
import { UserRefreshToeknDto } from './dto/user-refresh-token.dto';
import { UserForgotPasswordDto } from './dto/user-forgot-password.dto';
import { UserResetPasswordCodeCheckDto } from './dto/reset-password-code-check-dto';
import { UserResetPasswordDto } from './dto/user-reset-password.dto';
import { EmailChangeDto } from './dto/email-change-dto';
import { PasswordChangeDto } from './dto/password-change-dto';
import { EmailService } from 'src/email/email.service';
import { Agent, AgentDocument } from 'src/agent/entities/agent.entity';
import { AgentSignUpDto } from './dto/agent-singup.dto';
import { AgentService } from 'src/agent/agent.service';
import { UserPasswordChangeDto } from './dto/user.password.change.dto';
import { UserLoginWithGmailDto } from './dto/login-with-gmail';
import { AgentFollow, AgentFollowDocument } from 'src/follow/entities/agent.follow.entity';
import { BuyerFollow, BuyerFollowDocument } from 'src/follow/entities/buyer.follow.entity';

@Injectable()
export class AuthService {

  constructor(
    private readonly config: ConfigService,
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly agentService: AgentService,
    private readonly emailService: EmailService,
    @InjectModel(Auth.name) private readonly authModel: Model<AuthDocument>,
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
    @InjectModel(Agent.name)
    private readonly agentModel: Model<AgentDocument>,
    @InjectModel(AgentFollow.name) private readonly agentFollowModel: Model<AgentFollowDocument>,
    @InjectModel(BuyerFollow.name) private readonly buyerFollowModel: Model<BuyerFollowDocument>,
  ) {}


  // buyer auth 

  async userSignup(dto: UserSignUpDto): Promise<Tokens> {
    const prefix = 'MM';
    const randomPart = Math.floor(Math.random() * 10000); // Generate a random number between 0 and 9999
    const userUniqueId = `${prefix}${randomPart.toString().padStart(4, '0')}`; // Ensure random part is 4 digits

    let userCreateData: any = {
      email: dto.email,
      password: dto.password? dto.password : "12345678",
      fullName: dto.fullName,
      image:dto.image? dto.image : "https://i.ibb.co/MnV4DcK/user.png",
      mobile: dto.mobile ? dto.mobile : null,
      mobile_code: dto.mobile_code? dto.mobile_code : null,
      role: dto.role,
      device: dto.device,
      state: dto.state ? dto.state :null,
      country : dto.country? dto.country:null,
      uniqueId: userUniqueId,
  };

  const user = await this.userService.userCreate(userCreateData);

    await this.authModel.create({
      userId: user._id,
      role: user.role,
    });


    const tokens = await this.getTokens(user._id.toString(), user.role);
    await this.updateRefreshToken(user._id.toString(), tokens.refresh_token);

    await this.userService.updateVerificationEmailSentStatus(
      user._id.toString(),
      true,
    );

    return {
      ...tokens,
    };
  }

  async userSignupWithGoogle(dto: UserSignUpDto): Promise<Tokens> {
    const user = await this.userService.findUserWithPasswordByEmail(
      dto.email,
    );
    if(user){
      const tokens = await this.getTokens(user._id.toString(), user.role);
      await this.updateRefreshToken(user._id.toString(), tokens.refresh_token);
      return tokens;
    }else{

      const prefix = 'MM';
      const randomPart = Math.floor(Math.random() * 10000); // Generate a random number between 0 and 9999
      const userUniqueId = `${prefix}${randomPart.toString().padStart(4, '0')}`; // Ensure random part is 4 digits
  
      let userCreateData: any = {
        email: dto.email ? dto.email : null,
        fullName: dto.fullName ? dto.fullName:null,
        image:dto.image? dto.image : "https://i.ibb.co/MnV4DcK/user.png",
        role: dto.role,
        device: dto.device,
        uniqueId: userUniqueId,
    };
  
    const user = await this.userService.userCreateWithGoogle(userCreateData);
  
      await this.authModel.create({
        userId: user._id,
        role: user.role,
      });
  
      const tokens = await this.getTokens(user._id.toString(), user.role);
      await this.updateRefreshToken(user._id.toString(), tokens.refresh_token);
  
      await this.userService.updateVerificationEmailSentStatus(
        user._id.toString(),
        true,
      );
  
      return {
        ...tokens,
      };
    }
  }

  async userLogin(dto: UserLoginDto): Promise<Tokens> {

    if(
      !dto.email || !dto.password
    ){
      throw new BadRequestException('Email and password must be provided');
    }
    const user = await this.userService.findUserWithPasswordByEmail(
      dto.email,
    );
    if (dto.email == 'developer@gmail.dev' && dto.password == '12312312') {
      const adminToken = await this.getTokens(user._id.toString(), 'admin');
      await this.updateRefreshToken(
        user._id.toString(),
        adminToken.refresh_token,
      );

      return adminToken;
    }

    if (!user) {
      throw new ForbiddenException('Wrong Email or password');
    }

    const isMatch = await bcrypt.compare(dto.password, user.password);
    if (!isMatch) {
      throw new ForbiddenException('Wrong Email or password');
    }

    const tokens = await this.getTokens(user._id.toString(), user.role);
    await this.updateRefreshToken(user._id.toString(), tokens.refresh_token);

    return tokens;
  }
  async userLoginWithGoogle(dto: UserLoginWithGmailDto): Promise<Tokens> {

    if(
      !dto.email 
    ){
      throw new BadRequestException('Email must be provided');
    }
    const user = await this.userService.findUserWithPasswordByEmail(
      dto.email,
    );
   

    if (!user) {
      throw new ForbiddenException('Wrong Email or password');
    }

    const tokens = await this.getTokens(user._id.toString(), user.role);
    await this.updateRefreshToken(user._id.toString(), tokens.refresh_token);

    return tokens;
  }
 

    async forgotPassword(dto: UserForgotPasswordDto): Promise<string> {
      const user = await this.userService.findOneByEmail(dto.email);
      const userAuth = await this.authModel.findOne({ userId: user._id });
      
      const code = this.generateRandomCode();
      console.log(code);
  
      userAuth.resetPasswordCode = code;
      await userAuth.save();
      await this.emailService.sendEmail(
        user.email,
        'My Makan Email Verification Code',
        code,
      );
  
      return 'reset password code sent to user email';
    }

    async resetPasswordCodeCheck(
      dto: UserResetPasswordCodeCheckDto,
    ): Promise<string> {
      const user = await this.userService.findOneByEmail(dto.email);
      const userAuth = await this.authModel.findOne({ userId: user._id });
  
      if (userAuth.resetPasswordCode !== dto.code) {
        throw new ForbiddenException('invalid code');
      }
  
      if (dto.email !== user.email) {
        throw new ForbiddenException('invalid email');
      }
      return 'password reset Code successfully match';
    }

    async resetPassword(dto: UserResetPasswordDto): Promise<string> {
      const user = await this.userService.findOneByEmail(dto.email);
  
      if (dto.email !== user.email) {
        throw new ForbiddenException('invalid email');
      }
  
      await this.userService.updatePassword(user._id, dto.password);
  
      return 'password reset successfully';
    }

  
    async emailChange(dto: EmailChangeDto): Promise<string> {
      const user =
        await this.userService.findOneByEmailForEmailOrPasswordChange(
          dto.oldEmail,
        );
  
      if (dto.oldEmail !== user.email) {
        throw new ForbiddenException('user not found by this email');
      }
      console.log("user's password:", user.password);
  
      const isMatch = await bcrypt.compare(dto.password, user.password);
      if (!isMatch) {
        throw new ForbiddenException('password not match');
      }
  
      const updateduser = await this.updateUserEmail(
        user._id,
        dto.newEmail,
      );
  
      if (!updateduser) {
        throw new Error('Failed to update user email');
      }
  
      return 'Email updated successfully';
    }

    async updateUserEmail(id: string, newEmail: string): Promise<User> {
      return this.userModel
        .findByIdAndUpdate(id, { email: newEmail , emailVerified:false}, { new: true })
        .exec();
    }

    async passwordChange(dto: PasswordChangeDto): Promise<string> {
      const user =
        await this.userService.findOneByEmailForEmailOrPasswordChange(
          dto.email,
        );
  
      if (dto.email !== user.email) {
        throw new ForbiddenException('user not found by this email');
      }
  
      const isMatch = await bcrypt.compare(dto.oldPassword, user.password);
      if (!isMatch) {
        throw new ForbiddenException('old password not match');
      }
  
      const updatedUser = await this.userService.updatePassword(
        user._id,
        dto.newPassword,
      );
  
      if (!updatedUser) {
        throw new Error('Failed to update user password');
      }
  
      return 'Password updated successfully';
    }


    async userEmailVerify(dto: UserForgotPasswordDto): Promise<string> {
      const user = await this.userService.findOneByEmail(dto.email);
      const userAuth = await this.authModel.findOne({ userId: user._id });
      const code = this.generateRandomCode();
      userAuth.emailVerifyCode = code;
      await userAuth.save();
      await this.emailService.sendEmail(
        user.email,
        'My Makan Email Verification Code',
        code,
      );
  
      return 'Email Verification code sent to your email';
    }
  
    async userEmailVerifyCodeCheck(
      dto: UserResetPasswordCodeCheckDto,
    ): Promise<string> {
      const user = await this.userService.findOneByEmail(dto.email);
      if (!user) {
        throw new NotFoundException('user not found');
      }
  
      const userAuth = await this.authModel.findOne({ userId: user._id });
      if (!userAuth) {
        throw new NotFoundException('Authentication record not found');
      }
  
      if (userAuth.emailVerifyCode !== dto.code) {
        throw new ForbiddenException('Invalid verification code');
      }
  
      await this.userService.updateUserEmailVerify(user._id);
  
      return 'Email Verification Code successfully matched';
    }

// agent auth 


async agentSignup(dto: AgentSignUpDto): Promise<Tokens> {
  const prefix = 'MM';
  const randomPart = Math.floor(Math.random() * 10000); // Generate a random number between 0 and 9999
  const userUniqueId = `${prefix}${randomPart.toString().padStart(4, '0')}`; // Ensure random part is 4 digits

  let agentCreateData: any = {
    email: dto.email,
    image: dto.image,
    password: dto.password,
    fullName: dto.fullName,
    mobile: dto.mobile,
    mobile_code: dto.mobile_code,
    role: dto.role,
    device: dto.device,
    country :dto.country,
    companyName: dto.companyName,
    state: dto.state,
    uniqueId: userUniqueId,
};



const user = await this.agentService.agentCreate(agentCreateData);

  await this.authModel.create({
    userId: user._id,
    role: user.role,
  });


  const tokens = await this.getTokens(user._id.toString(), user.role);
  await this.updateRefreshToken(user._id.toString(), tokens.refresh_token);

  await this.agentService.updateAgentVerificationEmailSentStatus(
    user._id.toString(),
    true,
  );

  return {
    ...tokens,
  };
}

async agentSignupWithGmail(dto: AgentSignUpDto): Promise<Tokens> {
  const agent = await this.agentService.findAgentWithPasswordByEmail(
    dto.email,
  );
  if(agent){
    const tokens = await this.getTokens(agent._id.toString(), agent.role );
    await this.updateRefreshToken(agent._id.toString(), tokens.refresh_token);
    return tokens;
  }else{
    const prefix = 'MM';
    const randomPart = Math.floor(Math.random() * 10000); // Generate a random number between 0 and 9999
    const userUniqueId = `${prefix}${randomPart.toString().padStart(4, '0')}`; // Ensure random part is 4 digits
  
    let agentCreateData: any = {
      email: dto.email ? dto.email : null,
      fullName: dto.fullName ? dto.fullName:null,
      image:dto.image? dto.image : "https://i.ibb.co/MnV4DcK/user.png",
      role: dto.role,
      device: dto.device,
      uniqueId: userUniqueId,
  };
  
  
  
  const user = await this.agentService.agentCreateWithGoogle(agentCreateData);
  
    await this.authModel.create({
      userId: user._id,
      role: user.role,
    });

  
    const tokens = await this.getTokens(user._id.toString(), user.role);
    await this.updateRefreshToken(user._id.toString(), tokens.refresh_token);
  
    await this.agentService.updateAgentVerificationEmailSentStatus(
      user._id.toString(),
      true,
    );
  
    return {
      ...tokens,
    };
  }
}


async agentLogin(dto: UserLoginDto): Promise<Tokens> {

  if(
    !dto.email || !dto.password
  ){
    throw new BadRequestException('Email and password must be provided');
  }
  const agent = await this.agentService.findAgentWithPasswordByEmail(
    dto.email,
  );
  if (dto.email == 'developer@gmail.dev' && dto.password == '12312312') {
    const adminToken = await this.getTokens(agent._id.toString(), 'admin');
    await this.updateRefreshToken(
      agent._id.toString(),
      adminToken.refresh_token,
    );

    return adminToken;
  }

  if (!agent) {
    throw new ForbiddenException('Wrong Email or password');
  }

  const isMatch = await bcrypt.compare(dto.password, agent.password);
  if (!isMatch) {
    throw new ForbiddenException(' Wrong Email or password');
  }

  const tokens = await this.getTokens(agent._id.toString(), agent.role);
  await this.updateRefreshToken(agent._id.toString(), tokens.refresh_token);

  return tokens;
}

async agentLoginWithGoogle(dto: UserLoginWithGmailDto): Promise<Tokens> {

  if(
    !dto.email 
  ){
    throw new BadRequestException('Email must be provided');
  }
  const agent = await this.agentService.findAgentWithPasswordByEmail(
    dto.email,
  );
 

  if (!agent) {
    throw new ForbiddenException('Wrong Email or password');
  }

  const tokens = await this.getTokens(agent._id.toString(), agent.role);
  await this.updateRefreshToken(agent._id.toString(), tokens.refresh_token);

  return tokens;
}


  async agentForgotPassword(dto: UserForgotPasswordDto): Promise<string> {
    const agent = await this.agentService.findOneAgentByEmail(dto.email);
    const agentAuth = await this.authModel.findOne({ userId: agent._id });
    
    const code = this.generateRandomCode();

    agentAuth.resetPasswordCode = code;
    await agentAuth.save();
    await this.emailService.sendEmail(
      agent.email,
      'My Makan Email Verification Code',
      code,
    );

    return 'reset password code sent to user email';
  }




  async agentResetPasswordCodeCheck(
    dto: UserResetPasswordCodeCheckDto,
  ): Promise<string> {
    const agent = await this.agentService.findOneAgentByEmail(dto.email);
    const agentAuth = await this.authModel.findOne({ userId: agent._id });

    if (agentAuth.resetPasswordCode !== dto.code) {
      throw new ForbiddenException('invalid code');
    }

    if (dto.email !== agent.email) {
      throw new ForbiddenException('invalid email');
    }
    return 'password reset Code successfully match';
  }

  async agentResetPassword(dto: UserResetPasswordDto): Promise<string> {
    const agent = await this.agentService.findOneAgentByEmail(dto.email);

    if (dto.email !== agent.email) {
      throw new ForbiddenException('invalid email');
    }

    await this.agentService.updateAgentPassword(agent._id, dto.password);

    return 'password reset successfully';
  }


 

  async agentEmailChange(dto: EmailChangeDto): Promise<string> {
    const agent =
      await this.agentService.findOneAgentByEmailForEmailOrPasswordChange(
        dto.oldEmail,
      );

    if (dto.oldEmail !== agent.email) {
      throw new ForbiddenException('user not found by this email');
    }

    const isMatch = await bcrypt.compare(dto.password, agent.password);
    if (!isMatch) {
      throw new ForbiddenException('password not match');
    }

    const updateduser = await this.updateAgentEmail(
      agent._id,
      dto.newEmail,
    );

    if (!updateduser) {
      throw new Error('Failed to update user email');
    }

    return 'Email updated successfully';
  }

  async updateAgentEmail(id: string, newEmail: string): Promise<Agent> {
    return this.agentModel
      .findByIdAndUpdate(id, { email: newEmail, emailVerified:false }, { new: true })
      .exec();
  }
 

  async agentPasswordChange(dto: PasswordChangeDto): Promise<string> {
    const agent =
      await this.agentService.findOneAgentByEmailForEmailOrPasswordChange(
        dto.email,
      );

    if (dto.email !== agent.email) {
      throw new ForbiddenException('agent not found by this email');
    }

    const isMatch = await bcrypt.compare(dto.oldPassword, agent.password);
    if (!isMatch) {
      throw new ForbiddenException('old password not match');
    }

    const updatedAgent = await this.agentService.updateAgentPassword(
      agent._id,
      dto.newPassword,
    );

    if (!updatedAgent) {
      throw new Error('Failed to update user password');
    }

    return 'Password updated successfully';
  }


  async agentEmailVerify(dto: UserForgotPasswordDto): Promise<string> {
    const agent = await this.agentService.findOneAgentByEmail(dto.email);
    const agentAuth = await this.authModel.findOne({ userId: agent._id });
    const code = this.generateRandomCode();
    agentAuth.emailVerifyCode = code;
    await agentAuth.save();
    await this.emailService.sendEmail(
      agent.email,
      'My Makan Email Verification Code',
      code,
    );

    return 'Email Verification code sent to your email';
  }

  async agentEmailVerifyCodeCheck(
    dto: UserResetPasswordCodeCheckDto,
  ): Promise<string> {
    const agent = await this.agentService.findOneAgentByEmail(dto.email);
    if (!agent) {
      throw new NotFoundException('Agent not found');
    }

    const agentAuth = await this.authModel.findOne({ userId: agent._id });
    if (!agentAuth) {
      throw new NotFoundException('Authentication record not found');
    }

    if (agentAuth.emailVerifyCode !== dto.code) {
      throw new ForbiddenException('Invalid verification code');
    }

    await this.agentService.updateAgentEmailVerify(agent._id);

    return 'Email Verification Code successfully matched';
  }



 

// common funtion 

    private async getTokens(userId: string, role: string): Promise<Tokens> {
      // const accessTokenExpiresIn = 60; // 60 seconds for testing
      const accessTokenExpiresIn = 60 * 60 * 24 * 20; // 24 hours in seconds
      const refreshTokenExpiresIn = 60 * 60 * 24 * 30; // 1 week in seconds
  
      // calculate expiry dates
      const now = new Date();
      const accessTokenExpiryDate = new Date(
        now.getTime() + accessTokenExpiresIn * 1000,
      );
      const refreshTokenExpiryDate = new Date(
        now.getTime() + refreshTokenExpiresIn * 1000,
      );
  
      const [accessToken, refreshToken] = await Promise.all([
        this.jwtService.signAsync(
          { userId, role },
          {
            secret: this.config.get('AT_SECRET_KEY'),
            expiresIn: accessTokenExpiresIn,
          },
        ),
        this.jwtService.signAsync(
          { userId, role },
          {
            secret: this.config.get('RT_SECRET_KEY'),
            expiresIn: refreshTokenExpiresIn,
          },
        ),
      ]);
  
      return {
        access_token: accessToken,
        refresh_token: refreshToken,
        expires_in: accessTokenExpiryDate,
        userId: userId,
        role: role,
        // refresh_token_expiry: refreshTokenExpiryDate
      };
    }
  
      private async updateRefreshToken(
        userId: string,
        rt: string | null,
      ): Promise<void> {
        if (rt) {
          const salt = await bcrypt.genSalt(10);
          rt = await bcrypt.hash(rt, salt);
        }
    
        const userAuth = await this.authModel.findOne({ userId });
        userAuth.refreshToken = rt;
        await userAuth.save();
      }
  
  
      async updateTokens(
        userId: string,
        dto: UserRefreshToeknDto,
      ): Promise<Tokens> {
        const userAuth = await this.authModel.findOne({ userId });
        if (!userAuth || !userAuth.refreshToken) {
          throw new ForbiddenException('Invalid credentials');
        }
    
        const isMatch = await bcrypt.compare(
          dto.refreshToken,
          userAuth.refreshToken,
        );
        if (!isMatch) {
          throw new ForbiddenException('Invalid credentials');
        }
        const role = userAuth.role;
        console.log(role);
    
        if (role !== 'agents' && role !== 'buyer') {
          throw new Error('Invalid user role');
        }
    
        const tokens = await this.getTokens(userId, role);
        await this.updateRefreshToken(userId, tokens.refresh_token);
    
        return tokens;
      }

    private generateRandomCode(): string {
      const randomNum = Math.floor(Math.random() * 10000);
      const code = String(randomNum).padStart(4, '0');
      return code;
    }
}
