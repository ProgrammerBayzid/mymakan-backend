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
exports.AllPostCommentReplyController = void 0;
const common_1 = require("@nestjs/common");
const all_post_comment_reply_service_1 = require("./all-post-comment-reply.service");
const create_all_post_comment_reply_dto_1 = require("./dto/create-all-post-comment-reply.dto");
const update_all_post_comment_reply_dto_1 = require("./dto/update-all-post-comment-reply.dto");
const swagger_1 = require("@nestjs/swagger");
const all_post_comment_reply_entity_1 = require("./entities/all-post-comment-reply.entity");
const get_current_user_1 = require("../common/get-current.user");
let AllPostCommentReplyController = class AllPostCommentReplyController {
    constructor(allPostCommentReplyService) {
        this.allPostCommentReplyService = allPostCommentReplyService;
    }
    async create(createDto, userId, role) {
        return this.allPostCommentReplyService.create(userId, role, createDto);
    }
    async update(id, updateDto) {
        return this.allPostCommentReplyService.updateById(id, updateDto);
    }
    async delete(id) {
        return this.allPostCommentReplyService.deleteById(id);
    }
};
exports.AllPostCommentReplyController = AllPostCommentReplyController;
__decorate([
    (0, common_1.Post)('/post'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, swagger_1.ApiOperation)({ summary: 'Save new agent post comment reply' }),
    (0, swagger_1.ApiBody)({ type: create_all_post_comment_reply_dto_1.CreateAllPostCommentReplyDto }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The agent post comment reply has been successfully created.',
        type: all_post_comment_reply_entity_1.AllPostCommentReply,
    }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_current_user_1.GetCurrentUser)('userId')),
    __param(2, (0, get_current_user_1.GetCurrentUser)('role')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_all_post_comment_reply_dto_1.CreateAllPostCommentReplyDto, String, String]),
    __metadata("design:returntype", Promise)
], AllPostCommentReplyController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)('/update/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update agent post comment reply by ID' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'The agent post comment reply has been successfully updated.',
        type: all_post_comment_reply_entity_1.AllPostCommentReply,
    }),
    (0, swagger_1.ApiBody)({ type: update_all_post_comment_reply_dto_1.UpdateAllPostCommentReplyDto }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_all_post_comment_reply_dto_1.UpdateAllPostCommentReplyDto]),
    __metadata("design:returntype", Promise)
], AllPostCommentReplyController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/delete/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete agent post comment reply by ID' }),
    (0, swagger_1.ApiOkResponse)({ type: all_post_comment_reply_entity_1.AllPostCommentReply }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AllPostCommentReplyController.prototype, "delete", null);
exports.AllPostCommentReplyController = AllPostCommentReplyController = __decorate([
    (0, swagger_1.ApiTags)('all-post-comment-reply'),
    (0, common_1.Controller)('all-post-comment-reply'),
    __metadata("design:paramtypes", [all_post_comment_reply_service_1.AllPostCommentReplyService])
], AllPostCommentReplyController);
//# sourceMappingURL=all-post-comment-reply.controller.js.map