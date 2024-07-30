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
exports.AgentSchema = exports.Agent = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const mongoose_2 = require("mongoose");
let Agent = class Agent {
};
exports.Agent = Agent;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '5ff48e093ecb8200f8b0fff3',
        description: 'The unique identifier of the Agent',
    }),
    __metadata("design:type", String)
], Agent.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'country',
        description: 'The country of the user',
    }),
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Agent.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'state',
        description: 'The state of the user',
    }),
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Agent.prototype, "state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'bayzid',
        description: 'The fullName of the Agent',
    }),
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Agent.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Agent',
        description: 'The role of the Agent',
    }),
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Agent.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Agent',
        description: 'The role of the Agent',
    }),
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Agent.prototype, "companyName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'image.png',
        description: 'The image of the Agent',
    }),
    (0, mongoose_1.Prop)({ default: "https://i.ibb.co/MnV4DcK/user.png" }),
    __metadata("design:type", String)
], Agent.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'image.png',
        description: 'The image of the Agent',
    }),
    (0, mongoose_1.Prop)({ default: "https://i.ibb.co/MnV4DcK/user.png" }),
    __metadata("design:type", String)
], Agent.prototype, "coverImage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '01676485383',
        description: 'The mobile number of the Agent',
    }),
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Agent.prototype, "mobile", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '880',
        description: 'The mobile_code number of the user',
    }),
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Agent.prototype, "mobile_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'bayzid@gmail.com',
        description: 'The email of the Agent',
    }),
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Agent.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Bayzid12@',
        description: 'Provide a password',
    }),
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Agent.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Male',
        description: 'The gender of the Agent',
    }),
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Agent.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Bio',
        description: 'The bio of the Agent',
    }),
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Agent.prototype, "bio", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [] }),
    (0, swagger_1.ApiProperty)({
        type: [],
        description: 'The Identity Information list of image object of the Agent',
    }),
    __metadata("design:type", Array)
], Agent.prototype, "identity", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [] }),
    (0, swagger_1.ApiProperty)({
        type: [],
        description: 'The speeking language of the Agent',
    }),
    __metadata("design:type", Array)
], Agent.prototype, "language", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'PT2056',
        description: 'The Patient unique ID',
    }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Agent.prototype, "uniqueId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    (0, swagger_1.ApiProperty)({
        type: Number,
        description: 'The total rating of agent',
    }),
    __metadata("design:type", Number)
], Agent.prototype, "totalrating", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    (0, swagger_1.ApiProperty)({
        type: Number,
        description: 'The avg rating of agent',
    }),
    __metadata("design:type", Number)
], Agent.prototype, "avgrating", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    (0, swagger_1.ApiProperty)({
        type: Number,
        description: 'The avg rating of agent',
    }),
    __metadata("design:type", Number)
], Agent.prototype, "totalReview", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], Agent.prototype, "credit", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.Boolean, default: false }),
    __metadata("design:type", Boolean)
], Agent.prototype, "premium", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], Agent.prototype, "followingBuyerCount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], Agent.prototype, "followingAgentCount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], Agent.prototype, "followerBuyerCount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], Agent.prototype, "followerAgentCount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    (0, swagger_1.ApiProperty)({
        type: Number,
        description: 'The avg rating of agent',
    }),
    __metadata("design:type", Number)
], Agent.prototype, "totalPost", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    (0, swagger_1.ApiProperty)({
        type: Number,
        description: 'The avg rating of agent',
    }),
    __metadata("design:type", Number)
], Agent.prototype, "totalSponsoredPost", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    (0, swagger_1.ApiProperty)({
        type: Number,
        description: 'The avg rating of agent',
    }),
    __metadata("design:type", Number)
], Agent.prototype, "totalUrgentPost", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.Boolean, default: false }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], Agent.prototype, "verified", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.Boolean, default: false }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], Agent.prototype, "reject", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.Boolean, default: false }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], Agent.prototype, "online", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'app or web',
        description: 'The agent singup device',
    }),
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Agent.prototype, "device", void 0);
__decorate([
    (0, swagger_1.ApiHideProperty)(),
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.Boolean, default: false }),
    __metadata("design:type", Boolean)
], Agent.prototype, "emailVerified", void 0);
__decorate([
    (0, swagger_1.ApiHideProperty)(),
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.Boolean, default: false }),
    __metadata("design:type", Boolean)
], Agent.prototype, "verificationEmailSent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-02-01T12:34:56.789Z',
        description: 'The timestamp when the doctor was created',
    }),
    __metadata("design:type", Date)
], Agent.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-02-01T12:34:56.789Z',
        description: 'The timestamp when the doctor was last updated',
    }),
    __metadata("design:type", Date)
], Agent.prototype, "updatedAt", void 0);
exports.Agent = Agent = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
    })
], Agent);
exports.AgentSchema = mongoose_1.SchemaFactory.createForClass(Agent);
//# sourceMappingURL=agent.entity.js.map