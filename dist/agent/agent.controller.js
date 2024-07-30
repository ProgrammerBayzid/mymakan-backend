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
exports.AgentController = void 0;
const common_1 = require("@nestjs/common");
const agent_service_1 = require("./agent.service");
const update_agent_dto_1 = require("./dto/update-agent.dto");
const swagger_1 = require("@nestjs/swagger");
const agent_entity_1 = require("./entities/agent.entity");
const get_current_user_1 = require("../common/get-current.user");
const create_review_dto_1 = require("./dto/create-review.dto");
const review_entity_1 = require("./entities/review.entity");
const agentQuery_1 = require("./dto/agentQuery");
let AgentController = class AgentController {
    constructor(agentService) {
        this.agentService = agentService;
    }
    async findMyProfile(userId) {
        return this.agentService.findMyProfile(userId);
    }
    async findAllAgent(userId, role, queryOptions) {
        return this.agentService.findAllAgent(userId, role, queryOptions);
    }
    async getAgent(id, userId, role) {
        return this.agentService.findById(id, userId, role);
    }
    async updateDoctor(userId, updateAgent) {
        return this.agentService.updateById(userId, updateAgent);
    }
    async deleteUser(userId) {
        return this.agentService.deleteById(userId);
    }
    async deleteAgentByAdminPanel(id) {
        return this.agentService.adminPanelAgentDelete(id);
    }
    async createDoctor(createAgentReviewDto, userId) {
        return this.agentService.reviewCreate(userId, createAgentReviewDto);
    }
    async findMyReview(userId) {
        return this.agentService.findMyReview(userId);
    }
};
exports.AgentController = AgentController;
__decorate([
    (0, common_1.Get)('/myProfile'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Get my Profile' }),
    (0, swagger_1.ApiOkResponse)({ type: [agent_entity_1.Agent] }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, get_current_user_1.GetCurrentUser)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AgentController.prototype, "findMyProfile", null);
__decorate([
    (0, common_1.Get)('/all-get'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all agent posts with pagination and filtering' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOkResponse)({ type: agent_entity_1.Agent }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, get_current_user_1.GetCurrentUser)('userId')),
    __param(1, (0, get_current_user_1.GetCurrentUser)('role')),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, agentQuery_1.QueryAgentDto]),
    __metadata("design:returntype", Promise)
], AgentController.prototype, "findAllAgent", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Agent ID' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Successfully Agent Get' }),
    (0, swagger_1.ApiOkResponse)({ type: agent_entity_1.Agent }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, get_current_user_1.GetCurrentUser)('userId')),
    __param(2, (0, get_current_user_1.GetCurrentUser)('role')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], AgentController.prototype, "getAgent", null);
__decorate([
    (0, common_1.Patch)('/update-profile'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Update saved agent by id' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'The agent has been successfully update.',
        type: agent_entity_1.Agent,
    }),
    (0, swagger_1.ApiBody)({
        type: update_agent_dto_1.UpdateAgentDto,
    }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, get_current_user_1.GetCurrentUser)('userId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_agent_dto_1.UpdateAgentDto]),
    __metadata("design:returntype", Promise)
], AgentController.prototype, "updateDoctor", null);
__decorate([
    (0, common_1.Delete)('/delete'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Delete saved Agent by id' }),
    (0, swagger_1.ApiOkResponse)({ type: agent_entity_1.Agent }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, get_current_user_1.GetCurrentUser)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AgentController.prototype, "deleteUser", null);
__decorate([
    (0, common_1.Delete)('/delete-admin-panel/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Delete saved Agent by id' }),
    (0, swagger_1.ApiOkResponse)({ type: agent_entity_1.Agent }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AgentController.prototype, "deleteAgentByAdminPanel", null);
__decorate([
    (0, common_1.Post)('/add-review'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Add a review' }),
    (0, swagger_1.ApiBody)({
        type: create_review_dto_1.CreateAgentReviewDto,
    }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The agent post comment has been successfully created.',
        type: review_entity_1.AgentReview,
    }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_current_user_1.GetCurrentUser)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_review_dto_1.CreateAgentReviewDto, String]),
    __metadata("design:returntype", Promise)
], AgentController.prototype, "createDoctor", null);
__decorate([
    (0, common_1.Get)('/my-review'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Get my Profile' }),
    (0, swagger_1.ApiOkResponse)({ type: [review_entity_1.AgentReview] }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, get_current_user_1.GetCurrentUser)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AgentController.prototype, "findMyReview", null);
exports.AgentController = AgentController = __decorate([
    (0, swagger_1.ApiTags)("agent"),
    (0, common_1.Controller)('agent'),
    __metadata("design:paramtypes", [agent_service_1.AgentService])
], AgentController);
//# sourceMappingURL=agent.controller.js.map