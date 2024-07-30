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
exports.UserPostCommentReplyService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_post_comment_reply_entity_1 = require("./entities/user-post-comment-reply.entity");
const mongoose_2 = require("mongoose");
const user_post_comment_entity_1 = require("../user-post-comment/entities/user-post-comment.entity");
let UserPostCommentReplyService = class UserPostCommentReplyService {
    constructor(userPostCommentReplyModel, userPostCommentModel) {
        this.userPostCommentReplyModel = userPostCommentReplyModel;
        this.userPostCommentModel = userPostCommentModel;
    }
    async create(userId, role, createDto) {
        const { userPostCommentId, reply } = createDto;
        const data = {
            userPostCommentId,
            reply,
            ...(role === 'buyer' ? { userId } : { agentId: userId }),
        };
        const createdCommentReply = new this.userPostCommentReplyModel(data);
        const savedPostCommentReply = await createdCommentReply.save();
        const replyId = savedPostCommentReply._id;
        await this.userPostCommentModel.findByIdAndUpdate(userPostCommentId, { $push: { reply: replyId } }, { new: true, useFindAndModify: false });
        return savedPostCommentReply;
    }
    async updateById(id, updateDto) {
        const updatedPostCommentReply = await this.userPostCommentReplyModel
            .findByIdAndUpdate(id, updateDto, { new: true, runValidators: true })
            .exec();
        if (!updatedPostCommentReply) {
            throw new common_1.NotFoundException(`Agent post comment reply with ID ${id} not found`);
        }
        return updatedPostCommentReply;
    }
    async deleteById(id) {
        const replyToDelete = await this.userPostCommentReplyModel.findById(id).exec();
        if (!replyToDelete) {
            throw new common_1.NotFoundException(`Agent post comment reply with ID ${id} not found`);
        }
        const { userPostCommentId } = replyToDelete;
        const deletedReply = await this.userPostCommentReplyModel.findByIdAndDelete(id).exec();
        if (!deletedReply) {
            throw new common_1.NotFoundException(`Agent post comment reply with ID ${id} could not be deleted`);
        }
        await this.userPostCommentModel.findByIdAndUpdate(userPostCommentId, { $pull: { reply: id } }, { new: true, useFindAndModify: false });
        return deletedReply;
    }
};
exports.UserPostCommentReplyService = UserPostCommentReplyService;
exports.UserPostCommentReplyService = UserPostCommentReplyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_post_comment_reply_entity_1.UserPostCommentReply.name)),
    __param(1, (0, mongoose_1.InjectModel)(user_post_comment_entity_1.UserPostComment.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], UserPostCommentReplyService);
//# sourceMappingURL=user-post-comment-reply.service.js.map