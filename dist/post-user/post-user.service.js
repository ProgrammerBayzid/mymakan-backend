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
exports.PostUserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const post_user_entity_1 = require("./entities/post-user.entity");
const user_entity_1 = require("../user/entities/user.entity");
const agent_entity_1 = require("../agent/entities/agent.entity");
let PostUserService = class PostUserService {
    constructor(postUserModel, userModel, agentModel) {
        this.postUserModel = postUserModel;
        this.userModel = userModel;
        this.agentModel = agentModel;
    }
    async createUserPost(userId, role, createUserPostDto) {
        const createUserPost = new this.postUserModel({
            ...createUserPostDto,
            userId: userId,
            role: role,
        });
        const savedPost = await createUserPost.save();
        return savedPost;
    }
    async findAll(queryOptions) {
        try {
            const { page = 1, limit = 100, for: forFilter, propertyType, state, price, towersorBuildingName, parking, sellType, propertyCategory, country, postType, tags, userId, sortBy, sortOrder, booked } = queryOptions;
            const limitNumber = Number(limit);
            const baseQuery = { booked: false };
            if (tags)
                baseQuery.tags = { $in: tags };
            if (forFilter)
                baseQuery.for = forFilter;
            if (state)
                baseQuery.state = state;
            if (userId)
                baseQuery.userId = new mongoose_2.Types.ObjectId(userId);
            if (country)
                baseQuery.country = country;
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
            if (towersorBuildingName) {
                baseQuery.towersorBuildingName = new RegExp(towersorBuildingName, 'i');
            }
            const skip = (page - 1) * limitNumber;
            const getPostsByType = async (type) => {
                const query = { ...baseQuery, type };
                return await this.postUserModel.find(query)
                    .sort({ createdAt: -1 })
                    .populate('userId')
                    .populate({
                    path: 'comment',
                    populate: [
                        { path: 'userId' },
                        { path: 'agentId' },
                        {
                            path: 'reply',
                            populate: [
                                { path: 'userId' },
                                { path: 'agentId' },
                            ]
                        }
                    ]
                })
                    .exec();
            };
            const type1Posts = await getPostsByType("Sponsored");
            const type2Posts = await getPostsByType("Urgent");
            const otherPostsQuery = { ...baseQuery, type: { $nin: ["Sponsored", "Urgent"] } };
            const otherPosts = await this.postUserModel.find(otherPostsQuery)
                .sort({ createdAt: -1 })
                .populate('userId')
                .populate({
                path: 'comment',
                populate: [
                    { path: 'userId' },
                    { path: 'agentId' },
                    {
                        path: 'reply',
                        populate: [
                            { path: 'userId' },
                            { path: 'agentId' },
                        ]
                    }
                ]
            })
                .exec();
            const allPosts = [...type1Posts, ...type2Posts, ...otherPosts];
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
            const { page = 1, limit = null, for: forFilter, propertyType, state, price, towersorBuildingName, parking, sellType, propertyCategory, country, postType, userId, tags, sell, sortBy, sortOrder, booked } = queryOptions;
            let queryObj = { booked: false };
            if (tags && tags.length > 0) {
                queryObj.tags = { $in: tags };
            }
            let query = this.postUserModel.find(queryObj);
            if (forFilter) {
                query = query.where('for').equals(forFilter);
            }
            if (state) {
                query = query.where('state').equals(state);
            }
            if (userId) {
                query = query.where('userId').equals(userId);
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
                .populate('userId').populate({
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
    async findMyUserPost(id, queryOptions) {
        try {
            const { page = 1, limit = 100, for: forFilter, type, propertyType, state, price, towersorBuildingName, parking, sellType, propertyCategory, country, postType, tags, sell, sortBy, sortOrder, booked } = queryOptions;
            const objectId = new mongoose_2.Types.ObjectId(id);
            let query = this.postUserModel.find({ userId: objectId });
            if (forFilter) {
                query = query.where('for').equals(forFilter);
            }
            if (type) {
                query = query.where('type').equals(type);
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
                .populate('userId').populate({
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
        const getSinglePost = await this.postUserModel.findById(id).populate('userId').populate({
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
    async updateById(id, updateUserPostDto) {
        const updatedPost = await this.postUserModel.findByIdAndUpdate(id, updateUserPostDto, {
            new: true,
            runValidators: true,
        }).exec();
        if (!updatedPost) {
            throw new common_1.NotFoundException(`Post with ID ${id} not found`);
        }
        return updatedPost.toObject();
    }
    async likeById(id, userId, role) {
        const post = await this.postUserModel.findById(id);
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
        const post = await this.postUserModel.findById(id);
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
            return await this.postUserModel.findByIdAndDelete(id);
        }
        catch (error) {
            throw new common_1.NotFoundException('Error deleting Doctor');
        }
    }
};
exports.PostUserService = PostUserService;
exports.PostUserService = PostUserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(post_user_entity_1.PostUser.name)),
    __param(1, (0, mongoose_1.InjectModel)(user_entity_1.User.name)),
    __param(2, (0, mongoose_1.InjectModel)(agent_entity_1.Agent.name)),
    __metadata("design:paramtypes", [mongoose_2.default.Model, mongoose_2.default.Model, mongoose_2.default.Model])
], PostUserService);
//# sourceMappingURL=post-user.service.js.map