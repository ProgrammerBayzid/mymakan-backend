/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { AuthDocument } from './entities/auth.entity';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/user/entities/user.entity';
import { UserSignUpDto } from './dto/user-sing-up.dto';
import { Tokens } from './types/token.type';
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
import { UserLoginWithGmailDto } from './dto/login-with-gmail';
import { AgentFollowDocument } from 'src/follow/entities/agent.follow.entity';
import { BuyerFollowDocument } from 'src/follow/entities/buyer.follow.entity';
export declare class AuthService {
    private readonly config;
    private readonly jwtService;
    private readonly userService;
    private readonly agentService;
    private readonly emailService;
    private readonly authModel;
    private readonly userModel;
    private readonly agentModel;
    private readonly agentFollowModel;
    private readonly buyerFollowModel;
    constructor(config: ConfigService, jwtService: JwtService, userService: UserService, agentService: AgentService, emailService: EmailService, authModel: Model<AuthDocument>, userModel: Model<UserDocument>, agentModel: Model<AgentDocument>, agentFollowModel: Model<AgentFollowDocument>, buyerFollowModel: Model<BuyerFollowDocument>);
    userSignup(dto: UserSignUpDto): Promise<Tokens>;
    userSignupWithGoogle(dto: UserSignUpDto): Promise<Tokens>;
    userLogin(dto: UserLoginDto): Promise<Tokens>;
    userLoginWithGoogle(dto: UserLoginWithGmailDto): Promise<Tokens>;
    forgotPassword(dto: UserForgotPasswordDto): Promise<string>;
    resetPasswordCodeCheck(dto: UserResetPasswordCodeCheckDto): Promise<string>;
    resetPassword(dto: UserResetPasswordDto): Promise<string>;
    emailChange(dto: EmailChangeDto): Promise<string>;
    updateUserEmail(id: string, newEmail: string): Promise<User>;
    passwordChange(dto: PasswordChangeDto): Promise<string>;
    userEmailVerify(dto: UserForgotPasswordDto): Promise<string>;
    userEmailVerifyCodeCheck(dto: UserResetPasswordCodeCheckDto): Promise<string>;
    agentSignup(dto: AgentSignUpDto): Promise<Tokens>;
    agentSignupWithGmail(dto: AgentSignUpDto): Promise<Tokens>;
    agentLogin(dto: UserLoginDto): Promise<Tokens>;
    agentLoginWithGoogle(dto: UserLoginWithGmailDto): Promise<Tokens>;
    agentForgotPassword(dto: UserForgotPasswordDto): Promise<string>;
    agentResetPasswordCodeCheck(dto: UserResetPasswordCodeCheckDto): Promise<string>;
    agentResetPassword(dto: UserResetPasswordDto): Promise<string>;
    agentEmailChange(dto: EmailChangeDto): Promise<string>;
    updateAgentEmail(id: string, newEmail: string): Promise<Agent>;
    agentPasswordChange(dto: PasswordChangeDto): Promise<string>;
    agentEmailVerify(dto: UserForgotPasswordDto): Promise<string>;
    agentEmailVerifyCodeCheck(dto: UserResetPasswordCodeCheckDto): Promise<string>;
    private getTokens;
    private updateRefreshToken;
    updateTokens(userId: string, dto: UserRefreshToeknDto): Promise<Tokens>;
    private generateRandomCode;
}
