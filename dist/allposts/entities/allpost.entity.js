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
exports.AllPostSchema = exports.AllPost = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const mongoose_2 = require("mongoose");
const agent_entity_1 = require("../../agent/entities/agent.entity");
const class_validator_1 = require("class-validator");
const user_entity_1 = require("../../user/entities/user.entity");
const post_location_1 = require("../../post-agent/entities/post-location");
let AllPost = class AllPost {
};
exports.AllPost = AllPost;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '5ff48e093ecb8200f8b0fff3',
        description: 'The unique identifier of the post',
    }),
    __metadata("design:type", String)
], AllPost.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'the post title',
        description: 'The Post title',
    }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], AllPost.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: String }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AllPost.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'the post description',
        description: 'The Post description',
    }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], AllPost.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'sell or rent etc',
        description: 'The post for sell or rent etc',
    }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], AllPost.prototype, "for", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: agent_entity_1.Agent,
        description: 'The Agent ID',
    }),
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Agent' }),
    __metadata("design:type", String)
], AllPost.prototype, "agentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: user_entity_1.User,
        description: 'The Agent ID',
    }),
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'User' }),
    __metadata("design:type", String)
], AllPost.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [Object],
        description: 'The users who liked the post',
    }),
    (0, mongoose_1.Prop)({
        type: [{
                _id: { type: String, required: true },
                type: { type: String, required: true },
                url: { type: String, required: true },
            }],
        default: []
    }),
    __metadata("design:type", Array)
], AllPost.prototype, "media", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [] }),
    (0, swagger_1.ApiProperty)({
        type: [],
        description: 'The tags of post',
    }),
    __metadata("design:type", Array)
], AllPost.prototype, "tags", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: post_location_1.PostLocation }),
    (0, swagger_1.ApiProperty)({
        type: post_location_1.PostLocation,
        description: 'The map location of post',
    }),
    __metadata("design:type", post_location_1.PostLocation)
], AllPost.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.Boolean, default: false }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], AllPost.prototype, "booked", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: String }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AllPost.prototype, "postType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: String }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AllPost.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: String }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AllPost.prototype, "propertyCategory", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: String }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AllPost.prototype, "propertyType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: String }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AllPost.prototype, "parking", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: String }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AllPost.prototype, "sqft", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: String }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AllPost.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String] }),
    (0, swagger_1.ApiProperty)({
        type: [String],
        description: 'The tags of post',
    }),
    __metadata("design:type", Array)
], AllPost.prototype, "sellType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.Boolean, default: false }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], AllPost.prototype, "sell", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.Boolean, default: false }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], AllPost.prototype, "hidden", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'AgentPostComment' }], default: [] }),
    (0, swagger_1.ApiProperty)({
        type: [],
        description: 'The comment of post',
    }),
    __metadata("design:type", Array)
], AllPost.prototype, "comment", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], AllPost.prototype, "likeCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [Object],
        description: 'The users who liked the post',
    }),
    (0, mongoose_1.Prop)({
        type: [{
                _id: { type: String, required: true },
                name: { type: String, required: true },
                image: { type: String, required: true },
                role: { type: String, required: true }
            }],
        default: []
    }),
    __metadata("design:type", Array)
], AllPost.prototype, "likedBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-02-01T12:34:56.789Z',
        description: 'The timestamp when the post was created',
    }),
    __metadata("design:type", Date)
], AllPost.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-02-01T12:34:56.789Z',
        description: 'The timestamp when the post was last updated',
    }),
    __metadata("design:type", Date)
], AllPost.prototype, "updatedAt", void 0);
exports.AllPost = AllPost = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], AllPost);
exports.AllPostSchema = mongoose_1.SchemaFactory.createForClass(AllPost);
//# sourceMappingURL=allpost.entity.js.map