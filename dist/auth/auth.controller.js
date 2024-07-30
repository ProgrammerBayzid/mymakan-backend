"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const public_decorator_1 = require("../common/public.decorator");
const swagger_1 = require("@nestjs/swagger");
const token_type_1 = require("./types/token.type");
const user_sing_up_dto_1 = require("./dto/user-sing-up.dto");
const user_login_dto_1 = require("./dto/user-login.dto");
const refresh_token_guard_1 = require("../common/guards/refresh-token.guard");
const user_refresh_token_dto_1 = require("./dto/user-refresh-token.dto");
const user_forgot_password_dto_1 = require("./dto/user-forgot-password.dto");
const reset_password_code_check_dto_1 = require("./dto/reset-password-code-check-dto");
const user_reset_password_dto_1 = require("./dto/user-reset-password.dto");
const email_change_dto_1 = require("./dto/email-change-dto");
const password_change_dto_1 = require("./dto/password-change-dto");
const agent_singup_dto_1 = require("./dto/agent-singup.dto");
const get_current_user_1 = require("../common/get-current.user");
const user_password_change_dto_1 = require("./dto/user.password.change.dto");
const login_with_gmail_1 = require("./dto/login-with-gmail");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    userSignup(userSignUpDto) {
        return this.authService.userSignup(userSignUpDto);
    }
    userSignupWithGoogle(userSignUpDto) {
        return this.authService.userSignupWithGoogle(userSignUpDto);
    }
    userLogin(userloginDto) {
        return this.authService.userLogin(userloginDto);
    }
    userLoginWithGmail(userloginWithGmailDto) {
        return this.authService.userLoginWithGoogle(userloginWithGmailDto);
    }
    updateTokens(userId, refreshToeknDto) {
        console.log(userId);
        console.log(refreshToeknDto);
        return this.authService.updateTokens(userId, refreshToeknDto);
    }
    forgotPassword(forgotPasswordDto) {
        return this.authService.forgotPassword(forgotPasswordDto);
    }
    resetPasswordCodeCheck(resetPasswordCodeCheckDto) {
        return this.authService.resetPasswordCodeCheck(resetPasswordCodeCheckDto);
    }
    resetPassword(resetPasswordDto) {
        return this.authService.resetPassword(resetPasswordDto);
    }
    changePassword(changePasswordDto) {
        return this.authService.passwordChange(changePasswordDto);
    }
    emailChange(emailChangeDto) {
        return this.authService.emailChange(emailChangeDto);
    }
    agentSignup(agentSignUpDto) {
        return this.authService.agentSignup(agentSignUpDto);
    }
    agentSignupWithGmail(agentSignUpDto) {
        return this.authService.agentSignupWithGmail(agentSignUpDto);
    }
    agentLogin(agentloginDto) {
        return this.authService.agentLogin(agentloginDto);
    }
    agentLoginWithGmail(agentloginWithEmailDto) {
        return this.authService.agentLoginWithGoogle(agentloginWithEmailDto);
    }
    agentForgotPassword(agentForgotPasswordDto) {
        return this.authService.agentForgotPassword(agentForgotPasswordDto);
    }
    agentResetPasswordCodeCheck(agentResetPasswordCodeCheckDto) {
        return this.authService.agentResetPasswordCodeCheck(agentResetPasswordCodeCheckDto);
    }
    agentResetPassword(resetPasswordDto) {
        return this.authService.agentResetPassword(resetPasswordDto);
    }
    agentEmailChange(emailChangeDto) {
        return this.authService.agentEmailChange(emailChangeDto);
    }
    agentPasswordChange(passwordChangeDto) {
        return this.authService.agentPasswordChange(passwordChangeDto);
    }
    userEmailVerifyCodeSent(agentForgotPasswordDto) {
        return this.authService.userEmailVerify(agentForgotPasswordDto);
    }
    userEmailVerifyCodeCheck(agentResetPasswordCodeCheckDto) {
        return this.authService.userEmailVerifyCodeCheck(agentResetPasswordCodeCheckDto);
    }
    agentEmailVerifyCodeSent(agentForgotPasswordDto) {
        return this.authService.agentEmailVerify(agentForgotPasswordDto);
    }
    agentEmailVerifyCodeCheck(agentResetPasswordCodeCheckDto) {
        return this.authService.agentEmailVerifyCodeCheck(agentResetPasswordCodeCheckDto);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('user/signUp'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Create account' }),
    (0, swagger_1.ApiCreatedResponse)({ type: token_type_1.Tokens }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_sing_up_dto_1.UserSignUpDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "userSignup", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('user/signUp-with-Google'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Create account' }),
    (0, swagger_1.ApiCreatedResponse)({ type: token_type_1.Tokens }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_sing_up_dto_1.UserSignUpDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "userSignupWithGoogle", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('user/login'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Login to account' }),
    (0, swagger_1.ApiOkResponse)({ type: token_type_1.Tokens }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_login_dto_1.UserLoginDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "userLogin", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('user/login-with-gmail'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Login to account' }),
    (0, swagger_1.ApiOkResponse)({ type: token_type_1.Tokens }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_with_gmail_1.UserLoginWithGmailDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "userLoginWithGmail", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.UseGuards)(refresh_token_guard_1.RtGuard),
    (0, common_1.Patch)('refresh-token'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Refresh auth tokens' }),
    (0, swagger_1.ApiOkResponse)({ type: token_type_1.Tokens }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, get_current_user_1.GetCurrentUser)('userId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_refresh_token_dto_1.UserRefreshToeknDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "updateTokens", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('/forgot-password'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Send email with code to reset password' }),
    (0, swagger_1.ApiOkResponse)({ type: String }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_forgot_password_dto_1.UserForgotPasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "forgotPassword", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('reset-password-code-check'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Reset password Code Check' }),
    (0, swagger_1.ApiOkResponse)({ type: String }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reset_password_code_check_dto_1.UserResetPasswordCodeCheckDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resetPasswordCodeCheck", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('reset-password'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Reset password' }),
    (0, swagger_1.ApiOkResponse)({ type: String }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_reset_password_dto_1.UserResetPasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resetPassword", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('change-password'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Reset password' }),
    (0, swagger_1.ApiOkResponse)({ type: String }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_password_change_dto_1.UserPasswordChangeDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "changePassword", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('email-change'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'change Email successfully' }),
    (0, swagger_1.ApiOkResponse)({ type: 'change Email successfully' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [email_change_dto_1.EmailChangeDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "emailChange", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('agent/signUp'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Agent account create successfully' }),
    (0, swagger_1.ApiCreatedResponse)({ type: token_type_1.Tokens }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [agent_singup_dto_1.AgentSignUpDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "agentSignup", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('agent/signUp-with-gmail'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Agent account create successfully' }),
    (0, swagger_1.ApiCreatedResponse)({ type: token_type_1.Tokens }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [agent_singup_dto_1.AgentSignUpDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "agentSignupWithGmail", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('agent/login'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Login to account' }),
    (0, swagger_1.ApiOkResponse)({ type: token_type_1.Tokens }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_login_dto_1.UserLoginDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "agentLogin", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('agent/login-with-gmail'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Login to account' }),
    (0, swagger_1.ApiOkResponse)({ type: token_type_1.Tokens }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_with_gmail_1.UserLoginWithGmailDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "agentLoginWithGmail", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('agent/forgot-password'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Send email with code to reset password' }),
    (0, swagger_1.ApiOkResponse)({ type: String }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_forgot_password_dto_1.UserForgotPasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "agentForgotPassword", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('agent/reset-password-code-check'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Reset password Code Check' }),
    (0, swagger_1.ApiOkResponse)({ type: String }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reset_password_code_check_dto_1.UserResetPasswordCodeCheckDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "agentResetPasswordCodeCheck", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('agent/reset-password'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Reset password' }),
    (0, swagger_1.ApiOkResponse)({ type: String }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_reset_password_dto_1.UserResetPasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "agentResetPassword", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('agent/email-change'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Change Email successfully' }),
    (0, swagger_1.ApiOkResponse)({ type: 'Change Email successfully' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [email_change_dto_1.EmailChangeDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "agentEmailChange", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('agent/password-change'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Change Password successfully' }),
    (0, swagger_1.ApiOkResponse)({ type: 'Change Password successfully' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [password_change_dto_1.PasswordChangeDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "agentPasswordChange", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('buyer/email-verify'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Send email with code to reset password' }),
    (0, swagger_1.ApiOkResponse)({ type: String }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_forgot_password_dto_1.UserForgotPasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "userEmailVerifyCodeSent", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('buyer/email-verify-code-check'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Reset password Code Check' }),
    (0, swagger_1.ApiOkResponse)({ type: String }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reset_password_code_check_dto_1.UserResetPasswordCodeCheckDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "userEmailVerifyCodeCheck", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('agent/email-verify'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Send email with code to reset password' }),
    (0, swagger_1.ApiOkResponse)({ type: String }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_forgot_password_dto_1.UserForgotPasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "agentEmailVerifyCodeSent", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('agent/email-verify-code-check'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Reset password Code Check' }),
    (0, swagger_1.ApiOkResponse)({ type: String }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reset_password_code_check_dto_1.UserResetPasswordCodeCheckDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "agentEmailVerifyCodeCheck", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    (0, swagger_1.ApiTags)('Authentication'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map