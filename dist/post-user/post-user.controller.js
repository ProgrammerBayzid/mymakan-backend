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
exports.PostUserController = void 0;
const common_1 = require("@nestjs/common");
const post_user_service_1 = require("./post-user.service");
const create_post_user_dto_1 = require("./dto/create-post-user.dto");
const update_post_user_dto_1 = require("./dto/update-post-user.dto");
const swagger_1 = require("@nestjs/swagger");
const post_user_entity_1 = require("./entities/post-user.entity");
const get_current_user_1 = require("../common/get-current.user");
const public_decorator_1 = require("../common/public.decorator");
const query_dto_1 = require("./dto/query.dto");
let PostUserController = class PostUserController {
    constructor(postUserService) {
        this.postUserService = postUserService;
    }
    async createUserPost(createUserPost, userId, role) {
        return this.postUserService.createUserPost(userId, role, createUserPost);
    }
    async findAll(queryOptions) {
        return this.postUserService.findAll(queryOptions);
    }
    async findMyPost(userId, queryOptions) {
        return this.postUserService.findMyUserPost(userId, queryOptions);
    }
    async getGetBlog(id) {
        return this.postUserService.findById(id);
    }
    async updatePost(id, updateUserPostDto) {
        return this.postUserService.updateById(id, updateUserPostDto);
    }
    async like(id, userId, role) {
        return this.postUserService.likeById(id, userId, role);
    }
    async unlike(id, userId) {
        return this.postUserService.unlikeById(id, userId);
    }
    async delete(id) {
        return this.postUserService.deleteById(id);
    }
};
exports.PostUserController = PostUserController;
__decorate([
    (0, common_1.Post)('/post'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Save new Post' }),
    (0, swagger_1.ApiBody)({
        type: create_post_user_dto_1.CreatePostUserDto,
    }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The Post has been successfully created.',
        type: post_user_entity_1.PostUser,
    }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_current_user_1.GetCurrentUser)('userId')),
    __param(2, (0, get_current_user_1.GetCurrentUser)('role')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_post_user_dto_1.CreatePostUserDto, String, String]),
    __metadata("design:returntype", Promise)
], PostUserController.prototype, "createUserPost", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('/get'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all agent posts with pagination and filtering' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_dto_1.QueryUserPostDto]),
    __metadata("design:returntype", Promise)
], PostUserController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/my-post'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Get My Post' }),
    (0, swagger_1.ApiOkResponse)({ type: [post_user_entity_1.PostUser] }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, get_current_user_1.GetCurrentUser)('userId')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, query_dto_1.QueryUserPostDto]),
    __metadata("design:returntype", Promise)
], PostUserController.prototype, "findMyPost", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('/single-post/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'User post ID' }),
    (0, swagger_1.ApiOperation)({ summary: 'Get Post By ID' }),
    (0, swagger_1.ApiOkResponse)({ type: [post_user_entity_1.PostUser] }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostUserController.prototype, "getGetBlog", null);
__decorate([
    (0, common_1.Patch)('/update/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Update post by id' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'The post has been successfully updated.',
        type: post_user_entity_1.PostUser,
    }),
    (0, swagger_1.ApiBody)({
        type: update_post_user_dto_1.UpdatePostUserDto,
    }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_post_user_dto_1.UpdatePostUserDto]),
    __metadata("design:returntype", Promise)
], PostUserController.prototype, "updatePost", null);
__decorate([
    (0, common_1.Post)(':id/like'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Like post by id' }),
    (0, swagger_1.ApiOkResponse)({ type: post_user_entity_1.PostUser }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, get_current_user_1.GetCurrentUser)('userId')),
    __param(2, (0, get_current_user_1.GetCurrentUser)('role')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], PostUserController.prototype, "like", null);
__decorate([
    (0, common_1.Post)(':id/unlike'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'unLike post by id' }),
    (0, swagger_1.ApiOkResponse)({ type: post_user_entity_1.PostUser }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, get_current_user_1.GetCurrentUser)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], PostUserController.prototype, "unlike", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Delete saved Agent post by id' }),
    (0, swagger_1.ApiOkResponse)({ type: post_user_entity_1.PostUser }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostUserController.prototype, "delete", null);
exports.PostUserController = PostUserController = __decorate([
    (0, common_1.Controller)('post-user'),
    __metadata("design:paramtypes", [post_user_service_1.PostUserService])
], PostUserController);
//# sourceMappingURL=post-user.controller.js.map