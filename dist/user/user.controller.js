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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const update_user_dto_1 = require("./dto/update-user.dto");
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("./entities/user.entity");
const get_current_user_1 = require("../common/get-current.user");
const create_review_dto_1 = require("./dto/create-review.dto");
const review_entity_1 = require("./entities/review.entity");
const QueryUserDto_1 = require("./dto/QueryUserDto");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async findAllAgent(userId, role, queryOptions) {
        return this.userService.findAllUser(userId, role, queryOptions);
    }
    async findMyProfile(userId) {
        console.log(userId);
        return this.userService.findMyProfile(userId);
    }
    async getUser(id, userId, role) {
        return this.userService.findById(id, userId, role);
    }
    async updateDoctor(userId, updateUser) {
        return this.userService.updateById(userId, updateUser);
    }
    async deleteUser(userId) {
        return this.userService.deleteById(userId);
    }
    async deleteUserByAdminPanel(id) {
        return this.userService.adminPanelUserDelete(id);
    }
    async createDoctor(createUserReviewDto, agentId) {
        return this.userService.reviewCreate(agentId, createUserReviewDto);
    }
    async findMyReview(userId) {
        return this.userService.findMyReview(userId);
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)('/all-get'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all user posts with pagination and filtering' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOkResponse)({ type: user_entity_1.User }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, get_current_user_1.GetCurrentUser)('userId')),
    __param(1, (0, get_current_user_1.GetCurrentUser)('role')),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, QueryUserDto_1.QueryUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findAllAgent", null);
__decorate([
    (0, common_1.Get)('/myProfile'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Get my Profile' }),
    (0, swagger_1.ApiOkResponse)({ type: [user_entity_1.User] }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, get_current_user_1.GetCurrentUser)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findMyProfile", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'User ID' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Successfully Buyer Get' }),
    (0, swagger_1.ApiOkResponse)({ type: user_entity_1.User }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, get_current_user_1.GetCurrentUser)('userId')),
    __param(2, (0, get_current_user_1.GetCurrentUser)('role')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
__decorate([
    (0, common_1.Patch)('/update-profile'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Update saved agent by id' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'The agent has been successfully update.',
        type: user_entity_1.User,
    }),
    (0, swagger_1.ApiBody)({
        type: update_user_dto_1.UpdateUserDto,
    }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, get_current_user_1.GetCurrentUser)('userId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateDoctor", null);
__decorate([
    (0, common_1.Delete)('/delete'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Delete saved User by id' }),
    (0, swagger_1.ApiOkResponse)({ type: user_entity_1.User }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, get_current_user_1.GetCurrentUser)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUser", null);
__decorate([
    (0, common_1.Delete)('/delete-admin-panel/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Delete saved User by id' }),
    (0, swagger_1.ApiOkResponse)({ type: user_entity_1.User }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUserByAdminPanel", null);
__decorate([
    (0, common_1.Post)('/add-review'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Add a review' }),
    (0, swagger_1.ApiBody)({
        type: create_review_dto_1.CreateUserReviewDto,
    }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The agent post comment has been successfully created.',
        type: review_entity_1.UserReview,
    }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_current_user_1.GetCurrentUser)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_review_dto_1.CreateUserReviewDto, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createDoctor", null);
__decorate([
    (0, common_1.Get)('/my-review'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Get my Profile' }),
    (0, swagger_1.ApiOkResponse)({ type: [review_entity_1.UserReview] }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, get_current_user_1.GetCurrentUser)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findMyReview", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user'),
    (0, swagger_1.ApiTags)('User'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map