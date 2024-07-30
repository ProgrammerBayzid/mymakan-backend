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
exports.AgentService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const agent_entity_1 = require("./entities/agent.entity");
const mongoose_2 = require("mongoose");
const auth_entity_1 = require("../auth/entities/auth.entity");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const review_entity_1 = require("./entities/review.entity");
const user_entity_1 = require("../user/entities/user.entity");
const mongodb_1 = require("mongodb");
const follow_entity_1 = require("../follow/entities/follow.entity");
let AgentService = class AgentService {
    constructor(agentModel, userModel, authModel, agentReviewModel, followModel, config, jwtService) {
        this.agentModel = agentModel;
        this.userModel = userModel;
        this.authModel = authModel;
        this.agentReviewModel = agentReviewModel;
        this.followModel = followModel;
        this.config = config;
        this.jwtService = jwtService;
    }
    async agentCreate(createagentDto) {
        const user = await this.agentModel.findOne({
            email: createagentDto.email,
        });
        if (user) {
            throw new common_1.ForbiddenException('Agent already exists');
        }
        const createdAgent = await this.agentModel.create(createagentDto);
        createdAgent.password = await this.hashPassword(createdAgent.password);
        await createdAgent.save();
        return this.sanitizeAgent(createdAgent);
    }
    async agentCreateWithGoogle(createagentDto) {
        const user = await this.agentModel.findOne({
            email: createagentDto.email,
        });
        if (user) {
            throw new common_1.ForbiddenException('Agent already exists');
        }
        const createdAgent = await this.agentModel.create(createagentDto);
        await createdAgent.save();
        return this.sanitizeAgent(createdAgent);
    }
    sanitizeAgent(agent) {
        if (!agent) {
            throw new common_1.ForbiddenException('agent not found');
        }
        const sanitized = agent.toObject();
        delete sanitized.password;
        delete sanitized.verificationEmailSent;
        return sanitized;
    }
    async hashPassword(password) {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        return hash;
    }
    async findOneAgentByEmailForEmailOrPasswordChange(email) {
        const agent = await this.agentModel.findOne({ email });
        return agent;
    }
    async findOneAgentByEmail(email) {
        const agent = await this.agentModel.findOne({ email });
        return this.sanitizeAgent(agent);
    }
    async findAgentWithPasswordByEmail(email) {
        const user = this.agentModel.findOne({ email });
        return user;
    }
    async updateAgentPassword(id, password) {
        const agent = await this.agentModel.findById(id);
        const hashedPassword = await this.hashPassword(password);
        agent.password = hashedPassword;
        await agent.save();
        return this.sanitizeAgent(agent);
    }
    async updateAgentVerificationEmailSentStatus(id, status) {
        const agent = await this.agentModel.findById(id);
        agent.verificationEmailSent = status;
        await agent.save();
        return this.sanitizeAgent(agent);
    }
    async findAllAgent(userId, role, queryOptions) {
        try {
            const { page = 1, limit = 100, state, country, companyName, fullName, totalrating, avgrating, totalReview, sortBy, sortOrder } = queryOptions;
            let query = this.agentModel.find();
            if (country) {
                query = query.where('country').equals(country);
            }
            if (state) {
                query = query.where('state').equals(state);
            }
            if (companyName) {
                query = query.where('companyName').equals(companyName);
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
            const agents = await query.exec();
            const enhancedAgents = await Promise.all(agents.map(async (agent) => {
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
            return enhancedAgents;
        }
        catch (error) {
            console.error('Error in findFollowingAllAgent:', error);
            throw error;
        }
    }
    async findMyProfile(id) {
        const agent = await this.agentModel.findById(id);
        return agent;
    }
    async findById(id, userId, role) {
        const singleAgent = await this.agentModel.findById(id);
        if (!singleAgent) {
            throw new common_1.NotFoundException('Agent not found');
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
        return agentWithFollow;
    }
    async updateById(agentID, updateAgent) {
        return await this.agentModel
            .findByIdAndUpdate(agentID, updateAgent, {
            new: true,
            runValidators: true,
        });
    }
    async updateAgentEmailVerify(id) {
        return this.agentModel
            .findByIdAndUpdate(id, { emailVerified: true }, { new: true })
            .exec();
    }
    async deleteById(id) {
        try {
            const deletedAgent = await this.agentModel.findByIdAndDelete(id);
            if (deletedAgent) {
                await this.authModel.deleteMany({ userId: id });
                return deletedAgent;
            }
            else {
                throw new common_1.NotFoundException('Doctor not found');
            }
        }
        catch (error) {
            throw new common_1.NotFoundException('Error deleting Agent');
        }
    }
    async adminPanelAgentDelete(id) {
        try {
            const deletedAgent = await this.agentModel.findByIdAndDelete(id);
            if (deletedAgent) {
                await this.authModel.deleteMany({ userId: id });
                return deletedAgent;
            }
            else {
                throw new common_1.NotFoundException('Agent not found');
            }
        }
        catch (error) {
            throw new common_1.NotFoundException('Error deleting Agent');
        }
    }
    async reviewCreate(userId, createAgentReviewDto) {
        const { rating, content, agentId } = createAgentReviewDto;
        const agentReview = new this.agentReviewModel({
            rating,
            content,
            agentId,
            reviewerId: userId
        });
        const savedAgentReview = await agentReview.save();
        const agent = await this.agentModel.findById(agentId);
        if (agent) {
            const newTotalRating = agent.totalrating + rating;
            const reviewCount = agent.totalReview + 1;
            const newAvgRating = newTotalRating / reviewCount;
            const newAvgRatingRound = Math.round(newAvgRating);
            await this.agentModel.findByIdAndUpdate(agentId, {
                totalReview: reviewCount,
                totalrating: newTotalRating,
                avgrating: newAvgRatingRound
            }, { new: true, useFindAndModify: false });
        }
        return savedAgentReview;
    }
    async findMyReview(id) {
        const agentReview = await this.agentReviewModel.find({ agentId: new mongodb_1.ObjectId(id) });
        return agentReview;
    }
};
exports.AgentService = AgentService;
exports.AgentService = AgentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(agent_entity_1.Agent.name)),
    __param(1, (0, mongoose_1.InjectModel)(user_entity_1.User.name)),
    __param(2, (0, mongoose_1.InjectModel)(auth_entity_1.Auth.name)),
    __param(3, (0, mongoose_1.InjectModel)(review_entity_1.AgentReview.name)),
    __param(4, (0, mongoose_1.InjectModel)(follow_entity_1.Follow.name)),
    __metadata("design:paramtypes", [mongoose_2.default.Model, mongoose_2.default.Model, mongoose_2.default.Model, mongoose_2.default.Model, mongoose_2.default.Model, config_1.ConfigService,
        jwt_1.JwtService])
], AgentService);
//# sourceMappingURL=agent.service.js.map