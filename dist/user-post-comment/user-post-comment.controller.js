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
exports.UserPostCommentController = void 0;
const common_1 = require("@nestjs/common");
const user_post_comment_service_1 = require("./user-post-comment.service");
const create_user_post_comment_dto_1 = require("./dto/create-user-post-comment.dto");
const update_user_post_comment_dto_1 = require("./dto/update-user-post-comment.dto");
const swagger_1 = require("@nestjs/swagger");
const user_post_comment_entity_1 = require("./entities/user-post-comment.entity");
const get_current_user_1 = require("../common/get-current.user");
let UserPostCommentController = class UserPostCommentController {
    constructor(userPostCommentService) {
        this.userPostCommentService = userPostCommentService;
    }
    async createDoctor(createUserPostCommentDto, userId, role) {
        return this.userPostCommentService.create(userId, role, createUserPostCommentDto);
    }
    async updatePost(id, updateUserPostCommentDto) {
        return this.userPostCommentService.updateById(id, updateUserPostCommentDto);
    }
    async delete(id) {
        return this.userPostCommentService.deleteById(id);
    }
};
exports.UserPostCommentController = UserPostCommentController;
__decorate([
    (0, common_1.Post)('/post'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Save new agent post comment' }),
    (0, swagger_1.ApiBody)({
        type: create_user_post_comment_dto_1.CreateUserPostCommentDto,
    }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The agent post comment has been successfully created.',
        type: user_post_comment_entity_1.UserPostComment,
    }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_current_user_1.GetCurrentUser)('userId')),
    __param(2, (0, get_current_user_1.GetCurrentUser)('role')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_post_comment_dto_1.CreateUserPostCommentDto, String, String]),
    __metadata("design:returntype", Promise)
], UserPostCommentController.prototype, "createDoctor", null);
__decorate([
    (0, common_1.Patch)('/update/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Update post comment by id' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'The post comment has been successfully updated.',
        type: user_post_comment_entity_1.UserPostComment,
    }),
    (0, swagger_1.ApiBody)({
        type: update_user_post_comment_dto_1.UpdateUserPostCommentDto,
    }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_post_comment_dto_1.UpdateUserPostCommentDto]),
    __metadata("design:returntype", Promise)
], UserPostCommentController.prototype, "updatePost", null);
__decorate([
    (0, common_1.Delete)('/delete/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Delete saved Agent post comment by id' }),
    (0, swagger_1.ApiOkResponse)({ type: user_post_comment_entity_1.UserPostComment }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserPostCommentController.prototype, "delete", null);
exports.UserPostCommentController = UserPostCommentController = __decorate([
    (0, common_1.Controller)('user-post-comment'),
    __metadata("design:paramtypes", [user_post_comment_service_1.UserPostCommentService])
], UserPostCommentController);
//# sourceMappingURL=user-post-comment.controller.js.map