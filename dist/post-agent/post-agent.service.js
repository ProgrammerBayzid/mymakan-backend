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
exports.PostAgentService = void 0;
const common_1 = require("@nestjs/common");
const post_agent_entity_1 = require("./entities/post-agent.entity");
const mongoose_1 = require("mongoose");
const http_1 = require("http");
const mongoose_2 = require("@nestjs/mongoose");
const user_entity_1 = require("../user/entities/user.entity");
let PostAgentService = class PostAgentService {
    constructor(postAgentModel, agentModel, userModel) {
        this.postAgentModel = postAgentModel;
        this.agentModel = agentModel;
        this.userModel = userModel;
    }
    async create(userId, role, createAgentDto) {
        const createAgentPost = new this.postAgentModel({
            ...createAgentDto,
            agentId: userId,
            role: role
        });
        const savedPost = await createAgentPost.save();
        return savedPost;
    }
    async findAll(queryOptions) {
        try {
            const { page = 1, limit = 100, for: forFilter, propertyType, state, price, towersorBuildingName, parking, sellType, propertyCategory, country, postType, agentId, tags, sell, sortBy, sortOrder } = queryOptions;
            const limitNumber = Number(limit);
            const baseQuery = { booked: false };
            if (forFilter)
                baseQuery.for = forFilter;
            if (state)
                baseQuery.state = state;
            if (agentId)
                baseQuery.agentId = new mongoose_1.default.Types.ObjectId(agentId);
            if (country)
                baseQuery.country = country;
            if (tags && tags.length > 0)
                baseQuery.tags = { $in: tags };
            if (postType)
                baseQuery.postType = postType;
            if (price)
                baseQuery.price = price;
            if (parking)
                baseQuery.parking = parking;
            if (propertyCategory)
                baseQuery.propertyCategory = propertyCategory;
            if (propertyType)
                baseQuery.propertyType = propertyType;
            if (sellType && sellType.length > 0)
                baseQuery.sellType = { $in: sellType };
            if (sell !== undefined)
                baseQuery.sell = sell;
            if (towersorBuildingName) {
                baseQuery.towersorBuildingName = new RegExp(towersorBuildingName, 'i');
            }
            const skip = (page - 1) * limitNumber;
            const getPostsByType = async (type) => {
                const query = { ...baseQuery, type };
                return await this.postAgentModel.find(query)
                    .sort({ createdAt: -1 })
                    .populate('agentId')
                    .populate({
                    path: 'comment',
                    populate: [
                        { path: 'agentId' },
                        { path: 'userId' },
                        {
                            path: 'reply',
                            populate: [
                                { path: 'agentId' },
                                { path: 'userId' },
                            ]
                        }
                    ]
                })
                    .exec();
            };
            const sponsoredPosts = await getPostsByType("Sponsored");
            const urgentPosts = await getPostsByType("Urgent");
            const otherPostsQuery = { ...baseQuery, type: { $nin: ["Sponsored", "Urgent"] } };
            const otherPosts = await this.postAgentModel.find(otherPostsQuery)
                .sort({ createdAt: -1 })
                .populate('agentId')
                .populate({
                path: 'comment',
                populate: [
                    { path: 'agentId' },
                    { path: 'userId' },
                    {
                        path: 'reply',
                        populate: [
                            { path: 'agentId' },
                            { path: 'userId' },
                        ]
                    }
                ]
            })
                .exec();
            const allPosts = [...sponsoredPosts, ...urgentPosts, ...otherPosts];
            const paginatedPosts = allPosts.slice(skip, skip + limitNumber);
            return paginatedPosts;
        }
        catch (error) {
            console.error('Error in findAll:', error);
            throw error;
        }
    }
    async findAllMatchingPost(queryOptions) {
        try {
            const { page = 1, limit = null, for: forFilter, propertyType, state, price, towersorBuildingName, parking, sellType, propertyCategory, country, postType, agentId, tags, sell, sortBy, sortOrder } = queryOptions;
            let queryObj = { booked: false };
            if (tags && tags.length > 0) {
                queryObj.tags = { $in: tags };
            }
            let query = this.postAgentModel.find(queryObj);
            if (forFilter) {
                query = query.where('for').equals(forFilter);
            }
            if (state) {
                query = query.where('state').equals(state);
            }
            if (agentId) {
                query = query.where('agentId').equals(agentId);
            }
            if (country) {
                query = query.where('country').equals(country);
            }
            if (postType) {
                query = query.where('postType').equals(postType);
            }
            if (price) {
                query = query.where('price').equals(price);
            }
            if (parking) {
                query = query.where('parking').equals(parking);
            }
            if (propertyCategory) {
                query = query.where('propertyCategory').equals(propertyCategory);
            }
            if (propertyType) {
                query = query.where('propertyType').equals(propertyType);
            }
            if (sellType && sellType.length > 0) {
                query = query.where('sellType').in(sellType);
            }
            if (towersorBuildingName) {
                query = query.where('towersorBuildingName').regex(new RegExp(towersorBuildingName, 'i'));
            }
            if (limit !== null) {
                const skip = (page - 1) * limit;
                query = query.skip(skip).limit(limit);
            }
            if (sortBy && sortOrder) {
                const sortOptions = {};
                sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;
                query = query.sort(sortOptions);
            }
            query = query
                .populate('agentId')
                .populate({
                path: 'comment',
                populate: [
                    { path: 'agentId' },
                    { path: 'userId' },
                    { path: 'reply', populate: [{ path: 'agentId' },
                            { path: 'userId' },] }
                ]
            }).populate('likedBy');
            return await query.exec();
        }
        catch (error) {
            console.error('Error in findAll:', error);
            throw error;
        }
    }
    async findMyAgentPost(id, queryOptions) {
        try {
            const { page = 1, limit = 100, for: forFilter, propertyType, state, price, towersorBuildingName, parking, sellType, propertyCategory, country, postType, agentId, tags, sell, sortBy, sortOrder, booked } = queryOptions;
            const objectId = new mongoose_1.Types.ObjectId(id);
            let query = this.postAgentModel.find({ agentId: objectId });
            if (forFilter) {
                query = query.where('for').equals(forFilter);
            }
            if (state) {
                query = query.where('state').equals(state);
            }
            if (country) {
                query = query.where('country').equals(country);
            }
            if (booked) {
                query = query.where('booked').equals(booked);
            }
            if (sell) {
                query = query.where('sell').equals(sell);
            }
            if (postType) {
                query = query.where('postType').equals(postType);
            }
            if (price) {
                query = query.where('price').equals(price);
            }
            if (parking) {
                query = query.where('parking').equals(parking);
            }
            if (propertyCategory) {
                query = query.where('propertyCategory').equals(propertyCategory);
            }
            if (propertyType) {
                query = query.where('propertyType').equals(propertyType);
            }
            if (sellType && sellType.length > 0) {
                query = query.where('sellType').in(sellType);
            }
            if (towersorBuildingName) {
                query = query.where('towersorBuildingName').regex(new RegExp(towersorBuildingName, 'i'));
            }
            const skip = (page - 1) * limit;
            query = query.skip(skip).limit(limit);
            if (sortBy && sortOrder) {
                const sortOptions = {};
                sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;
                query = query.sort(sortOptions);
            }
            query = query
                .populate('agentId')
                .populate({
                path: 'comment',
                populate: [
                    { path: 'agentId' },
                    { path: 'userId' },
                    { path: 'reply', populate: [{ path: 'agentId' },
                            { path: 'userId' },] }
                ]
            }).populate('likedBy');
            return await query.exec();
        }
        catch (error) {
            console.error('Error in findAll:', error);
            throw error;
        }
    }
    async findById(id) {
        const getSinglePost = await this.postAgentModel.findById(id).populate('agentId')
            .populate({
            path: 'comment',
            populate: [
                { path: 'agentId' },
                { path: 'userId' },
                { path: 'reply', populate: [{ path: 'agentId' },
                        { path: 'userId' },] }
            ]
        }).populate('likedBy');
        if (!getSinglePost) {
            throw new common_1.NotFoundException('post not found');
        }
        return getSinglePost;
    }
    async updateById(id, updateAgentPostDto) {
        const updatedPost = await this.postAgentModel.findByIdAndUpdate(id, updateAgentPostDto, {
            new: true,
            runValidators: true,
        }).exec();
        if (!updatedPost) {
            throw new common_1.NotFoundException(`Post with ID ${id} not found`);
        }
        return updatedPost.toObject();
    }
    async likeById(id, userId, role) {
        const post = await this.postAgentModel.findById(id);
        if (!post) {
            throw new common_1.NotFoundException('Post not found');
        }
        let userData;
        if (role === 'buyer') {
            userData = await this.userModel.findById(userId);
        }
        else {
            userData = await this.agentModel.findById(userId);
        }
        if (!userData) {
            throw new common_1.NotFoundException('User not found');
        }
        const alreadyLiked = post.likedBy.some(like => like._id === userId);
        if (alreadyLiked) {
            throw new common_1.BadRequestException('Post already liked by this user');
        }
        post.likeCount++;
        post.likedBy.push({
            _id: userData._id,
            name: userData.fullName,
            image: userData.image,
            role: role
        });
        return await post.save();
    }
    async unlikeById(id, userId) {
        const post = await this.postAgentModel.findById(id);
        if (!post) {
            throw new common_1.NotFoundException('Post not found');
        }
        const userIndex = post.likedBy.findIndex(like => like._id.toString() === userId);
        if (userIndex === -1) {
            throw new common_1.BadRequestException('Post is not liked by this user');
        }
        post.likeCount--;
        post.likedBy.splice(userIndex, 1);
        return await post.save();
    }
    async deleteById(id) {
        try {
            return await this.postAgentModel.findByIdAndDelete(id);
        }
        catch (error) {
            throw new common_1.NotFoundException('Error deleting Doctor');
        }
    }
};
exports.PostAgentService = PostAgentService;
exports.PostAgentService = PostAgentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(post_agent_entity_1.PostAgent.name)),
    __param(1, (0, mongoose_2.InjectModel)(http_1.Agent.name)),
    __param(2, (0, mongoose_2.InjectModel)(user_entity_1.User.name)),
    __metadata("design:paramtypes", [mongoose_1.default.Model, mongoose_1.default.Model, mongoose_1.default.Model])
], PostAgentService);
//# sourceMappingURL=post-agent.service.js.map