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
exports.PostUserSchema = exports.PostUser = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const mongoose_2 = require("mongoose");
const class_validator_1 = require("class-validator");
const post_location_1 = require("../../post-agent/entities/post-location");
const user_entity_1 = require("../../user/entities/user.entity");
let PostUser = class PostUser {
};
exports.PostUser = PostUser;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '5ff48e093ecb8200f8b0fff3',
        description: 'The unique identifier of the post',
    }),
    __metadata("design:type", String)
], PostUser.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'the post title',
        description: 'The Post title',
    }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PostUser.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: String }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PostUser.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'the post description',
        description: 'The Post description',
    }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PostUser.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'sell or rent etc',
        description: 'The post for sell or rent etc',
    }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PostUser.prototype, "for", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: user_entity_1.User,
        description: 'The User ID',
    }),
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'User' }),
    __metadata("design:type", String)
], PostUser.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        description: 'The images of post',
    }),
    (0, mongoose_1.Prop)({ type: [String], }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], PostUser.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        description: 'The images of post',
    }),
    (0, mongoose_1.Prop)({ type: [String], }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], PostUser.prototype, "video", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        description: 'The images of post',
    }),
    (0, mongoose_1.Prop)({ type: [String], }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], PostUser.prototype, "doc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        description: 'The tags of post',
    }),
    (0, mongoose_1.Prop)({ type: [String], required: false }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], PostUser.prototype, "tags", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: post_location_1.PostLocation,
        description: 'The map location of post',
    }),
    (0, mongoose_1.Prop)({ type: post_location_1.PostLocation }),
    __metadata("design:type", post_location_1.PostLocation)
], PostUser.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.Boolean, default: false }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], PostUser.prototype, "booked", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: String }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PostUser.prototype, "postType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: String }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PostUser.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: String }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PostUser.prototype, "propertyCategory", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: String }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PostUser.prototype, "propertyType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: String }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PostUser.prototype, "parking", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: String }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PostUser.prototype, "sqft", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: String }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PostUser.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String] }),
    (0, swagger_1.ApiProperty)({
        type: [String],
        description: 'The tags of post',
    }),
    __metadata("design:type", Array)
], PostUser.prototype, "sellType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.Boolean, default: false }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], PostUser.prototype, "sell", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        description: 'The comment of post',
    }),
    (0, mongoose_1.Prop)({ type: [{ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'UserPostComment' }], default: [] }),
    __metadata("design:type", Array)
], PostUser.prototype, "comment", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], PostUser.prototype, "likeCount", void 0);
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
], PostUser.prototype, "likedBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-02-01T12:34:56.789Z',
        description: 'The timestamp when the post was created',
    }),
    __metadata("design:type", Date)
], PostUser.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-02-01T12:34:56.789Z',
        description: 'The timestamp when the post was last updated',
    }),
    __metadata("design:type", Date)
], PostUser.prototype, "updatedAt", void 0);
exports.PostUser = PostUser = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], PostUser);
exports.PostUserSchema = mongoose_1.SchemaFactory.createForClass(PostUser);
//# sourceMappingURL=post-user.entity.js.map