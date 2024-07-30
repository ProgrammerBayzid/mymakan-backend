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
exports.SavePostService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const save_post_entity_1 = require("./entities/save-post.entity");
const mongoose_2 = require("mongoose");
let SavePostService = class SavePostService {
    constructor(savePostModel) {
        this.savePostModel = savePostModel;
    }
    async savePostById(role, id, userId, saveby) {
        console.log(`role: ${role}, id: ${id}, userId: ${userId}, saveby: ${saveby}`);
        let savePostData = {
            saveBy: saveby
        };
        if (saveby === "buyer") {
            savePostData.userId = userId;
            savePostData.savePostId = id;
        }
        else {
            savePostData.agentId = userId;
            savePostData.savePostId = id;
        }
        console.log('savePostData:', savePostData);
        const savePost = new this.savePostModel(savePostData);
        await savePost.save();
        return "Post saved successfully";
    }
    async findMySavePost(id, role, page, limit, sortBy, sortOrder, postType) {
        try {
            const objectId = new mongoose_2.Types.ObjectId(id);
            let matchStage = {};
            if (role === "buyer") {
                matchStage.userId = objectId;
            }
            else {
                matchStage.agentId = objectId;
            }
            console.log('Constructed Match Stage:', matchStage);
            const skip = (page - 1) * limit;
            const sortOptions = {};
            sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;
            const aggregationPipeline = [
                { $match: matchStage },
                { $sort: sortOptions },
                { $skip: skip },
                { $limit: Number(limit) },
                {
                    $lookup: {
                        from: 'users',
                        localField: 'userId',
                        foreignField: '_id',
                        as: 'userId',
                    },
                },
                { $unwind: { path: '$userId', preserveNullAndEmptyArrays: true } },
                {
                    $lookup: {
                        from: 'agents',
                        localField: 'agentId',
                        foreignField: '_id',
                        as: 'agentId',
                    },
                },
                { $unwind: { path: '$agentId', preserveNullAndEmptyArrays: true } },
                {
                    $lookup: {
                        from: 'allposts',
                        localField: 'savePostId',
                        foreignField: '_id',
                        as: 'savePostId',
                    },
                },
                { $unwind: { path: '$savePostId', preserveNullAndEmptyArrays: true } },
                {
                    $lookup: {
                        from: 'agents',
                        localField: 'savePostId.agentId',
                        foreignField: '_id',
                        as: 'savePostId.agentId',
                    },
                },
                { $unwind: { path: '$savePostId.agentId', preserveNullAndEmptyArrays: true } },
                {
                    $lookup: {
                        from: 'users',
                        localField: 'savePostId.userId',
                        foreignField: '_id',
                        as: 'savePostId.userId',
                    },
                },
                { $unwind: { path: '$savePostId.userId', preserveNullAndEmptyArrays: true } },
            ];
            if (postType) {
                aggregationPipeline.push({
                    $match: { 'savePostId.postType': postType }
                });
            }
            const results = await this.savePostModel.aggregate(aggregationPipeline).exec();
            return results;
        }
        catch (error) {
            console.error('Error in findMySavePost:', error);
            throw error;
        }
    }
    async deleteById(id) {
        try {
            console.log();
            return await this.savePostModel.findByIdAndDelete(id);
        }
        catch (error) {
            throw new common_1.NotFoundException('Error deleting Doctor');
        }
    }
    async savePostExisting(role, id, savePostId) {
        let existingSavePost;
        if (role === "buyer") {
            existingSavePost = await this.savePostModel.findOne({
                userId: id,
                saveBy: role,
                savePostId: savePostId,
            });
        }
        else if (role === "agent") {
            existingSavePost = await this.savePostModel.findOne({
                agentId: id,
                saveBy: role,
                savePostId: savePostId,
            });
        }
        else {
            throw new common_1.BadRequestException('Invalid role specified');
        }
        return !!existingSavePost;
    }
    async deletePostExisting(role, id, savePostId) {
        let deleteResult;
        if (role === "buyer") {
            deleteResult = await this.savePostModel.deleteOne({
                userId: id,
                saveBy: role,
                savePostId: savePostId,
            });
        }
        else if (role === "agent") {
            deleteResult = await this.savePostModel.deleteOne({
                agentId: id,
                saveBy: role,
                savePostId: savePostId,
            });
        }
        else {
            throw new common_1.BadRequestException('Invalid role specified');
        }
        return deleteResult.deletedCount > 0;
    }
};
exports.SavePostService = SavePostService;
exports.SavePostService = SavePostService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(save_post_entity_1.SavePost.name)),
    __metadata("design:paramtypes", [mongoose_2.default.Model])
], SavePostService);
//# sourceMappingURL=save-post.service.js.map