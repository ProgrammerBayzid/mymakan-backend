import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { Public } from 'src/common/public.decorator';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Tokens } from './types/token.type';
import { UserSignUpDto } from './dto/user-sing-up.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { RtGuard } from 'src/common/guards/refresh-token.guard';
import { UserRefreshToeknDto } from './dto/user-refresh-token.dto';
import { UserForgotPasswordDto } from './dto/user-forgot-password.dto';
import { UserResetPasswordCodeCheckDto } from './dto/reset-password-code-check-dto';
import { UserResetPasswordDto } from './dto/user-reset-password.dto';
import { EmailChangeDto } from './dto/email-change-dto';
import { PasswordChangeDto } from './dto/password-change-dto';
import { AgentSignUpDto } from './dto/agent-singup.dto';
import { GetCurrentUser } from 'src/common/get-current.user';
import { UserPasswordChangeDto } from './dto/user.password.change.dto';
import { UserLoginWithGmailDto } from './dto/login-with-gmail';

@Controller('auth')
@ApiTags('Authentication')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // buyer auth 

  @Public()
  @Post('user/signUp')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Create account' })
  @ApiCreatedResponse({ type: Tokens })
  userSignup(@Body() userSignUpDto: UserSignUpDto): Promise<Tokens> {
    return this.authService.userSignup(userSignUpDto);
  }


  @Public()
  @Post('user/signUp-with-Google')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Create account' })
  @ApiCreatedResponse({ type: Tokens })
  userSignupWithGoogle(@Body() userSignUpDto: UserSignUpDto): Promise<Tokens> {
    return this.authService.userSignupWithGoogle(userSignUpDto);
  }

  @Public()
  @Post('user/login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Login to account' })
  @ApiOkResponse({ type: Tokens })
  userLogin(@Body() userloginDto: UserLoginDto): Promise<Tokens> {
    return this.authService.userLogin(userloginDto);
  }

  @Public()
  @Post('user/login-with-gmail')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Login to account' })
  @ApiOkResponse({ type: Tokens })
  userLoginWithGmail(@Body() userloginWithGmailDto: UserLoginWithGmailDto): Promise<Tokens> {
    return this.authService.userLoginWithGoogle(userloginWithGmailDto);
  }

  @Public()
  @UseGuards(RtGuard)
  @Patch('refresh-token')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Refresh auth tokens' })
  @ApiOkResponse({ type: Tokens })
  @ApiBearerAuth()
  updateTokens(
    @GetCurrentUser('userId') userId: string,
    @Body() refreshToeknDto: UserRefreshToeknDto,
  ): Promise<Tokens> {
    console.log(userId);
    console.log(refreshToeknDto);
    return this.authService.updateTokens(userId, refreshToeknDto);
  }

  @Public()
  @Post('/forgot-password')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Send email with code to reset password' })
  @ApiOkResponse({ type: String })
  forgotPassword(
    @Body() forgotPasswordDto: UserForgotPasswordDto,
  ): Promise<string> {
    return this.authService.forgotPassword(forgotPasswordDto);
  }

  @Public()
  @Post('reset-password-code-check')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Reset password Code Check' })
  @ApiOkResponse({ type: String })
  resetPasswordCodeCheck(
    @Body() resetPasswordCodeCheckDto: UserResetPasswordCodeCheckDto,
  ): Promise<string> {
    return this.authService.resetPasswordCodeCheck(resetPasswordCodeCheckDto);
  }

  @Public()
  @Post('reset-password')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Reset password' })
  @ApiOkResponse({ type: String })
  resetPassword(
    @Body() resetPasswordDto: UserResetPasswordDto,
  ): Promise<string> {
    return this.authService.resetPassword(resetPasswordDto);
  }


  @Public()
  @Post('change-password')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Reset password' })
  @ApiOkResponse({ type: String })
  changePassword(
    @Body() changePasswordDto: UserPasswordChangeDto,
  ): Promise<string> {
    return this.authService.passwordChange(changePasswordDto);
  }




  @Public()
  @Post('email-change')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'change Email successfully' })
  @ApiOkResponse({ type: 'change Email successfully' })
  emailChange(@Body() emailChangeDto: EmailChangeDto): Promise<string> {
    return this.authService.emailChange(emailChangeDto);
  }



// agent auth 


@Public()
@Post('agent/signUp')
@HttpCode(HttpStatus.OK)
@ApiOperation({ summary: 'Agent account create successfully' })
@ApiCreatedResponse({ type: Tokens })
agentSignup(@Body() agentSignUpDto: AgentSignUpDto): Promise<Tokens> {
  return this.authService.agentSignup(agentSignUpDto);
}

