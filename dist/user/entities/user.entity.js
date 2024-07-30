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
exports.UserSchema = exports.User = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const mongoose_2 = require("mongoose");
let User = class User {
};
exports.User = User;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '5ff48e093ecb8200f8b0fff3',
        description: 'The unique identifier of the user',
    }),
    __metadata("design:type", String)
], User.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'bayzid',
        description: 'The fullName of the user',
    }),
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], User.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Agent',
        description: 'The role of the user',
    }),
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'country',
        description: 'The country of the user',
    }),
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], User.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'state',
        description: 'The state of the user',
    }),
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], User.prototype, "state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'image.png',
        description: 'The image of the user',
    }),
    (0, mongoose_1.Prop)({ default: "https://i.ibb.co/MnV4DcK/user.png" }),
    __metadata("design:type", String)
], User.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'image.png',
        description: 'The image of the Agent',
    }),
    (0, mongoose_1.Prop)({ default: "https://i.ibb.co/MnV4DcK/user.png" }),
    __metadata("design:type", String)
], User.prototype, "coverImage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '01676485383',
        description: 'The mobile number of the user',
    }),
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], User.prototype, "mobile", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '01676485383',
        description: 'The mobile number of the user',
    }),
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], User.prototype, "mobile_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'bayzid@gmail.com',
        description: 'The email of the user',
    }),
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: [false, 'User password is required'], default: null }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Male',
        description: 'The gender of the user',
    }),
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], User.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Bio',
        description: 'The bio of the Agent',
    }),
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], User.prototype, "bio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'PT2056',
        description: 'The Patient unique ID',
    }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User.prototype, "uniqueId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.Boolean, default: false }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], User.prototype, "verified", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.Boolean, default: false }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], User.prototype, "reject", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'app or web',
        description: 'The user singup device',
    }),
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], User.prototype, "device", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    (0, swagger_1.ApiProperty)({
        type: Number,
        description: 'The total rating of agent',
    }),
    __metadata("design:type", Number)
], User.prototype, "totalrating", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    (0, swagger_1.ApiProperty)({
        type: Number,
        description: 'The avg rating of agent',
    }),
    __metadata("design:type", Number)
], User.prototype, "avgrating", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    (0, swagger_1.ApiProperty)({
        type: Number,
        description: 'The avg rating of agent',
    }),
    __metadata("design:type", Number)
], User.prototype, "totalReview", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    (0, swagger_1.ApiProperty)({
        type: Number,
        description: 'The avg rating of agent',
    }),
    __metadata("design:type", Number)
], User.prototype, "totalPost", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    (0, swagger_1.ApiProperty)({
        type: Number,
        description: 'The avg rating of agent',
    }),
    __metadata("design:type", Number)
], User.prototype, "totalSponsoredPost", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    (0, swagger_1.ApiProperty)({
        type: Number,
        description: 'The avg rating of agent',
    }),
    __metadata("design:type", Number)
], User.prototype, "totalUrgentPost", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], User.prototype, "credit", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.Boolean, default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "premium", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.Boolean, default: false }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], User.prototype, "online", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], User.prototype, "followingBuyerCount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], User.prototype, "followingAgentCount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], User.prototype, "followerBuyerCount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], User.prototype, "followerAgentCount", void 0);
__decorate([
    (0, swagger_1.ApiHideProperty)(),
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.Boolean, default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "emailVerified", void 0);
__decorate([
    (0, swagger_1.ApiHideProperty)(),
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.Boolean, default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "verificationEmailSent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-02-01T12:34:56.789Z',
        description: 'The timestamp when the doctor was created',
    }),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-02-01T12:34:56.789Z',
        description: 'The timestamp when the doctor was last updated',
    }),
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
exports.User = User = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
    })
], User);
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);
//# sourceMappingURL=user.entity.js.map