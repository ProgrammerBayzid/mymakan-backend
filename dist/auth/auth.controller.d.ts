import { AuthService } from './auth.service';
import { Tokens } from './types/token.type';
import { UserSignUpDto } from './dto/user-sing-up.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { UserRefreshToeknDto } from './dto/user-refresh-token.dto';
import { UserForgotPasswordDto } from './dto/user-forgot-password.dto';
import { UserResetPasswordCodeCheckDto } from './dto/reset-password-code-check-dto';
import { UserResetPasswordDto } from './dto/user-reset-password.dto';
import { EmailChangeDto } from './dto/email-change-dto';
import { PasswordChangeDto } from './dto/password-change-dto';
import { AgentSignUpDto } from './dto/agent-singup.dto';
import { UserPasswordChangeDto } from './dto/user.password.change.dto';
import { UserLoginWithGmailDto } from './dto/login-with-gmail';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    userSignup(userSignUpDto: UserSignUpDto): Promise<Tokens>;
    userSignupWithGoogle(userSignUpDto: UserSignUpDto): Promise<Tokens>;
    userLogin(userloginDto: UserLoginDto): Promise<Tokens>;
    userLoginWithGmail(userloginWithGmailDto: UserLoginWithGmailDto): Promise<Tokens>;
    updateTokens(userId: string, refreshToeknDto: UserRefreshToeknDto): Promise<Tokens>;
    forgotPassword(forgotPasswordDto: UserForgotPasswordDto): Promise<string>;
    resetPasswordCodeCheck(resetPasswordCodeCheckDto: UserResetPasswordCodeCheckDto): Promise<string>;
    resetPassword(resetPasswordDto: UserResetPasswordDto): Promise<string>;
    changePassword(changePasswordDto: UserPasswordChangeDto): Promise<string>;
    emailChange(emailChangeDto: EmailChangeDto): Promise<string>;
    agentSignup(agentSignUpDto: AgentSignUpDto): Promise<Tokens>;
    agentSignupWithGmail(agentSignUpDto: AgentSignUpDto): Promise<Tokens>;
    agentLogin(agentloginDto: UserLoginDto): Promise<Tokens>;
    agentLoginWithGmail(agentloginWithEmailDto: UserLoginWithGmailDto): Promise<Tokens>;
    agentForgotPassword(agentForgotPasswordDto: UserForgotPasswordDto): Promise<string>;
    agentResetPasswordCodeCheck(agentResetPasswordCodeCheckDto: UserResetPasswordCodeCheckDto): Promise<string>;
    agentResetPassword(resetPasswordDto: UserResetPasswordDto): Promise<string>;
    agentEmailChange(emailChangeDto: EmailChangeDto): Promise<string>;
    agentPasswordChange(passwordChangeDto: PasswordChangeDto): Promise<string>;
    userEmailVerifyCodeSent(agentForgotPasswordDto: UserForgotPasswordDto): Promise<string>;
    userEmailVerifyCodeCheck(agentResetPasswordCodeCheckDto: UserResetPasswordCodeCheckDto): Promise<string>;
    agentEmailVerifyCodeSent(agentForgotPasswordDto: UserForgotPasswordDto): Promise<string>;
    agentEmailVerifyCodeCheck(agentResetPasswordCodeCheckDto: UserResetPasswordCodeCheckDto): Promise<string>;
}
