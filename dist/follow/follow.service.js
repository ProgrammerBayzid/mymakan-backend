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
exports.FollowService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const agent_entity_1 = require("../agent/entities/agent.entity");
const mongoose_2 = require("mongoose");
const user_entity_1 = require("../user/entities/user.entity");
const buyer_follow_entity_1 = require("./entities/buyer.follow.entity");
const agent_follow_entity_1 = require("./entities/agent.follow.entity");
const mongoose_3 = require("mongoose");
const follow_entity_1 = require("./entities/follow.entity");
let FollowService = class FollowService {
    constructor(agentModel, userModel, agentFollowModel, buyerFollowModel, followModel) {
        this.agentModel = agentModel;
        this.userModel = userModel;
        this.agentFollowModel = agentFollowModel;
        this.buyerFollowModel = buyerFollowModel;
        this.followModel = followModel;
    }
    async followUser(followingType, followingId, currentUserId, currentUserType) {
        if (currentUserId === followingId) {
            throw new common_1.ConflictException("You can't follow yourself");
        }
        let followingUser;
        if (followingType === 'buyer') {
            followingUser = await this.userModel.findById(followingId);
        }
        else if (followingType === 'agent') {
            followingUser = await this.agentModel.findById(followingId);
        }
        else {
            throw new common_1.NotFoundException('Invalid user type');
        }
        if (!followingUser) {
            throw new common_1.NotFoundException('User to follow not found');
        }
        const existingFollow = await this.followModel.findOne({
            followerId: currentUserId,
            followingId,
            followerType: currentUserType,
            followingType,
        });
        if (existingFollow) {
            throw new common_1.ConflictException('You are already following this user');
        }
        await this.followModel.create({
            followerType: currentUserType,
            followerId: currentUserId,
            followingType,
            followingId,
        });
        if (currentUserType === "agent") {
            const agent = await this.agentModel.findById(currentUserId);
            if (followingType === "agent") {
                const followIngAgent = await this.agentModel.findById(followingId);
                const total = followIngAgent.followerAgentCount + 1;
                const total1 = agent.followingAgentCount + 1;
                await this.agentModel.findByIdAndUpdate(followingId, {
                    followerAgentCount: total,
                }, { new: true });
                await this.agentModel.findByIdAndUpdate(currentUserId, {
                    followingAgentCount: total1,
                }, { new: true });
            }
            else {
                const followIngBuyer = await this.userModel.findById(followingId);
                const total = followIngBuyer.followerAgentCount + 1;
                const total1 = agent.followingBuyerCount + 1;
                await this.userModel.findByIdAndUpdate(followingId, {
                    followerAgentCount: total,
                }, { new: true });
                await this.agentModel.findByIdAndUpdate(currentUserId, {
                    followingBuyerCount: total1,
                }, { new: true });
            }
        }
        else {
            const buyer = await this.userModel.findById(currentUserId);
            if (followingType === "buyer") {
                const followIngUser = await this.userModel.findById(followingId);
                const total = followIngUser.followerBuyerCount + 1;
                const total1 = buyer.followingBuyerCount + 1;
                await this.userModel.findByIdAndUpdate(followingId, {
                    followerBuyerCount: total,
                }, { new: true });
                await this.userModel.findByIdAndUpdate(currentUserId, {
                    followingBuyerCount: total1,
                }, { new: true });
            }
            else {
                const followIngAgent = await this.agentModel.findById(followingId);
                const total = followIngAgent.followerBuyerCount + 1;
                const total1 = buyer.followingAgentCount + 1;
                await this.agentModel.findByIdAndUpdate(followingId, {
                    followerBuyerCount: total,
                }, { new: true });
                await this.userModel.findByIdAndUpdate(currentUserId, {
                    followingAgentCount: total1,
                }, { new: true });
            }
        }
        return 'Following successful';
    }
    async unfollowUser(followingType, followingId, currentUserId, currentUserType) {
        if (currentUserId === followingId) {
            throw new common_1.ConflictException("You can't unfollow yourself");
        }
        const existingFollow = await this.followModel.findOne({
            followerId: currentUserId,
            followingId,
            followerType: currentUserType,
            followingType,
        });
        if (!existingFollow) {
            throw new common_1.ConflictException('You are not following this user');
        }
        await this.followModel.deleteOne({
            followerId: currentUserId,
            followingId,
            followerType: currentUserType,
            followingType,
        });
        if (currentUserType === "agent") {
            const agent = await this.agentModel.findById(currentUserId);
            if (followingType === "agent") {
                const followIngAgent = await this.agentModel.findById(followingId);
                const total = followIngAgent.followerAgentCount - 1;
                const total1 = agent.followingAgentCount - 1;
                await this.agentModel.findByIdAndUpdate(followingId, {
                    followerAgentCount: total,
                }, { new: true });
                await this.agentModel.findByIdAndUpdate(currentUserId, {
                    followingAgentCount: total1,
                }, { new: true });
            }
            else {
                const followIngBuyer = await this.userModel.findById(followingId);
                const total = followIngBuyer.followerAgentCount - 1;
                const total1 = agent.followingBuyerCount - 1;
                await this.userModel.findByIdAndUpdate(followingId, {
                    followerAgentCount: total,
                }, { new: true });
                await this.agentModel.findByIdAndUpdate(currentUserId, {
                    followingBuyerCount: total1,
                }, { new: true });
            }
        }
        else {
            const buyer = await this.userModel.findById(currentUserId);
            if (followingType === "buyer") {
                const followIngUser = await this.userModel.findById(followingId);
                const total = followIngUser.followerBuyerCount - 1;
                const total1 = buyer.followingBuyerCount - 1;
                await this.userModel.findByIdAndUpdate(followingId, {
                    followerBuyerCount: total,
                }, { new: true });
                await this.userModel.findByIdAndUpdate(currentUserId, {
                    followingBuyerCount: total1,
                }, { new: true });
            }
            else {
                const followIngAgent = await this.agentModel.findById(followingId);
                const total = followIngAgent.followerBuyerCount - 1;
                const total1 = buyer.followingAgentCount - 1;
                await this.agentModel.findByIdAndUpdate(followingId, {
                    followerBuyerCount: total,
                }, { new: true });
                await this.userModel.findByIdAndUpdate(currentUserId, {
                    followingAgentCount: total1,
                }, { new: true });
            }
        }
        return 'UnFollowing successful';
    }
    async myfollowingUser(currentUserId, currentUserType, page = 1, limit = 10, sortBy = 'createdAt', sortOrder = 'desc', search) {
        const objectId = new mongoose_3.Types.ObjectId(currentUserId);
        const sortOptions = {};
        sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;
        const pipeline = [
            {
                $match: {
                    followerId: objectId,
                    followerType: currentUserType,
                    followingType: 'buyer',
                },
            },
            {
                $lookup: {
                    from: 'users',
                    localField: 'followingId',
                    foreignField: '_id',
                    as: 'followingBuyer',
                },
            },
            { $unwind: { path: '$followingBuyer', preserveNullAndEmptyArrays: true } },
            {
                $match: {
                    'followingAgent.fullName': search ? { $regex: search, $options: 'i' } : { $exists: true },
                },
            },
            {
                $sort: sortOptions,
            },
        ];
        if (!search) {
            pipeline.push({
                $skip: (page - 1) * limit,
            }, {
                $limit: limit,
            });
        }
        const follows = await this.followModel.aggregate(pipeline).exec();
        return follows;
    }
    async myfollowingAgent(currentUserId, currentUserType, page = 1, limit = 10, sortBy = 'createdAt', sortOrder = 'desc', search) {
        const objectId = new mongoose_3.Types.ObjectId(currentUserId);
        const sortOptions = {};
        sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;
        const pipeline = [
            {
                $match: {
                    followerId: objectId,
                    followerType: currentUserType,
                    followingType: 'agent',
                },
            },
            {
                $lookup: {
                    from: 'agents',
                    localField: 'followingId',
                    foreignField: '_id',
                    as: 'followingAgent',
                },
            },
            { $unwind: { path: '$followingAgent', preserveNullAndEmptyArrays: true } },
            {
                $match: {
                    'followingAgent.fullName': search ? { $regex: search, $options: 'i' } : { $exists: true },
                },
            },
            {
                $sort: sortOptions,
            },
        ];
        if (!search) {
            pipeline.push({
                $skip: (page - 1) * limit,
            }, {
                $limit: limit,
            });
        }
        const follows = await this.followModel.aggregate(pipeline).exec();
        return follows;
    }
    async myfollowerUser(currentUserId, currentUserType, page = 1, limit = 10, sortBy = 'createdAt', sortOrder = 'desc', search) {
        const objectId = new mongoose_3.Types.ObjectId(currentUserId);
        const sortOptions = {};
        sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;
        const pipeline = [
            {
                $match: {
                    followingId: objectId,
                    followingType: currentUserType,
                    followerType: 'buyer',
                },
            },
            {
                $lookup: {
                    from: 'users',
                    localField: 'followerId',
                    foreignField: '_id',
                    as: 'followerBuyer',
                },
            },
            { $unwind: { path: '$followerBuyer', preserveNullAndEmptyArrays: true } },
            {
                $match: {
                    'followingAgent.fullName': search ? { $regex: search, $options: 'i' } : { $exists: true },
                },
            },
            {
                $sort: sortOptions,
            },
        ];
        if (!search) {
            pipeline.push({
                $skip: (page - 1) * limit,
            }, {
                $limit: limit,
            });
        }
        const follows = await this.followModel.aggregate(pipeline).exec();
        return follows;
    }
    async myfollowerAgent(currentUserId, currentUserType, page = 1, limit = 10, sortBy = 'createdAt', sortOrder = 'desc', search) {
        const objectId = new mongoose_3.Types.ObjectId(currentUserId);
        const sortOptions = {};
        sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;
        const pipeline = [
            {
                $match: {
                    followingId: objectId,
                    followingType: currentUserType,
                    followerType: 'agent',
                },
            },
            {
                $lookup: {
                    from: 'agents',
                    localField: 'followerId',
                    foreignField: '_id',
                    as: 'followerAgent',
                },
            },
            { $unwind: { path: '$followerAgent', preserveNullAndEmptyArrays: true } },
            {
                $match: {
                    'followingAgent.fullName': search ? { $regex: search, $options: 'i' } : { $exists: true },
                },
            },
            {
                $sort: sortOptions,
            },
        ];
        if (!search) {
            pipeline.push({
                $skip: (page - 1) * limit,
            }, {
                $limit: limit,
            });
        }
        const follows = await this.followModel.aggregate(pipeline).exec();
        return follows;
    }
    async followingExisting(role, id, followingId) {
        const existingFollowing = await this.followModel.findOne({
            followerId: id,
            followerType: role,
            followingId: followingId,
        });
        return !!existingFollowing;
    }
};
exports.FollowService = FollowService;
exports.FollowService = FollowService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(agent_entity_1.Agent.name)),
    __param(1, (0, mongoose_1.InjectModel)(user_entity_1.User.name)),
    __param(2, (0, mongoose_1.InjectModel)(agent_follow_entity_1.AgentFollow.name)),
    __param(3, (0, mongoose_1.InjectModel)(buyer_follow_entity_1.BuyerFollow.name)),
    __param(4, (0, mongoose_1.InjectModel)(follow_entity_1.Follow.name)),
    __metadata("design:paramtypes", [mongoose_2.default.Model, mongoose_2.default.Model, mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], FollowService);
//# sourceMappingURL=follow.service.js.map