@Public()
@Post('agent/signUp-with-gmail')
@HttpCode(HttpStatus.OK)
@ApiOperation({ summary: 'Agent account create successfully' })
@ApiCreatedResponse({ type: Tokens })
agentSignupWithGmail(@Body() agentSignUpDto: AgentSignUpDto): Promise<Tokens> {
  return this.authService.agentSignupWithGmail(agentSignUpDto);
}


@Public()
@Post('agent/login')
@HttpCode(HttpStatus.OK)
@ApiOperation({ summary: 'Login to account' })
@ApiOkResponse({ type: Tokens })
agentLogin(@Body() agentloginDto: UserLoginDto): Promise<Tokens> {
  return this.authService.agentLogin(agentloginDto);
}


@Public()
@Post('agent/login-with-gmail')
@HttpCode(HttpStatus.OK)
@ApiOperation({ summary: 'Login to account' })
@ApiOkResponse({ type: Tokens })
agentLoginWithGmail(@Body() agentloginWithEmailDto: UserLoginWithGmailDto): Promise<Tokens> {
  return this.authService.agentLoginWithGoogle(agentloginWithEmailDto);
}


@Public()
@Post('agent/forgot-password')
@HttpCode(HttpStatus.OK)
@ApiOperation({ summary: 'Send email with code to reset password' })
@ApiOkResponse({ type: String })
agentForgotPassword(
  @Body() agentForgotPasswordDto: UserForgotPasswordDto,
): Promise<string> {
  return this.authService.agentForgotPassword(agentForgotPasswordDto);
}


@Public()
@Post('agent/reset-password-code-check')
@HttpCode(HttpStatus.OK)
@ApiOperation({ summary: 'Reset password Code Check' })
@ApiOkResponse({ type: String })
agentResetPasswordCodeCheck(
  @Body() agentResetPasswordCodeCheckDto: UserResetPasswordCodeCheckDto,
): Promise<string> {
  return this.authService.agentResetPasswordCodeCheck(agentResetPasswordCodeCheckDto);
}

@Public()
@Post('agent/reset-password')
@HttpCode(HttpStatus.OK)
@ApiOperation({ summary: 'Reset password' })
@ApiOkResponse({ type: String })
agentResetPassword(
  @Body() resetPasswordDto: UserResetPasswordDto,
): Promise<string> {
  return this.authService.agentResetPassword(resetPasswordDto);
}

@Public()
@Post('agent/email-change')
@HttpCode(HttpStatus.OK)
@ApiOperation({ summary: 'Change Email successfully' })
@ApiOkResponse({ type: 'Change Email successfully' })
agentEmailChange(@Body() emailChangeDto: EmailChangeDto): Promise<string> {
  return this.authService.agentEmailChange(emailChangeDto);
}

@Public()
@Post('agent/password-change')
@HttpCode(HttpStatus.OK)
@ApiOperation({ summary: 'Change Password successfully' })
@ApiOkResponse({ type: 'Change Password successfully' })
agentPasswordChange(
  @Body() passwordChangeDto: PasswordChangeDto,
): Promise<string> {
  return this.authService.agentPasswordChange(passwordChangeDto);
}

@Public()
@Post('buyer/email-verify')
@HttpCode(HttpStatus.OK)
@ApiOperation({ summary: 'Send email with code to reset password' })
@ApiOkResponse({ type: String })
userEmailVerifyCodeSent(
  @Body() agentForgotPasswordDto: UserForgotPasswordDto,
): Promise<string> {
  return this.authService.userEmailVerify(agentForgotPasswordDto);
}

@Public()
@Post('buyer/email-verify-code-check')
@HttpCode(HttpStatus.OK)
@ApiOperation({ summary: 'Reset password Code Check' })
@ApiOkResponse({ type: String })
userEmailVerifyCodeCheck(
  @Body() agentResetPasswordCodeCheckDto: UserResetPasswordCodeCheckDto,
): Promise<string> {
  return this.authService.userEmailVerifyCodeCheck(agentResetPasswordCodeCheckDto);
}

@Public()
@Post('agent/email-verify')
@HttpCode(HttpStatus.OK)
@ApiOperation({ summary: 'Send email with code to reset password' })
@ApiOkResponse({ type: String })
agentEmailVerifyCodeSent(
  @Body() agentForgotPasswordDto: UserForgotPasswordDto,
): Promise<string> {
  return this.authService.agentEmailVerify(agentForgotPasswordDto);
}

@Public()
@Post('agent/email-verify-code-check')
@HttpCode(HttpStatus.OK)
@ApiOperation({ summary: 'Reset password Code Check' })
@ApiOkResponse({ type: String })
agentEmailVerifyCodeCheck(
  @Body() agentResetPasswordCodeCheckDto: UserResetPasswordCodeCheckDto,
): Promise<string> {
  return this.authService.agentEmailVerifyCodeCheck(agentResetPasswordCodeCheckDto);
}


}
