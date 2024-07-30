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
exports.AgentReviewSchema = exports.AgentReview = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("../../user/entities/user.entity");
const agent_entity_1 = require("./agent.entity");
let AgentReview = class AgentReview {
};
exports.AgentReview = AgentReview;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The user ID of the agent being reviewed',
        type: user_entity_1.User,
        example: '5ff48e093ecb8200f8b0fff3',
    }),
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.ObjectId, ref: 'User', }),
    __metadata("design:type", String)
], AgentReview.prototype, "reviewerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The agent ID of the agent being reviewed',
        type: agent_entity_1.Agent,
        example: '5ff48e093ecb8200f8b0fff3',
    }),
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.ObjectId, ref: 'Agent', }),
    __metadata("design:type", String)
], AgentReview.prototype, "agentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The rating given in the review',
        example: 4.5,
    }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], AgentReview.prototype, "rating", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The content of the review',
        example: 'Great service, very knowledgeable.',
    }),
    (0, mongoose_1.Prop)({ required: false, default: null }),
    __metadata("design:type", String)
], AgentReview.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The timestamp when the review was created',
        example: '2024-06-28T12:34:56.789Z',
        type: Date,
    }),
    (0, mongoose_1.Prop)({ default: Date.now }),
    __metadata("design:type", Date)
], AgentReview.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The timestamp when the review was last updated',
        example: '2024-06-28T12:34:56.789Z',
        type: Date,
    }),
    (0, mongoose_1.Prop)({ default: Date.now }),
    __metadata("design:type", Date)
], AgentReview.prototype, "updatedAt", void 0);
exports.AgentReview = AgentReview = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], AgentReview);
exports.AgentReviewSchema = mongoose_1.SchemaFactory.createForClass(AgentReview);
//# sourceMappingURL=review.entity.js.map