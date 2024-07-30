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
exports.AllpostsController = void 0;
const common_1 = require("@nestjs/common");
const allposts_service_1 = require("./allposts.service");
const swagger_1 = require("@nestjs/swagger");
const create_allpost_dto_1 = require("./dto/create-allpost.dto");
const allpost_entity_1 = require("./entities/allpost.entity");
const get_current_user_1 = require("../common/get-current.user");
const AllPostQuery_1 = require("./dto/AllPostQuery");
const update_allpost_dto_1 = require("./dto/update-allpost.dto");
let AllpostsController = class AllpostsController {
    constructor(allpostsService) {
        this.allpostsService = allpostsService;
    }
    async createAgentPost(createAgent, userId, role) {
        return this.allpostsService.create(userId, role, createAgent);
    }
    async findAll(myId, myRole, queryOptions) {
        return this.allpostsService.findAll(myId, myRole, queryOptions);
    }
    async getGetBlog(id, myId, myRole) {
        return this.allpostsService.findById(id, myId, myRole);
    }
    async updatePost(id, updateAgentPostDto) {
        return this.allpostsService.updateById(id, updateAgentPostDto);
    }
    async like(id, userId, role) {
        return this.allpostsService.likeById(id, userId, role);
    }
    async unlike(id, userId) {
        return this.allpostsService.unlikeById(id, userId);
    }
    async delete(id, userId, role) {
        return this.allpostsService.deleteById(id, userId, role);
    }
    async findMyPost(userId, role) {
        return this.allpostsService.findMyAllPost(userId, role);
    }
};
exports.AllpostsController = AllpostsController;
__decorate([
    (0, common_1.Post)('/post'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Save new Post' }),
    (0, swagger_1.ApiBody)({
        type: create_allpost_dto_1.CreateAllPostDto,
    }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The Post has been successfully created.',
        type: allpost_entity_1.AllPost,
    }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_current_user_1.GetCurrentUser)('userId')),
    __param(2, (0, get_current_user_1.GetCurrentUser)('role')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_allpost_dto_1.CreateAllPostDto, String, String]),
    __metadata("design:returntype", Promise)
], AllpostsController.prototype, "createAgentPost", null);
__decorate([
    (0, common_1.Get)('/get'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all agent posts with pagination and filtering' }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, get_current_user_1.GetCurrentUser)('userId')),
    __param(1, (0, get_current_user_1.GetCurrentUser)('role')),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, AllPostQuery_1.QueryAllPostDto]),
    __metadata("design:returntype", Promise)
], AllpostsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/single-post/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Agent post ID' }),
    (0, swagger_1.ApiOperation)({ summary: 'Get Post By ID' }),
    (0, swagger_1.ApiOkResponse)({ type: [allpost_entity_1.AllPost] }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, get_current_user_1.GetCurrentUser)('userId')),
    __param(2, (0, get_current_user_1.GetCurrentUser)('role')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], AllpostsController.prototype, "getGetBlog", null);
__decorate([
    (0, common_1.Patch)('/update/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Update post by id' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'The post has been successfully updated.',
        type: allpost_entity_1.AllPost,
    }),
    (0, swagger_1.ApiBody)({
        type: update_allpost_dto_1.UpdateAllPostDto,
    }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_allpost_dto_1.UpdateAllPostDto]),
    __metadata("design:returntype", Promise)
], AllpostsController.prototype, "updatePost", null);
__decorate([
    (0, common_1.Post)(':id/like'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Like post by id' }),
    (0, swagger_1.ApiOkResponse)({ type: allpost_entity_1.AllPost }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, get_current_user_1.GetCurrentUser)('userId')),
    __param(2, (0, get_current_user_1.GetCurrentUser)('role')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], AllpostsController.prototype, "like", null);
__decorate([
    (0, common_1.Post)(':id/unlike'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'unLike post by id' }),
    (0, swagger_1.ApiOkResponse)({ type: allpost_entity_1.AllPost }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, get_current_user_1.GetCurrentUser)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AllpostsController.prototype, "unlike", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Delete saved Agent post by id' }),
    (0, swagger_1.ApiOkResponse)({ type: allpost_entity_1.AllPost }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, get_current_user_1.GetCurrentUser)('userId')),
    __param(2, (0, get_current_user_1.GetCurrentUser)('role')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], AllpostsController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('/my-post-length'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Get My Post Lengths' }),
    (0, swagger_1.ApiOkResponse)({
        schema: {
            example: {
                totalPosts: 100,
                sponsoredPosts: 10,
                urgentPosts: 5,
                normalPosts: 85,
            },
        },
    }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, get_current_user_1.GetCurrentUser)('userId')),
    __param(1, (0, get_current_user_1.GetCurrentUser)('role')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AllpostsController.prototype, "findMyPost", null);
exports.AllpostsController = AllpostsController = __decorate([
    (0, swagger_1.ApiTags)('allposts'),
    (0, common_1.Controller)('allposts'),
    __metadata("design:paramtypes", [allposts_service_1.AllpostsService])
], AllpostsController);
//# sourceMappingURL=allposts.controller.js.map