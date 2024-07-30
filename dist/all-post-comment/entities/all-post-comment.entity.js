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
exports.AllPostCommentSchema = exports.AllPostComment = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const mongoose_2 = require("mongoose");
const user_entity_1 = require("../../user/entities/user.entity");
const agent_entity_1 = require("../../agent/entities/agent.entity");
const allpost_entity_1 = require("../../allposts/entities/allpost.entity");
let AllPostComment = class AllPostComment {
};
exports.AllPostComment = AllPostComment;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '5ff48e093ecb8200f8b0fff3',
        description: 'The unique identifier of the doctor',
    }),
    __metadata("design:type", String)
], AllPostComment.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: user_entity_1.User,
        description: 'The User ID',
    }),
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'User', }),
    __metadata("design:type", String)
], AllPostComment.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: agent_entity_1.Agent,
        description: 'The User ID',
    }),
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Agent', }),
    __metadata("design:type", String)
], AllPostComment.prototype, "agentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: allpost_entity_1.AllPost,
        description: 'The Post ID',
    }),
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'AllPost', }),
    __metadata("design:type", String)
], AllPostComment.prototype, "postId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'The post comment',
    }),
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], AllPostComment.prototype, "comment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'The post comment',
    }),
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], AllPostComment.prototype, "commentBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        description: 'The reply of post comment',
    }),
    (0, mongoose_1.Prop)({ type: [{ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'AllPostCommentReply' }], default: [] }),
    __metadata("design:type", Array)
], AllPostComment.prototype, "reply", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-02-01T12:34:56.789Z',
        description: 'The timestamp when the doctor was created',
    }),
    __metadata("design:type", Date)
], AllPostComment.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-02-01T12:34:56.789Z',
        description: 'The timestamp when the doctor was last updated',
    }),
    __metadata("design:type", Date)
], AllPostComment.prototype, "updatedAt", void 0);
exports.AllPostComment = AllPostComment = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], AllPostComment);
exports.AllPostCommentSchema = mongoose_1.SchemaFactory.createForClass(AllPostComment);
//# sourceMappingURL=all-post-comment.entity.js.map