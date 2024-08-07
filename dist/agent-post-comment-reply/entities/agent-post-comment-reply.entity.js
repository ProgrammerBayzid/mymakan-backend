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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentPostCommentReplySchema = exports.AgentPostCommentReply = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const swagger_1 = require("@nestjs/swagger");
const agent_post_comment_entity_1 = require("../../agent-post-comment/entities/agent-post-comment.entity");
const agent_entity_1 = require("../../agent/entities/agent.entity");
const user_entity_1 = require("../../user/entities/user.entity");
let AgentPostCommentReply = class AgentPostCommentReply {
};
exports.AgentPostCommentReply = AgentPostCommentReply;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '5ff48e093ecb8200f8b0fff3',
        description: 'The unique identifier of the agent post comment reply',
    }),
    __metadata("design:type", String)
], AgentPostCommentReply.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: user_entity_1.User,
        description: 'The User ID',
    }),
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'User' }),
    __metadata("design:type", String)
], AgentPostCommentReply.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: agent_entity_1.Agent,
        description: 'The Agent ID',
    }),
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Agent' }),
    __metadata("design:type", String)
], AgentPostCommentReply.prototype, "agentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: agent_post_comment_entity_1.AgentPostComment,
        description: 'The Agent Post Comment ID',
    }),
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'AgentPostComment' }),
    __metadata("design:type", String)
], AgentPostCommentReply.prototype, "agentPostCommentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'The agent post comment reply',
    }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], AgentPostCommentReply.prototype, "reply", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-02-01T12:34:56.789Z',
        description: 'The timestamp when the agent post comment reply was created',
    }),
    __metadata("design:type", Date)
], AgentPostCommentReply.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-02-01T12:34:56.789Z',
        description: 'The timestamp when the agent post comment reply was last updated',
    }),
    __metadata("design:type", Date)
], AgentPostCommentReply.prototype, "updatedAt", void 0);
exports.AgentPostCommentReply = AgentPostCommentReply = __decorate([
    (0, mongoose_1.Schema)()
], AgentPostCommentReply);
exports.AgentPostCommentReplySchema = mongoose_1.SchemaFactory.createForClass(AgentPostCommentReply);
//# sourceMappingURL=agent-post-comment-reply.entity.js.map