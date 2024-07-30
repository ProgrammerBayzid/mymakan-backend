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
exports.PostAgentController = void 0;
const common_1 = require("@nestjs/common");
const post_agent_service_1 = require("./post-agent.service");
const create_post_agent_dto_1 = require("./dto/create-post-agent.dto");
const update_post_agent_dto_1 = require("./dto/update-post-agent.dto");
const post_agent_entity_1 = require("./entities/post-agent.entity");
const swagger_1 = require("@nestjs/swagger");
const get_current_user_1 = require("../common/get-current.user");
const public_decorator_1 = require("../common/public.decorator");
const PostAgentQurey_1 = require("./dto/PostAgentQurey");
let PostAgentController = class PostAgentController {
    constructor(postAgentService) {
        this.postAgentService = postAgentService;
    }
    async createAgentPost(createAgent, userId, role) {
        return this.postAgentService.create(userId, role, createAgent);
    }
    async findAll(queryOptions) {
        return this.postAgentService.findAll(queryOptions);
    }
    async findMyPost(userId, queryOptions) {
        return this.postAgentService.findMyAgentPost(userId, queryOptions);
    }
    async getGetBlog(id) {
        return this.postAgentService.findById(id);
    }
    async updatePost(id, updateAgentPostDto) {
        return this.postAgentService.updateById(id, updateAgentPostDto);
    }
    async like(id, userId, role) {
        return this.postAgentService.likeById(id, userId, role);
    }
    async unlike(id, userId) {
        return this.postAgentService.unlikeById(id, userId);
    }
    async delete(id) {
        return this.postAgentService.deleteById(id);
    }
};
exports.PostAgentController = PostAgentController;
__decorate([
    (0, common_1.Post)('/post'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Save new Post' }),
    (0, swagger_1.ApiBody)({
        type: create_post_agent_dto_1.CreatePostAgentDto,
    }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The Post has been successfully created.',
        type: post_agent_entity_1.PostAgent,
    }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_current_user_1.GetCurrentUser)('userId')),
    __param(2, (0, get_current_user_1.GetCurrentUser)('role')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_post_agent_dto_1.CreatePostAgentDto, String, String]),
    __metadata("design:returntype", Promise)
], PostAgentController.prototype, "createAgentPost", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('/get'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all agent posts with pagination and filtering' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PostAgentQurey_1.QueryAgentPostDto]),
    __metadata("design:returntype", Promise)
], PostAgentController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/my-post'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Get My Post' }),
    (0, swagger_1.ApiOkResponse)({ type: [post_agent_entity_1.PostAgent] }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, get_current_user_1.GetCurrentUser)('userId')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, PostAgentQurey_1.QueryAgentPostDto]),
    __metadata("design:returntype", Promise)
], PostAgentController.prototype, "findMyPost", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('/single-post/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Agent post ID' }),
    (0, swagger_1.ApiOperation)({ summary: 'Get Post By ID' }),
    (0, swagger_1.ApiOkResponse)({ type: [post_agent_entity_1.PostAgent] }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostAgentController.prototype, "getGetBlog", null);
__decorate([
    (0, common_1.Patch)('/update/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Update post by id' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'The post has been successfully updated.',
        type: post_agent_entity_1.PostAgent,
    }),
    (0, swagger_1.ApiBody)({
        type: update_post_agent_dto_1.UpdatePostAgentDto,
    }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_post_agent_dto_1.UpdatePostAgentDto]),
    __metadata("design:returntype", Promise)
], PostAgentController.prototype, "updatePost", null);
__decorate([
    (0, common_1.Post)(':id/like'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Like post by id' }),
    (0, swagger_1.ApiOkResponse)({ type: post_agent_entity_1.PostAgent }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, get_current_user_1.GetCurrentUser)('userId')),
    __param(2, (0, get_current_user_1.GetCurrentUser)('role')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], PostAgentController.prototype, "like", null);
__decorate([
    (0, common_1.Post)(':id/unlike'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'unLike post by id' }),
    (0, swagger_1.ApiOkResponse)({ type: post_agent_entity_1.PostAgent }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, get_current_user_1.GetCurrentUser)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], PostAgentController.prototype, "unlike", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Delete saved Agent post by id' }),
    (0, swagger_1.ApiOkResponse)({ type: post_agent_entity_1.PostAgent }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostAgentController.prototype, "delete", null);
exports.PostAgentController = PostAgentController = __decorate([
    (0, common_1.Controller)('post-agent'),
    __metadata("design:paramtypes", [post_agent_service_1.PostAgentService])
], PostAgentController);
//# sourceMappingURL=post-agent.controller.js.map