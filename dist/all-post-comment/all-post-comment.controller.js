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
exports.AllPostCommentController = void 0;
const common_1 = require("@nestjs/common");
const all_post_comment_service_1 = require("./all-post-comment.service");
const create_all_post_comment_dto_1 = require("./dto/create-all-post-comment.dto");
const update_all_post_comment_dto_1 = require("./dto/update-all-post-comment.dto");
const swagger_1 = require("@nestjs/swagger");
const all_post_comment_entity_1 = require("./entities/all-post-comment.entity");
const get_current_user_1 = require("../common/get-current.user");
const public_decorator_1 = require("../common/public.decorator");
let AllPostCommentController = class AllPostCommentController {
    constructor(allPostCommentService) {
        this.allPostCommentService = allPostCommentService;
    }
    async createDoctor(createAllPostCommentDto, userId, role) {
        return this.allPostCommentService.create(userId, role, createAllPostCommentDto);
    }
    async updatePost(id, updateAllPostCommentDto) {
        return this.allPostCommentService.updateById(id, updateAllPostCommentDto);
    }
    async delete(id) {
        return this.allPostCommentService.deleteById(id);
    }
    async getAllPostComments(postId, page = 1, limit = 100, sortBy, sortOrder) {
        return this.allPostCommentService.findAllPostComments(postId, page, limit, sortBy, sortOrder);
    }
};
exports.AllPostCommentController = AllPostCommentController;
__decorate([
    (0, common_1.Post)('/post'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Save new  post comment' }),
    (0, swagger_1.ApiBody)({
        type: create_all_post_comment_dto_1.CreateAllPostCommentDto,
    }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The agent post comment has been successfully created.',
        type: all_post_comment_entity_1.AllPostComment,
    }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_current_user_1.GetCurrentUser)('userId')),
    __param(2, (0, get_current_user_1.GetCurrentUser)('role')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_all_post_comment_dto_1.CreateAllPostCommentDto, String, String]),
    __metadata("design:returntype", Promise)
], AllPostCommentController.prototype, "createDoctor", null);
__decorate([
    (0, common_1.Patch)('/update/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Update post comment by id' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'The post comment has been successfully updated.',
        type: all_post_comment_entity_1.AllPostComment,
    }),
    (0, swagger_1.ApiBody)({
        type: update_all_post_comment_dto_1.UpdateAllPostCommentDto,
    }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_all_post_comment_dto_1.UpdateAllPostCommentDto]),
    __metadata("design:returntype", Promise)
], AllPostCommentController.prototype, "updatePost", null);
__decorate([
    (0, common_1.Delete)('/delete/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Delete saved Agent post comment by id' }),
    (0, swagger_1.ApiOkResponse)({ type: all_post_comment_entity_1.AllPostComment }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AllPostCommentController.prototype, "delete", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(':postId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'get all coment' }),
    (0, swagger_1.ApiOkResponse)({ type: all_post_comment_entity_1.AllPostComment }),
    __param(0, (0, common_1.Param)('postId')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __param(3, (0, common_1.Query)('sortBy')),
    __param(4, (0, common_1.Query)('sortOrder')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number, String, String]),
    __metadata("design:returntype", Promise)
], AllPostCommentController.prototype, "getAllPostComments", null);
exports.AllPostCommentController = AllPostCommentController = __decorate([
    (0, swagger_1.ApiTags)('all-post-comment'),
    (0, common_1.Controller)('all-post-comment'),
    __metadata("design:paramtypes", [all_post_comment_service_1.AllPostCommentService])
], AllPostCommentController);
//# sourceMappingURL=all-post-comment.controller.js.map