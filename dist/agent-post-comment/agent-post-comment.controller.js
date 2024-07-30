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
exports.AgentPostCommentController = void 0;
const common_1 = require("@nestjs/common");
const agent_post_comment_service_1 = require("./agent-post-comment.service");
const create_agent_post_comment_dto_1 = require("./dto/create-agent-post-comment.dto");
const update_agent_post_comment_dto_1 = require("./dto/update-agent-post-comment.dto");
const swagger_1 = require("@nestjs/swagger");
const agent_post_comment_entity_1 = require("./entities/agent-post-comment.entity");
const get_current_user_1 = require("../common/get-current.user");
let AgentPostCommentController = class AgentPostCommentController {
    constructor(agentPostCommentService) {
        this.agentPostCommentService = agentPostCommentService;
    }
    async createDoctor(createAgentPostCommentDto, userId, role) {
        return this.agentPostCommentService.create(userId, role, createAgentPostCommentDto);
    }
    async updatePost(id, updateAgentPostCommentDto) {
        return this.agentPostCommentService.updateById(id, updateAgentPostCommentDto);
    }
    async delete(id) {
        return this.agentPostCommentService.deleteById(id);
    }
};
exports.AgentPostCommentController = AgentPostCommentController;
__decorate([
    (0, common_1.Post)('/post'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Save new agent post comment' }),
    (0, swagger_1.ApiBody)({
        type: create_agent_post_comment_dto_1.CreateAgentPostCommentDto,
    }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The agent post comment has been successfully created.',
        type: agent_post_comment_entity_1.AgentPostComment,
    }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_current_user_1.GetCurrentUser)('userId')),
    __param(2, (0, get_current_user_1.GetCurrentUser)('role')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_agent_post_comment_dto_1.CreateAgentPostCommentDto, String, String]),
    __metadata("design:returntype", Promise)
], AgentPostCommentController.prototype, "createDoctor", null);
__decorate([
    (0, common_1.Patch)('/update/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Update post comment by id' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'The post comment has been successfully updated.',
        type: agent_post_comment_entity_1.AgentPostComment,
    }),
    (0, swagger_1.ApiBody)({
        type: update_agent_post_comment_dto_1.UpdateAgentPostCommentDto,
    }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_agent_post_comment_dto_1.UpdateAgentPostCommentDto]),
    __metadata("design:returntype", Promise)
], AgentPostCommentController.prototype, "updatePost", null);
__decorate([
    (0, common_1.Delete)('/delete/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Delete saved Agent post comment by id' }),
    (0, swagger_1.ApiOkResponse)({ type: agent_post_comment_entity_1.AgentPostComment }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AgentPostCommentController.prototype, "delete", null);
exports.AgentPostCommentController = AgentPostCommentController = __decorate([
    (0, common_1.Controller)('agent-post-comment'),
    __metadata("design:paramtypes", [agent_post_comment_service_1.AgentPostCommentService])
], AgentPostCommentController);
//# sourceMappingURL=agent-post-comment.controller.js.map