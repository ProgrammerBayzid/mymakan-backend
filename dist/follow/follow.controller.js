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
exports.FollowController = void 0;
const common_1 = require("@nestjs/common");
const follow_service_1 = require("./follow.service");
const swagger_1 = require("@nestjs/swagger");
const get_current_user_1 = require("../common/get-current.user");
let FollowController = class FollowController {
    constructor(followService) {
        this.followService = followService;
    }
    async followUser(followingType, followingId, currentUserId, currentUserType) {
        return this.followService.followUser(followingType, followingId, currentUserId, currentUserType);
    }
    async unfollowUser(followingType, followingId, currentUserId, currentUserType) {
        return this.followService.unfollowUser(followingType, followingId, currentUserId, currentUserType);
    }
    async myfollowingUser(currentUserId, currentUserType, page, limit, sortBy, sortOrder, search) {
        const pageNumber = parseInt(page, 10) || 1;
        const limitNumber = parseInt(limit, 10) || 10;
        return this.followService.myfollowingUser(currentUserId, currentUserType, pageNumber, limitNumber, sortBy, sortOrder, search);
    }
    async myfollowingAgent(currentUserId, currentUserType, page, limit, sortBy, sortOrder, search) {
        const pageNumber = parseInt(page, 10) || 1;
        const limitNumber = parseInt(limit, 10) || 10;
        return this.followService.myfollowingAgent(currentUserId, currentUserType, pageNumber, limitNumber, sortBy, sortOrder, search);
    }
    async myfollowerUser(currentUserId, currentUserType, page, limit, sortBy, sortOrder, search) {
        const pageNumber = parseInt(page, 10) || 1;
        const limitNumber = parseInt(limit, 10) || 10;
        return this.followService.myfollowerUser(currentUserId, currentUserType, pageNumber, limitNumber, sortBy, sortOrder, search);
    }
    async myfollowerAgent(currentUserId, currentUserType, page, limit, sortBy, sortOrder, search) {
        const pageNumber = parseInt(page, 10) || 1;
        const limitNumber = parseInt(limit, 10) || 10;
        return this.followService.myfollowerAgent(currentUserId, currentUserType, pageNumber, limitNumber, sortBy, sortOrder, search);
    }
    async followingExisting(userId, role, followingId) {
        return this.followService.followingExisting(role, userId, followingId);
    }
};
exports.FollowController = FollowController;
__decorate([
    (0, common_1.Post)('follow/:role/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Follow user by id' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Following successful' }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('role')),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, get_current_user_1.GetCurrentUser)('userId')),
    __param(3, (0, get_current_user_1.GetCurrentUser)('role')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], FollowController.prototype, "followUser", null);
__decorate([
    (0, common_1.Delete)('unfollow/:role/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'UnFollow user by id' }),
    (0, swagger_1.ApiOkResponse)({ description: 'UnFollowing successful' }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('role')),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, get_current_user_1.GetCurrentUser)('userId')),
    __param(3, (0, get_current_user_1.GetCurrentUser)('role')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], FollowController.prototype, "unfollowUser", null);
__decorate([
    (0, common_1.Get)('following-buyer'),
    (0, swagger_1.ApiOperation)({ summary: 'Get list of users that the buyer is following' }),
    (0, swagger_1.ApiOkResponse)({ description: 'List of following users' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'sortBy', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'sortOrder', required: false, enum: ['asc', 'desc'], }),
    (0, swagger_1.ApiQuery)({ name: 'search', required: false, type: String }),
    __param(0, (0, get_current_user_1.GetCurrentUser)('userId')),
    __param(1, (0, get_current_user_1.GetCurrentUser)('role')),
    __param(2, (0, common_1.Query)('page')),
    __param(3, (0, common_1.Query)('limit')),
    __param(4, (0, common_1.Query)('sortBy')),
    __param(5, (0, common_1.Query)('sortOrder')),
    __param(6, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], FollowController.prototype, "myfollowingUser", null);
__decorate([
    (0, common_1.Get)('following-agent'),
    (0, swagger_1.ApiOperation)({ summary: 'Get list of users that the buyer is following' }),
    (0, swagger_1.ApiOkResponse)({ description: 'List of following users' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'sortBy', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'sortOrder', required: false, enum: ['asc', 'desc'], }),
    (0, swagger_1.ApiQuery)({ name: 'search', required: false, type: String }),
    __param(0, (0, get_current_user_1.GetCurrentUser)('userId')),
    __param(1, (0, get_current_user_1.GetCurrentUser)('role')),
    __param(2, (0, common_1.Query)('page')),
    __param(3, (0, common_1.Query)('limit')),
    __param(4, (0, common_1.Query)('sortBy')),
    __param(5, (0, common_1.Query)('sortOrder')),
    __param(6, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], FollowController.prototype, "myfollowingAgent", null);
__decorate([
    (0, common_1.Get)('follower-buyer'),
    (0, swagger_1.ApiOperation)({ summary: 'Get list of users that the buyer is following' }),
    (0, swagger_1.ApiOkResponse)({ description: 'List of following users' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'sortBy', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'sortOrder', required: false, enum: ['asc', 'desc'], }),
    (0, swagger_1.ApiQuery)({ name: 'search', required: false, type: String }),
    __param(0, (0, get_current_user_1.GetCurrentUser)('userId')),
    __param(1, (0, get_current_user_1.GetCurrentUser)('role')),
    __param(2, (0, common_1.Query)('page')),
    __param(3, (0, common_1.Query)('limit')),
    __param(4, (0, common_1.Query)('sortBy')),
    __param(5, (0, common_1.Query)('sortOrder')),
    __param(6, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], FollowController.prototype, "myfollowerUser", null);
__decorate([
    (0, common_1.Get)('follower-agent'),
    (0, swagger_1.ApiOperation)({ summary: 'Get list of users that the buyer is following' }),
    (0, swagger_1.ApiOkResponse)({ description: 'List of following users' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'sortBy', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'sortOrder', required: false, enum: ['asc', 'desc'], }),
    (0, swagger_1.ApiQuery)({ name: 'search', required: false, type: String }),
    __param(0, (0, get_current_user_1.GetCurrentUser)('userId')),
    __param(1, (0, get_current_user_1.GetCurrentUser)('role')),
    __param(2, (0, common_1.Query)('page')),
    __param(3, (0, common_1.Query)('limit')),
    __param(4, (0, common_1.Query)('sortBy')),
    __param(5, (0, common_1.Query)('sortOrder')),
    __param(6, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], FollowController.prototype, "myfollowerAgent", null);
__decorate([
    (0, common_1.Get)('/following-exist/:followingId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Check if Following is Existing' }),
    (0, swagger_1.ApiOkResponse)({ type: Boolean }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, get_current_user_1.GetCurrentUser)('userId')),
    __param(1, (0, get_current_user_1.GetCurrentUser)('role')),
    __param(2, (0, common_1.Param)('followingId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], FollowController.prototype, "followingExisting", null);
exports.FollowController = FollowController = __decorate([
    (0, swagger_1.ApiTags)('follow'),
    (0, common_1.Controller)('follow'),
    __metadata("design:paramtypes", [follow_service_1.FollowService])
], FollowController);
//# sourceMappingURL=follow.controller.js.map