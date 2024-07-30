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
exports.AgentPostCommentReplyController = void 0;
const common_1 = require("@nestjs/common");
const agent_post_comment_reply_service_1 = require("./agent-post-comment-reply.service");
const create_agent_post_comment_reply_dto_1 = require("./dto/create-agent-post-comment-reply.dto");
const update_agent_post_comment_reply_dto_1 = require("./dto/update-agent-post-comment-reply.dto");
const swagger_1 = require("@nestjs/swagger");
const agent_post_comment_reply_entity_1 = require("./entities/agent-post-comment-reply.entity");
const get_current_user_1 = require("../common/get-current.user");
let AgentPostCommentReplyController = class AgentPostCommentReplyController {
    constructor(agentPostCommentReplyService) {
        this.agentPostCommentReplyService = agentPostCommentReplyService;
    }
    async create(createDto, userId, role) {
        return this.agentPostCommentReplyService.create(userId, role, createDto);
    }
    async update(id, updateDto) {
        return this.agentPostCommentReplyService.updateById(id, updateDto);
    }
    async delete(id) {
        return this.agentPostCommentReplyService.deleteById(id);
    }
};
exports.AgentPostCommentReplyController = AgentPostCommentReplyController;
__decorate([
    (0, common_1.Post)('/post'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, swagger_1.ApiOperation)({ summary: 'Save new agent post comment reply' }),
    (0, swagger_1.ApiBody)({ type: create_agent_post_comment_reply_dto_1.CreateAgentPostCommentReplyDto }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The agent post comment reply has been successfully created.',
        type: agent_post_comment_reply_entity_1.AgentPostCommentReply,
    }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_current_user_1.GetCurrentUser)('userId')),
    __param(2, (0, get_current_user_1.GetCurrentUser)('role')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_agent_post_comment_reply_dto_1.CreateAgentPostCommentReplyDto, String, String]),
    __metadata("design:returntype", Promise)
], AgentPostCommentReplyController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)('/update/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update agent post comment reply by ID' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'The agent post comment reply has been successfully updated.',
        type: agent_post_comment_reply_entity_1.AgentPostCommentReply,
    }),
    (0, swagger_1.ApiBody)({ type: update_agent_post_comment_reply_dto_1.UpdateAgentPostCommentReplyDto }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_agent_post_comment_reply_dto_1.UpdateAgentPostCommentReplyDto]),
    __metadata("design:returntype", Promise)
], AgentPostCommentReplyController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/delete/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete agent post comment reply by ID' }),
    (0, swagger_1.ApiOkResponse)({ type: agent_post_comment_reply_entity_1.AgentPostCommentReply }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AgentPostCommentReplyController.prototype, "delete", null);
exports.AgentPostCommentReplyController = AgentPostCommentReplyController = __decorate([
    (0, common_1.Controller)('agent-post-comment-reply'),
    __metadata("design:paramtypes", [agent_post_comment_reply_service_1.AgentPostCommentReplyService])
], AgentPostCommentReplyController);
//# sourceMappingURL=agent-post-comment-reply.controller.js.map