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
exports.AgentPostCommentService = void 0;
const common_1 = require("@nestjs/common");
const agent_post_comment_entity_1 = require("./entities/agent-post-comment.entity");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const post_agent_entity_1 = require("../post-agent/entities/post-agent.entity");
let AgentPostCommentService = class AgentPostCommentService {
    constructor(agentPostCommentModel, postAgentModel) {
        this.agentPostCommentModel = agentPostCommentModel;
        this.postAgentModel = postAgentModel;
    }
    async create(userId, role, createAgentPostCommentDto) {
        const { agentPostId } = createAgentPostCommentDto;
        console.log(userId, agentPostId, role);
        const commentData = {
            ...createAgentPostCommentDto,
            ...(role === "buyer" ? { userId } : { agentId: userId })
        };
        const createdComment = new this.agentPostCommentModel(commentData);
        const savedPost = await createdComment.save();
        const commentId = savedPost._id;
        await this.postAgentModel.findByIdAndUpdate(agentPostId, { $push: { comment: commentId } }, { new: true, useFindAndModify: false });
        return savedPost;
    }
    async updateById(id, updateAgentPostCommentDto) {
        const updatedPostComment = await this.agentPostCommentModel.findByIdAndUpdate(id, updateAgentPostCommentDto, {
            new: true,
            runValidators: true,
        }).exec();
        if (!updatedPostComment) {
            throw new common_1.NotFoundException(`Post with ID ${id} not found`);
        }
        return updatedPostComment.toObject();
    }
    async deleteById(id) {
        const commentToDelete = await this.agentPostCommentModel.findById(id).exec();
        if (!commentToDelete) {
            throw new common_1.NotFoundException(`Agent post comment reply with ID ${id} not found`);
        }
        const { agentPostId } = commentToDelete;
        const deletedComment = await this.agentPostCommentModel.findByIdAndDelete(id).exec();
        if (!deletedComment) {
            throw new common_1.NotFoundException(`Agent post comment reply with ID ${id} could not be deleted`);
        }
        await this.postAgentModel.findByIdAndUpdate(agentPostId, { $pull: { comment: id } }, { new: true, useFindAndModify: false });
        return deletedComment;
    }
};
exports.AgentPostCommentService = AgentPostCommentService;
exports.AgentPostCommentService = AgentPostCommentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(agent_post_comment_entity_1.AgentPostComment.name)),
    __param(1, (0, mongoose_2.InjectModel)(post_agent_entity_1.PostAgent.name)),
    __metadata("design:paramtypes", [mongoose_1.Model, mongoose_1.default.Model])
], AgentPostCommentService);
//# sourceMappingURL=agent-post-comment.service.js.map