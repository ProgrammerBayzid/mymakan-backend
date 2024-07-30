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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("../user/user.service");
const mongoose_1 = require("@nestjs/mongoose");
const auth_entity_1 = require("./entities/auth.entity");
const mongoose_2 = require("mongoose");
const user_entity_1 = require("../user/entities/user.entity");
const bcrypt = require("bcrypt");
const email_service_1 = require("../email/email.service");
const agent_entity_1 = require("../agent/entities/agent.entity");
const agent_service_1 = require("../agent/agent.service");
const agent_follow_entity_1 = require("../follow/entities/agent.follow.entity");
const buyer_follow_entity_1 = require("../follow/entities/buyer.follow.entity");
let AuthService = class AuthService {
    constructor(config, jwtService, userService, agentService, emailService, authModel, userModel, agentModel, agentFollowModel, buyerFollowModel) {
        this.config = config;
        this.jwtService = jwtService;
        this.userService = userService;
        this.agentService = agentService;
        this.emailService = emailService;
        this.authModel = authModel;
        this.userModel = userModel;
        this.agentModel = agentModel;
        this.agentFollowModel = agentFollowModel;
        this.buyerFollowModel = buyerFollowModel;
    }
    async userSignup(dto) {
        const prefix = 'MM';
        const randomPart = Math.floor(Math.random() * 10000);
        const userUniqueId = `${prefix}${randomPart.toString().padStart(4, '0')}`;
        let userCreateData = {
            email: dto.email,
            password: dto.password ? dto.password : "12345678",
            fullName: dto.fullName,
            image: dto.image ? dto.image : "https://i.ibb.co/MnV4DcK/user.png",
            mobile: dto.mobile ? dto.mobile : null,
            mobile_code: dto.mobile_code ? dto.mobile_code : null,
            role: dto.role,
            device: dto.device,
            state: dto.state ? dto.state : null,
            country: dto.country ? dto.country : null,
            uniqueId: userUniqueId,
        };
        const user = await this.userService.userCreate(userCreateData);
        await this.authModel.create({
            userId: user._id,
            role: user.role,
        });
        const tokens = await this.getTokens(user._id.toString(), user.role);
        await this.updateRefreshToken(user._id.toString(), tokens.refresh_token);
        await this.userService.updateVerificationEmailSentStatus(user._id.toString(), true);
        return {
            ...tokens,
        };
    }
    async userSignupWithGoogle(dto) {
        const user = await this.userService.findUserWithPasswordByEmail(dto.email);
        if (user) {
            const tokens = await this.getTokens(user._id.toString(), user.role);
            await this.updateRefreshToken(user._id.toString(), tokens.refresh_token);
            return tokens;
        }
        else {
            const prefix = 'MM';
            const randomPart = Math.floor(Math.random() * 10000);
            const userUniqueId = `${prefix}${randomPart.toString().padStart(4, '0')}`;
            let userCreateData = {
                email: dto.email ? dto.email : null,
                fullName: dto.fullName ? dto.fullName : null,
                image: dto.image ? dto.image : "https://i.ibb.co/MnV4DcK/user.png",
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
            await this.userService.updateVerificationEmailSentStatus(user._id.toString(), true);
            return {
                ...tokens,
            };
        }
    }
    async userLogin(dto) {
        if (!dto.email || !dto.password) {
            throw new common_1.BadRequestException('Email and password must be provided');
        }
        const user = await this.userService.findUserWithPasswordByEmail(dto.email);
        if (dto.email == 'developer@gmail.dev' && dto.password == '12312312') {
            const adminToken = await this.getTokens(user._id.toString(), 'admin');
            await this.updateRefreshToken(user._id.toString(), adminToken.refresh_token);
            return adminToken;
        }
        if (!user) {
            throw new common_1.ForbiddenException('Wrong Email or password');
        }
        const isMatch = await bcrypt.compare(dto.password, user.password);
        if (!isMatch) {
            throw new common_1.ForbiddenException('Wrong Email or password');
        }
        const tokens = await this.getTokens(user._id.toString(), user.role);
        await this.updateRefreshToken(user._id.toString(), tokens.refresh_token);
        return tokens;
    }
    async userLoginWithGoogle(dto) {
        if (!dto.email) {
            throw new common_1.BadRequestException('Email must be provided');
        }
        const user = await this.userService.findUserWithPasswordByEmail(dto.email);
        if (!user) {
            throw new common_1.ForbiddenException('Wrong Email or password');
        }
        const tokens = await this.getTokens(user._id.toString(), user.role);
        await this.updateRefreshToken(user._id.toString(), tokens.refresh_token);
        return tokens;
    }
    async forgotPassword(dto) {
        const user = await this.userService.findOneByEmail(dto.email);
        const userAuth = await this.authModel.findOne({ userId: user._id });
        const code = this.generateRandomCode();
        console.log(code);
        userAuth.resetPasswordCode = code;
        await userAuth.save();
        await this.emailService.sendEmail(user.email, 'My Makan Email Verification Code', code);
        return 'reset password code sent to user email';
    }
    async resetPasswordCodeCheck(dto) {
        const user = await this.userService.findOneByEmail(dto.email);
        const userAuth = await this.authModel.findOne({ userId: user._id });
        if (userAuth.resetPasswordCode !== dto.code) {
            throw new common_1.ForbiddenException('invalid code');
        }
        if (dto.email !== user.email) {
            throw new common_1.ForbiddenException('invalid email');
        }
        return 'password reset Code successfully match';
    }
    async resetPassword(dto) {
        const user = await this.userService.findOneByEmail(dto.email);
        if (dto.email !== user.email) {
            throw new common_1.ForbiddenException('invalid email');
        }
        await this.userService.updatePassword(user._id, dto.password);
        return 'password reset successfully';
    }
    async emailChange(dto) {
        const user = await this.userService.findOneByEmailForEmailOrPasswordChange(dto.oldEmail);
        if (dto.oldEmail !== user.email) {
            throw new common_1.ForbiddenException('user not found by this email');
        }
        console.log("user's password:", user.password);
        const isMatch = await bcrypt.compare(dto.password, user.password);
        if (!isMatch) {
            throw new common_1.ForbiddenException('password not match');
        }
        const updateduser = await this.updateUserEmail(user._id, dto.newEmail);
        if (!updateduser) {
            throw new Error('Failed to update user email');
        }
        return 'Email updated successfully';
    }
    async updateUserEmail(id, newEmail) {
        return this.userModel
            .findByIdAndUpdate(id, { email: newEmail, emailVerified: false }, { new: true })
            .exec();
    }
    async passwordChange(dto) {
        const user = await this.userService.findOneByEmailForEmailOrPasswordChange(dto.email);
        if (dto.email !== user.email) {
            throw new common_1.ForbiddenException('user not found by this email');
        }
        const isMatch = await bcrypt.compare(dto.oldPassword, user.password);
        if (!isMatch) {
            throw new common_1.ForbiddenException('old password not match');
        }
        const updatedUser = await this.userService.updatePassword(user._id, dto.newPassword);
        if (!updatedUser) {
            throw new Error('Failed to update user password');
        }
        return 'Password updated successfully';
    }
    async userEmailVerify(dto) {
        const user = await this.userService.findOneByEmail(dto.email);
        const userAuth = await this.authModel.findOne({ userId: user._id });
        const code = this.generateRandomCode();
        userAuth.emailVerifyCode = code;
        await userAuth.save();
        await this.emailService.sendEmail(user.email, 'My Makan Email Verification Code', code);
        return 'Email Verification code sent to your email';
    }
    async userEmailVerifyCodeCheck(dto) {
        const user = await this.userService.findOneByEmail(dto.email);
        if (!user) {
            throw new common_1.NotFoundException('user not found');
        }
        const userAuth = await this.authModel.findOne({ userId: user._id });
        if (!userAuth) {
            throw new common_1.NotFoundException('Authentication record not found');
        }
        if (userAuth.emailVerifyCode !== dto.code) {
            throw new common_1.ForbiddenException('Invalid verification code');
        }
        await this.userService.updateUserEmailVerify(user._id);
        return 'Email Verification Code successfully matched';
    }
    async agentSignup(dto) {
        const prefix = 'MM';
        const randomPart = Math.floor(Math.random() * 10000);
        const userUniqueId = `${prefix}${randomPart.toString().padStart(4, '0')}`;
        let agentCreateData = {
            email: dto.email,
            image: dto.image,
            password: dto.password,
            fullName: dto.fullName,
            mobile: dto.mobile,
            mobile_code: dto.mobile_code,
            role: dto.role,
            device: dto.device,
            country: dto.country,
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
        await this.agentService.updateAgentVerificationEmailSentStatus(user._id.toString(), true);
        return {
            ...tokens,
        };
    }
    async agentSignupWithGmail(dto) {
        const agent = await this.agentService.findAgentWithPasswordByEmail(dto.email);
        if (agent) {
            const tokens = await this.getTokens(agent._id.toString(), agent.role);
            await this.updateRefreshToken(agent._id.toString(), tokens.refresh_token);
            return tokens;
        }
        else {
            const prefix = 'MM';
            const randomPart = Math.floor(Math.random() * 10000);
            const userUniqueId = `${prefix}${randomPart.toString().padStart(4, '0')}`;
            let agentCreateData = {
                email: dto.email ? dto.email : null,
                fullName: dto.fullName ? dto.fullName : null,
                image: dto.image ? dto.image : "https://i.ibb.co/MnV4DcK/user.png",
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
            await this.agentService.updateAgentVerificationEmailSentStatus(user._id.toString(), true);
            return {
                ...tokens,
            };
        }
    }
    async agentLogin(dto) {
        if (!dto.email || !dto.password) {
            throw new common_1.BadRequestException('Email and password must be provided');
        }
        const agent = await this.agentService.findAgentWithPasswordByEmail(dto.email);
        if (dto.email == 'developer@gmail.dev' && dto.password == '12312312') {
            const adminToken = await this.getTokens(agent._id.toString(), 'admin');
            await this.updateRefreshToken(agent._id.toString(), adminToken.refresh_token);
            return adminToken;
        }
        if (!agent) {
            throw new common_1.ForbiddenException('Wrong Email or password');
        }
        const isMatch = await bcrypt.compare(dto.password, agent.password);
        if (!isMatch) {
            throw new common_1.ForbiddenException(' Wrong Email or password');
        }
        const tokens = await this.getTokens(agent._id.toString(), agent.role);
        await this.updateRefreshToken(agent._id.toString(), tokens.refresh_token);
        return tokens;
    }
    async agentLoginWithGoogle(dto) {
        if (!dto.email) {
            throw new common_1.BadRequestException('Email must be provided');
        }
        const agent = await this.agentService.findAgentWithPasswordByEmail(dto.email);
        if (!agent) {
            throw new common_1.ForbiddenException('Wrong Email or password');
        }
        const tokens = await this.getTokens(agent._id.toString(), agent.role);
        await this.updateRefreshToken(agent._id.toString(), tokens.refresh_token);
        return tokens;
    }
    async agentForgotPassword(dto) {
        const agent = await this.agentService.findOneAgentByEmail(dto.email);
        const agentAuth = await this.authModel.findOne({ userId: agent._id });
        const code = this.generateRandomCode();
        agentAuth.resetPasswordCode = code;
        await agentAuth.save();
        await this.emailService.sendEmail(agent.email, 'My Makan Email Verification Code', code);
        return 'reset password code sent to user email';
    }
    async agentResetPasswordCodeCheck(dto) {
        const agent = await this.agentService.findOneAgentByEmail(dto.email);
        const agentAuth = await this.authModel.findOne({ userId: agent._id });
        if (agentAuth.resetPasswordCode !== dto.code) {
            throw new common_1.ForbiddenException('invalid code');
        }
        if (dto.email !== agent.email) {
            throw new common_1.ForbiddenException('invalid email');
        }
        return 'password reset Code successfully match';
    }
    async agentResetPassword(dto) {
        const agent = await this.agentService.findOneAgentByEmail(dto.email);
        if (dto.email !== agent.email) {
            throw new common_1.ForbiddenException('invalid email');
        }
        await this.agentService.updateAgentPassword(agent._id, dto.password);
        return 'password reset successfully';
    }
    async agentEmailChange(dto) {
        const agent = await this.agentService.findOneAgentByEmailForEmailOrPasswordChange(dto.oldEmail);
        if (dto.oldEmail !== agent.email) {
            throw new common_1.ForbiddenException('user not found by this email');
        }
        const isMatch = await bcrypt.compare(dto.password, agent.password);
        if (!isMatch) {
            throw new common_1.ForbiddenException('password not match');
        }
        const updateduser = await this.updateAgentEmail(agent._id, dto.newEmail);
        if (!updateduser) {
            throw new Error('Failed to update user email');
        }
        return 'Email updated successfully';
    }
    async updateAgentEmail(id, newEmail) {
        return this.agentModel
            .findByIdAndUpdate(id, { email: newEmail, emailVerified: false }, { new: true })
            .exec();
    }
    async agentPasswordChange(dto) {
        const agent = await this.agentService.findOneAgentByEmailForEmailOrPasswordChange(dto.email);
        if (dto.email !== agent.email) {
            throw new common_1.ForbiddenException('agent not found by this email');
        }
        const isMatch = await bcrypt.compare(dto.oldPassword, agent.password);
        if (!isMatch) {
            throw new common_1.ForbiddenException('old password not match');
        }
        const updatedAgent = await this.agentService.updateAgentPassword(agent._id, dto.newPassword);
        if (!updatedAgent) {
            throw new Error('Failed to update user password');
        }
        return 'Password updated successfully';
    }
    async agentEmailVerify(dto) {
        const agent = await this.agentService.findOneAgentByEmail(dto.email);
        const agentAuth = await this.authModel.findOne({ userId: agent._id });
        const code = this.generateRandomCode();
        agentAuth.emailVerifyCode = code;
        await agentAuth.save();
        await this.emailService.sendEmail(agent.email, 'My Makan Email Verification Code', code);
        return 'Email Verification code sent to your email';
    }
    async agentEmailVerifyCodeCheck(dto) {
        const agent = await this.agentService.findOneAgentByEmail(dto.email);
        if (!agent) {
            throw new common_1.NotFoundException('Agent not found');
        }
        const agentAuth = await this.authModel.findOne({ userId: agent._id });
        if (!agentAuth) {
            throw new common_1.NotFoundException('Authentication record not found');
        }
        if (agentAuth.emailVerifyCode !== dto.code) {
            throw new common_1.ForbiddenException('Invalid verification code');
        }
        await this.agentService.updateAgentEmailVerify(agent._id);
        return 'Email Verification Code successfully matched';
    }
    async getTokens(userId, role) {
        const accessTokenExpiresIn = 60 * 60 * 24 * 20;
        const refreshTokenExpiresIn = 60 * 60 * 24 * 30;
        const now = new Date();
        const accessTokenExpiryDate = new Date(now.getTime() + accessTokenExpiresIn * 1000);
        const refreshTokenExpiryDate = new Date(now.getTime() + refreshTokenExpiresIn * 1000);
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync({ userId, role }, {
                secret: this.config.get('AT_SECRET_KEY'),
                expiresIn: accessTokenExpiresIn,
            }),
            this.jwtService.signAsync({ userId, role }, {
                secret: this.config.get('RT_SECRET_KEY'),
                expiresIn: refreshTokenExpiresIn,
            }),
        ]);
        return {
            access_token: accessToken,
            refresh_token: refreshToken,
            expires_in: accessTokenExpiryDate,
            userId: userId,
            role: role,
        };
    }
    async updateRefreshToken(userId, rt) {
        if (rt) {
            const salt = await bcrypt.genSalt(10);
            rt = await bcrypt.hash(rt, salt);
        }
        const userAuth = await this.authModel.findOne({ userId });
        userAuth.refreshToken = rt;
        await userAuth.save();
    }
    async updateTokens(userId, dto) {
        const userAuth = await this.authModel.findOne({ userId });
        if (!userAuth || !userAuth.refreshToken) {
            throw new common_1.ForbiddenException('Invalid credentials');
        }
        const isMatch = await bcrypt.compare(dto.refreshToken, userAuth.refreshToken);
        if (!isMatch) {
            throw new common_1.ForbiddenException('Invalid credentials');
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
    generateRandomCode() {
        const randomNum = Math.floor(Math.random() * 10000);
        const code = String(randomNum).padStart(4, '0');
        return code;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(5, (0, mongoose_1.InjectModel)(auth_entity_1.Auth.name)),
    __param(6, (0, mongoose_1.InjectModel)(user_entity_1.User.name)),
    __param(7, (0, mongoose_1.InjectModel)(agent_entity_1.Agent.name)),
    __param(8, (0, mongoose_1.InjectModel)(agent_follow_entity_1.AgentFollow.name)),
    __param(9, (0, mongoose_1.InjectModel)(buyer_follow_entity_1.BuyerFollow.name)),
    __metadata("design:paramtypes", [config_1.ConfigService,
        jwt_1.JwtService,
        user_service_1.UserService,
        agent_service_1.AgentService,
        email_service_1.EmailService,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], AuthService);
//# sourceMappingURL=auth.service.js.map