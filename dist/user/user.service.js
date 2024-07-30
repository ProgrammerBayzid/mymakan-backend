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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_entity_1 = require("./entities/user.entity");
const mongoose_2 = require("mongoose");
const auth_entity_1 = require("../auth/entities/auth.entity");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const review_entity_1 = require("./entities/review.entity");
const mongodb_1 = require("mongodb");
const follow_entity_1 = require("../follow/entities/follow.entity");
let UserService = class UserService {
    constructor(userModel, authModel, userReviewModel, followModel, config, jwtService) {
        this.userModel = userModel;
        this.authModel = authModel;
        this.userReviewModel = userReviewModel;
        this.followModel = followModel;
        this.config = config;
        this.jwtService = jwtService;
    }
    async userCreate(createUserDto) {
        const user = await this.userModel.findOne({
            email: createUserDto.email,
        });
        if (user) {
            throw new common_1.ForbiddenException('user already exists');
        }
        const createdUser = await this.userModel.create(createUserDto);
        createdUser.password = await this.hashPassword(createdUser.password);
        await createdUser.save();
        return this.sanitizeUser(createdUser);
    }
    async userCreateWithGoogle(createUserDto) {
        const user = await this.userModel.findOne({
            email: createUserDto.email,
        });
        if (user) {
            throw new common_1.ForbiddenException('user already exists');
        }
        const createdUser = await this.userModel.create(createUserDto);
        await createdUser.save();
        console.log("done");
        return this.sanitizeUser(createdUser);
    }
    sanitizeUser(user) {
        if (!user) {
            throw new common_1.ForbiddenException('user not found');
        }
        const sanitized = user.toObject();
        delete sanitized.password;
        delete sanitized.verificationEmailSent;
        return sanitized;
    }
    async hashPassword(password) {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        return hash;
    }
    async findOneByEmailForEmailOrPasswordChange(email) {
        const user = await this.userModel.findOne({ email });
        return user;
    }
    async findOneByEmail(email) {
        const user = await this.userModel.findOne({ email });
        return this.sanitizeUser(user);
    }
    async findUserWithPasswordByEmail(email) {
        const user = this.userModel.findOne({ email });
        return user;
    }
    async updatePassword(id, password) {
        const user = await this.userModel.findById(id);
        const hashedPassword = await this.hashPassword(password);
        user.password = hashedPassword;
        await user.save();
        return this.sanitizeUser(user);
    }
    async updateVerificationEmailSentStatus(id, status) {
        const user = await this.userModel.findById(id);
        user.verificationEmailSent = status;
        await user.save();
        return this.sanitizeUser(user);
    }
    async findAllUser(userId, role, queryOptions) {
        try {
            const { page = 1, limit = 100, state, country, fullName, totalrating, avgrating, totalReview, sortBy, sortOrder } = queryOptions;
            let query = this.userModel.find();
            if (country) {
                query = query.where('country').equals(country);
            }
            if (state) {
                query = query.where('state').equals(state);
            }
            if (totalrating) {
                query = query.where('totalrating').equals(totalrating);
            }
            if (avgrating) {
                query = query.where('avgrating').equals(avgrating);
            }
            if (totalReview) {
                query = query.where('totalReview').equals(totalReview);
            }
            if (fullName) {
                query = query.where('fullName').regex(new RegExp(fullName, 'i'));
            }
            if (limit !== 0) {
                const skip = (page - 1) * limit;
                query = query.skip(skip).limit(limit);
            }
            if (sortBy && sortOrder) {
                const sortOptions = {};
                sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;
                query = query.sort(sortOptions);
            }
            const users = await query.exec();
            const enhancedUsers = await Promise.all(users.map(async (agent) => {
                const existingFollowing = await this.followModel.findOne({
                    followerId: userId,
                    followerType: role,
                    followingId: agent._id
                });
                return {
                    ...agent.toObject(),
                    following: !!existingFollowing
                };
            }));
            return enhancedUsers;
        }
        catch (error) {
            console.error('Error in findFollowingAllAgent:', error);
            throw error;
        }
    }
    async findMyProfile(id) {
        const users = await this.userModel.findById(id);
        return users;
    }
    async findById(id, userId, role) {
        const singleAgent = await this.userModel.findById(id);
        if (!singleAgent) {
            throw new common_1.NotFoundException('Buyer not found');
        }
        const existingFollowing = await this.followModel.findOne({
            followerId: userId,
            followerType: role,
            followingId: id
        });
        const agentWithFollow = {
            ...singleAgent.toObject(),
            following: !!existingFollowing
        };
        console.log(agentWithFollow);
        console.log(existingFollowing);
        return agentWithFollow;
    }
    async updateById(buyerID, updateBuyer) {
        return await this.userModel
            .findByIdAndUpdate(buyerID, updateBuyer, {
            new: true,
            runValidators: true,
        });
    }
    async updateUserEmailVerify(id) {
        return this.userModel
            .findByIdAndUpdate(id, { emailVerified: true }, { new: true })
            .exec();
    }
    async deleteById(id) {
        try {
            const deletedUser = await this.userModel.findByIdAndDelete(id);
            if (deletedUser) {
                await this.authModel.deleteMany({ userId: id });
                return deletedUser;
            }
            else {
                throw new common_1.NotFoundException('User not found');
            }
        }
        catch (error) {
            throw new common_1.NotFoundException('Error deleting book');
        }
    }
    async adminPanelUserDelete(id) {
        try {
            const deletedUser = await this.userModel.findByIdAndDelete(id);
            if (deletedUser) {
                await this.authModel.deleteMany({ userId: id });
                return deletedUser;
            }
            else {
                throw new common_1.NotFoundException('user not found');
            }
        }
        catch (error) {
            throw new common_1.NotFoundException('Error deleting user');
        }
    }
    async reviewCreate(agentId, createUserReviewDto) {
        const { rating, content, userId } = createUserReviewDto;
        const userReview = new this.userReviewModel({
            rating,
            content,
            userId,
            reviewerId: agentId
        });
        const savedUserReview = await userReview.save();
        const user = await this.userModel.findById(userId);
        if (user) {
            const newTotalRating = user.totalrating + rating;
            const reviewCount = user.totalReview + 1;
            const newAvgRating = newTotalRating / reviewCount;
            const newAvgRatingRound = Math.round(newAvgRating);
            await this.userModel.findByIdAndUpdate(userId, {
                totalReview: reviewCount,
                totalrating: newTotalRating,
                avgrating: newAvgRatingRound
            }, { new: true, useFindAndModify: false });
        }
        return savedUserReview;
    }
    async findMyReview(id) {
        const userReview = await this.userReviewModel.find({ userId: new mongodb_1.ObjectId(id) });
        return userReview;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_entity_1.User.name)),
    __param(1, (0, mongoose_1.InjectModel)(auth_entity_1.Auth.name)),
    __param(2, (0, mongoose_1.InjectModel)(review_entity_1.UserReview.name)),
    __param(3, (0, mongoose_1.InjectModel)(follow_entity_1.Follow.name)),
    __metadata("design:paramtypes", [mongoose_2.default.Model, mongoose_2.default.Model, mongoose_2.default.Model, mongoose_2.default.Model, config_1.ConfigService,
        jwt_1.JwtService])
], UserService);
//# sourceMappingURL=user.service.js.map