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
exports.AllpostsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const agent_entity_1 = require("../agent/entities/agent.entity");
const user_entity_1 = require("../user/entities/user.entity");
const allpost_entity_1 = require("./entities/allpost.entity");
const mongoose_2 = require("mongoose");
const save_post_entity_1 = require("../save-post/entities/save-post.entity");
let AllpostsService = class AllpostsService {
    constructor(allPostModel, agentModel, userModel, savePostModel) {
        this.allPostModel = allPostModel;
        this.agentModel = agentModel;
        this.userModel = userModel;
        this.savePostModel = savePostModel;
    }
    async create(userId, role, createPostDto) {
        const createPost = new this.allPostModel({
            ...createPostDto,
            role: role,
            [role === "agent" ? "agentId" : "userId"]: userId
        });
        const savedPost = await createPost.save();
        if (role === "agent") {
            const agent = await this.agentModel.findById(userId);
            const totalPost = agent.totalPost + 1;
            await this.agentModel.findByIdAndUpdate(userId, {
                totalPost: totalPost,
            }, { new: true, useFindAndModify: false });
            if (createPostDto.type === "Urgent") {
                const totalUrgentPost = agent.totalUrgentPost + 1;
                await this.agentModel.findByIdAndUpdate(userId, {
                    totalUrgentPost: totalUrgentPost,
                }, { new: true, useFindAndModify: false });
            }
            else {
                const totalSponsoredPost = agent.totalSponsoredPost + 1;
                await this.agentModel.findByIdAndUpdate(userId, {
                    totalSponsoredPost: totalSponsoredPost,
                }, { new: true, useFindAndModify: false });
            }
        }
        else {
            const buyer = await this.userModel.findById(userId);
            const totalPost = buyer.totalPost + 1;
            await this.userModel.findByIdAndUpdate(userId, {
                totalPost: totalPost,
            }, { new: true, useFindAndModify: false });
            if (createPostDto.type === "Urgent") {
                const totalUrgentPost = buyer.totalUrgentPost + 1;
                await this.userModel.findByIdAndUpdate(userId, {
                    totalUrgentPost: totalUrgentPost,
                }, { new: true, useFindAndModify: false });
            }
            else {
                const totalSponsoredPost = buyer.totalSponsoredPost + 1;
                await this.userModel.findByIdAndUpdate(userId, {
                    totalSponsoredPost: totalSponsoredPost,
                }, { new: true, useFindAndModify: false });
            }
        }
        return savedPost;
    }
    async findAll(myId, myRole, queryOptions) {
        try {
            const { page = 1, limit = 100, for: forFilter, propertyType, state, price, towersorBuildingName, parking, sellType, propertyCategory, country, postType, agentId, userId, tags, sell, role, sortBy, sortOrder } = queryOptions;
            const limitNumber = Number(limit);
            const baseQuery = { hidden: false };
            if (forFilter)
                baseQuery.for = forFilter;
            if (state)
                baseQuery.state = state;
            if (role)
                baseQuery.role = role;
            if (agentId)
                baseQuery.agentId = new mongoose_2.default.Types.ObjectId(agentId);
            if (userId)
                baseQuery.userId = new mongoose_2.default.Types.ObjectId(userId);
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
                return await this.allPostModel.find(query)
                    .sort({ createdAt: -1 })
                    .populate('agentId')
                    .populate('userId')
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
            const otherPosts = await this.allPostModel.find(otherPostsQuery)
                .sort({ createdAt: -1 })
                .populate('agentId')
                .populate('userId')
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
            const paginatedPosts = limitNumber === 0 ? allPosts : allPosts.slice(skip, skip + limitNumber);
            const postsWithSaveField = await Promise.all(paginatedPosts.map(async (post) => {
                let existingSavePost;
                if (role === "buyer") {
                    existingSavePost = await this.savePostModel.findOne({
                        userId: myId,
                        saveBy: myRole,
                        savePostId: post._id,
                    });
                }
                else if (role === "agent") {
                    existingSavePost = await this.savePostModel.findOne({
                        agentId: myId,
                        saveBy: myRole,
                        savePostId: post._id,
                    });
                }
                return {
                    ...post.toObject(),
                    saveByMe: !!existingSavePost
                };
            }));
            return postsWithSaveField;
        }
        catch (error) {
            console.error('Error in findAll:', error);
            throw error;
        }
    }
    async findById(id, myId, myRole) {
        const getSinglePost = await this.allPostModel.findById(id)
            .populate('agentId')
            .populate('userId')
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
            .populate('likedBy');
        if (!getSinglePost) {
            throw new common_1.NotFoundException('Post not found');
        }
        let existingSavePost;
        if (myRole === "buyer") {
            existingSavePost = await this.savePostModel.findOne({
                userId: myId,
                saveBy: myRole,
                savePostId: getSinglePost._id,
            });
        }
        else if (myRole === "agent") {
            existingSavePost = await this.savePostModel.findOne({
                agentId: myId,
                saveBy: myRole,
                savePostId: getSinglePost._id,
            });
        }
        const postWithSaveField = {
            ...getSinglePost.toObject(),
            save: !!existingSavePost
        };
        return postWithSaveField;
    }
    async updateById(id, updateAllPostDto) {
        const updatedPost = await this.allPostModel.findByIdAndUpdate(id, updateAllPostDto, {
            new: true,
            runValidators: true,
        }).exec();
        if (!updatedPost) {
            throw new common_1.NotFoundException(`Post with ID ${id} not found`);
        }
        return updatedPost.toObject();
    }
    async likeById(id, userId, role) {
        const post = await this.allPostModel.findById(id);
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
        const post = await this.allPostModel.findById(id);
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
    async deleteById(id, userId, role) {
        try {
            const post = await this.allPostModel.findById(id);
            if (!post) {
                throw new common_1.NotFoundException('Post not found');
            }
            await this.allPostModel.findByIdAndDelete(id);
            if (role === "agent") {
                const agent = await this.agentModel.findById(userId);
                if (!agent) {
                    throw new common_1.NotFoundException('Agent not found');
                }
                const totalPost = agent.totalPost - 1;
                await this.agentModel.findByIdAndUpdate(userId, { totalPost: totalPost }, { new: true, useFindAndModify: false });
            }
            else {
                const buyer = await this.userModel.findById(userId);
                if (!buyer) {
                    throw new common_1.NotFoundException('User not found');
                }
                const totalPost = buyer.totalPost - 1;
                await this.userModel.findByIdAndUpdate(userId, { totalPost: totalPost }, { new: true, useFindAndModify: false });
            }
            return post;
        }
        catch (error) {
            throw new common_1.NotFoundException('Error deleting post');
        }
    }
    async findMyAllPost(id, role) {
        try {
            const objectId = new mongoose_2.Types.ObjectId(id);
            let matchStage = {};
            if (role === "buyer") {
                matchStage.userId = objectId;
            }
            else {
                matchStage.agentId = objectId;
            }
            const results = await this.allPostModel.aggregate([
                { $match: matchStage },
                {
                    $facet: {
                        totalPosts: [
                            { $count: "count" }
                        ],
                        sponsoredPosts: [
                            { $match: { type: "Sponsored" } },
                            { $count: "count" }
                        ],
                        urgentPosts: [
                            { $match: { type: "Urgent" } },
                            { $count: "count" }
                        ],
                        normalPosts: [
                            { $match: { type: "Normal" } },
                            { $count: "count" }
                        ]
                    }
                }
            ]);
            const totalPosts = results[0].totalPosts.length > 0 ? results[0].totalPosts[0].count : 0;
            const sponsoredPosts = results[0].sponsoredPosts.length > 0 ? results[0].sponsoredPosts[0].count : 0;
            const urgentPosts = results[0].urgentPosts.length > 0 ? results[0].urgentPosts[0].count : 0;
            const normalPosts = results[0].normalPosts.length > 0 ? results[0].normalPosts[0].count : 0;
            return { totalPosts, sponsoredPosts, urgentPosts, normalPosts };
        }
        catch (error) {
            console.error('Error in findMyAllPost:', error);
            throw error;
        }
    }
};
exports.AllpostsService = AllpostsService;
exports.AllpostsService = AllpostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(allpost_entity_1.AllPost.name)),
    __param(1, (0, mongoose_1.InjectModel)(agent_entity_1.Agent.name)),
    __param(2, (0, mongoose_1.InjectModel)(user_entity_1.User.name)),
    __param(3, (0, mongoose_1.InjectModel)(save_post_entity_1.SavePost.name)),
    __metadata("design:paramtypes", [mongoose_2.default.Model, mongoose_2.default.Model, mongoose_2.default.Model, mongoose_2.default.Model])
], AllpostsService);
//# sourceMappingURL=allposts.service.js.map