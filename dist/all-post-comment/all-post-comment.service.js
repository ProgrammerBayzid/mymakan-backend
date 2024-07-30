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
exports.AllPostCommentService = void 0;
const common_1 = require("@nestjs/common");
const all_post_comment_entity_1 = require("./entities/all-post-comment.entity");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const allpost_entity_1 = require("../allposts/entities/allpost.entity");
let AllPostCommentService = class AllPostCommentService {
    constructor(allPostCommentModel, allPostModel) {
        this.allPostCommentModel = allPostCommentModel;
        this.allPostModel = allPostModel;
    }
    async create(userId, role, createPostCommentDto) {
        const { postId } = createPostCommentDto;
        const commentData = {
            ...createPostCommentDto,
            ...(role === "buyer" ? { userId } : { agentId: userId }),
            commentBy: role
        };
        const createdComment = new this.allPostCommentModel(commentData);
        const savedPost = await createdComment.save();
        return savedPost;
    }
    async updateById(id, updatePostCommentDto) {
        const updatedPostComment = await this.allPostCommentModel.findByIdAndUpdate(id, updatePostCommentDto, {
            new: true,
            runValidators: true,
        }).exec();
        if (!updatedPostComment) {
            throw new common_1.NotFoundException(`Post with ID ${id} not found`);
        }
        return updatedPostComment.toObject();
    }
    async deleteById(id) {
        const commentToDelete = await this.allPostCommentModel.findById(id).exec();
        if (!commentToDelete) {
            throw new common_1.NotFoundException(`Agent post comment reply with ID ${id} not found`);
        }
        const { postId } = commentToDelete;
        const deletedComment = await this.allPostCommentModel.findByIdAndDelete(id).exec();
        if (!deletedComment) {
            throw new common_1.NotFoundException(`Agent post comment reply with ID ${id} could not be deleted`);
        }
        return deletedComment;
    }
    async findAllPostComments(postId, page = 1, limit = 100, sortBy, sortOrder) {
        try {
            const objectId = new mongoose_1.default.Types.ObjectId(postId);
            let query = this.allPostCommentModel.find({ postId: objectId }).populate('userId').populate('agentId').populate('reply');
            if (limit !== 0) {
                const skip = (page - 1) * limit;
                query = query.skip(skip).limit(limit);
            }
            if (sortBy && sortOrder) {
                const sortOptions = {};
                sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;
                query = query.sort(sortOptions);
            }
            return await query.exec();
        }
        catch (error) {
            console.error('Error in findAllPostComments:', error);
            throw error;
        }
    }
};
exports.AllPostCommentService = AllPostCommentService;
exports.AllPostCommentService = AllPostCommentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(all_post_comment_entity_1.AllPostComment.name)),
    __param(1, (0, mongoose_2.InjectModel)(allpost_entity_1.AllPost.name)),
    __metadata("design:paramtypes", [mongoose_1.Model, mongoose_1.default.Model])
], AllPostCommentService);
//# sourceMappingURL=all-post-comment.service.js.map