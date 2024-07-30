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
exports.AgentFollowSchema = exports.AgentFollow = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const mongoose_2 = require("mongoose");
let AgentFollow = class AgentFollow {
};
exports.AgentFollow = AgentFollow;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '5ff48e093ecb8200f8b0fff3',
        description: 'The unique identifier of the Agent',
    }),
    __metadata("design:type", String)
], AgentFollow.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Agent' }),
    __metadata("design:type", String)
], AgentFollow.prototype, "agentId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], AgentFollow.prototype, "role", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], AgentFollow.prototype, "followingUserCount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'User' }], default: [] }),
    __metadata("design:type", Array)
], AgentFollow.prototype, "followingUser", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], AgentFollow.prototype, "followerUserCount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'User' }], default: [] }),
    __metadata("design:type", Array)
], AgentFollow.prototype, "followerUser", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], AgentFollow.prototype, "followIngAgentCount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Agent' }], default: [] }),
    __metadata("design:type", Array)
], AgentFollow.prototype, "followingAgent", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], AgentFollow.prototype, "followerAgentCount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Agent' }], default: [] }),
    __metadata("design:type", Array)
], AgentFollow.prototype, "followerAgent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-02-01T12:34:56.789Z',
        description: 'The timestamp when the doctor was created',
    }),
    __metadata("design:type", Date)
], AgentFollow.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-02-01T12:34:56.789Z',
        description: 'The timestamp when the doctor was last updated',
    }),
    __metadata("design:type", Date)
], AgentFollow.prototype, "updatedAt", void 0);
exports.AgentFollow = AgentFollow = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
    })
], AgentFollow);
exports.AgentFollowSchema = mongoose_1.SchemaFactory.createForClass(AgentFollow);
//# sourceMappingURL=agent.follow.entity.js.map