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
exports.SavePostController = void 0;
const common_1 = require("@nestjs/common");
const save_post_service_1 = require("./save-post.service");
const swagger_1 = require("@nestjs/swagger");
const save_post_entity_1 = require("./entities/save-post.entity");
const get_current_user_1 = require("../common/get-current.user");
let SavePostController = class SavePostController {
    constructor(savePostService) {
        this.savePostService = savePostService;
    }
    async savePostById(id, role, userId, saveby) {
        return this.savePostService.savePostById(role, id, userId, saveby);
    }
    async findMyPost(userId, role, page, limit, sortBy, sortOrder, postType) {
        return this.savePostService.findMySavePost(userId, role, page, limit, sortBy, sortOrder, postType);
    }
    async delete(id) {
        return this.savePostService.deleteById(id);
    }
    async existingSavePost(userId, role, savePostId) {
        return this.savePostService.savePostExisting(role, userId, savePostId);
    }
    async deletePostExisting(userId, role, savePostId) {
        return this.savePostService.deletePostExisting(role, userId, savePostId);
    }
};
exports.SavePostController = SavePostController;
__decorate([
    (0, common_1.Post)('/:role/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Save post by id' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Save Post successful' }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('role')),
    __param(2, (0, get_current_user_1.GetCurrentUser)('userId')),
    __param(3, (0, get_current_user_1.GetCurrentUser)('role')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], SavePostController.prototype, "savePostById", null);
__decorate([
    (0, common_1.Get)('/my-save-post'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Get My Post' }),
    (0, swagger_1.ApiOkResponse)({ type: [save_post_entity_1.SavePost] }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, get_current_user_1.GetCurrentUser)('userId')),
    __param(1, (0, get_current_user_1.GetCurrentUser)('role')),
    __param(2, (0, common_1.Query)('page')),
    __param(3, (0, common_1.Query)('limit')),
    __param(4, (0, common_1.Query)('sortBy')),
    __param(5, (0, common_1.Query)('sortOrder')),
    __param(6, (0, common_1.Query)('postType')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number, Number, String, String, String]),
    __metadata("design:returntype", Promise)
], SavePostController.prototype, "findMyPost", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Delete saved save post by id' }),
    (0, swagger_1.ApiOkResponse)({ type: save_post_entity_1.SavePost }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SavePostController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('/save-post-exist/:savePostId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Check if Post is Saved' }),
    (0, swagger_1.ApiOkResponse)({ type: Boolean }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, get_current_user_1.GetCurrentUser)('userId')),
    __param(1, (0, get_current_user_1.GetCurrentUser)('role')),
    __param(2, (0, common_1.Param)('savePostId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], SavePostController.prototype, "existingSavePost", null);
__decorate([
    (0, common_1.Delete)('/delete-post-exist/:savePostId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Check if Post is Saved' }),
    (0, swagger_1.ApiOkResponse)({ type: Boolean }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, get_current_user_1.GetCurrentUser)('userId')),
    __param(1, (0, get_current_user_1.GetCurrentUser)('role')),
    __param(2, (0, common_1.Param)('savePostId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], SavePostController.prototype, "deletePostExisting", null);
exports.SavePostController = SavePostController = __decorate([
    (0, swagger_1.ApiTags)('save-post'),
    (0, common_1.Controller)('save-post'),
    __metadata("design:paramtypes", [save_post_service_1.SavePostService])
], SavePostController);
//# sourceMappingURL=save-post.controller.js.map