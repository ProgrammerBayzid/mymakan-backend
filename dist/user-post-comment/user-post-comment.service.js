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
exports.UserPostCommentService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_post_comment_entity_1 = require("./entities/user-post-comment.entity");
const mongoose_2 = require("mongoose");
const post_user_entity_1 = require("../post-user/entities/post-user.entity");
let UserPostCommentService = class UserPostCommentService {
    constructor(userPostCommentModel, postUserModel) {
        this.userPostCommentModel = userPostCommentModel;
        this.postUserModel = postUserModel;
    }
    async create(userId, role, createUserPostCommentDto) {
        const { userPostId } = createUserPostCommentDto;
        const commentData = {
            ...createUserPostCommentDto,
            ...(role === "buyer" ? { userId } : { agentId: userId })
        };
        const createdComment = new this.userPostCommentModel(commentData);
        const savedPost = await createdComment.save();
        const commentId = savedPost._id;
        await this.postUserModel.findByIdAndUpdate(userPostId, { $push: { comment: commentId } }, { new: true, useFindAndModify: false });
        return savedPost;
    }
    async updateById(id, updateUserPostCommentDto) {
        const updatedPostComment = await this.userPostCommentModel.findByIdAndUpdate(id, updateUserPostCommentDto, {
            new: true,
            runValidators: true,
        }).exec();
        if (!updatedPostComment) {
            throw new common_1.NotFoundException(`Post with ID ${id} not found`);
        }
        return updatedPostComment.toObject();
    }
    async deleteById(id) {
        const commentToDelete = await this.userPostCommentModel.findById(id).exec();
        if (!commentToDelete) {
            throw new common_1.NotFoundException(`Agent post comment reply with ID ${id} not found`);
        }
        const { userPostId } = commentToDelete;
        const deletedComment = await this.userPostCommentModel.findByIdAndDelete(id).exec();
        if (!deletedComment) {
            throw new common_1.NotFoundException(`Agent post comment reply with ID ${id} could not be deleted`);
        }
        await this.postUserModel.findByIdAndUpdate(userPostId, { $pull: { comment: id } }, { new: true, useFindAndModify: false });
        return deletedComment;
    }
};
exports.UserPostCommentService = UserPostCommentService;
exports.UserPostCommentService = UserPostCommentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_post_comment_entity_1.UserPostComment.name)),
    __param(1, (0, mongoose_1.InjectModel)(post_user_entity_1.PostUser.name)),
    __metadata("design:paramtypes", [mongoose_2.Model, mongoose_2.default.Model])
], UserPostCommentService);
//# sourceMappingURL=user-post-comment.service.js.map