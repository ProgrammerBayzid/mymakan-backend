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
exports.PostFieldDataController = void 0;
const common_1 = require("@nestjs/common");
const post_field_data_service_1 = require("./post-field-data.service");
const createParkingdto_1 = require("./dto/parkingdto/createParkingdto");
const createPropertyCategoryDto_1 = require("./dto/propertyCategoryDto/createPropertyCategoryDto");
const createPropertyTypeDto_1 = require("./dto/propertyTypeDto/createPropertyTypeDto");
const createSellType_dto_1 = require("./dto/sellTypeDto/createSellType.dto");
const createTags_dto_1 = require("./dto/tagsDto/createTags.dto");
const swagger_1 = require("@nestjs/swagger");
const parking_entity_dto_1 = require("./entities/parking.entity.dto");
const propertycategoryentity_dto_1 = require("./entities/propertycategoryentity.dto");
const PropertyTypeEntity_dto_1 = require("./entities/PropertyTypeEntity.dto");
const sellType_entity_dto_1 = require("./entities/sellType.entity.dto");
const tags_entity_dto_1 = require("./entities/tags.entity.dto");
const public_decorator_1 = require("../common/public.decorator");
const updateParkingDto_1 = require("./dto/parkingdto/updateParkingDto");
const updatePropertyCategoryDto_1 = require("./dto/propertyCategoryDto/updatePropertyCategoryDto");
const updatePropertyTypeDto_1 = require("./dto/propertyTypeDto/updatePropertyTypeDto");
const updateSellType_dto_1 = require("./dto/sellTypeDto/updateSellType.dto");
const updateTags_dto_1 = require("./dto/tagsDto/updateTags.dto");
let PostFieldDataController = class PostFieldDataController {
    constructor(postFieldDataService) {
        this.postFieldDataService = postFieldDataService;
    }
    async createParking(createParkingDto) {
        return this.postFieldDataService.createParking(createParkingDto);
    }
    async createPropertyCategory(createPropertyCategoryDto) {
        return this.postFieldDataService.createPropertyCategory(createPropertyCategoryDto);
    }
    async createPropertyType(createPropertyTypeDto) {
        return this.postFieldDataService.createPropertyType(createPropertyTypeDto);
    }
    async createSellType(createSellTypeDto) {
        return this.postFieldDataService.createSellType(createSellTypeDto);
    }
    async createTags(createTagsDto) {
        return this.postFieldDataService.createTags(createTagsDto);
    }
    async findAllParking() {
        return this.postFieldDataService.findAllParking();
    }
    async findAllPropertyCategory() {
        return this.postFieldDataService.findAllPropertyCategory();
    }
    async findAllPropertyType() {
        return this.postFieldDataService.findAllPropertyType();
    }
    async findAllSellType() {
        return this.postFieldDataService.findAllSellType();
    }
    async findAllTags() {
        return this.postFieldDataService.findAllTags();
    }
    async updateParking(id, updateParkingDto) {
        return this.postFieldDataService.updateParking(id, updateParkingDto);
    }
    async updatePropertyCategory(id, updatePropertyCategoryDto) {
        return this.postFieldDataService.updatePropertyCategory(id, updatePropertyCategoryDto);
    }
    async updatePropertyType(id, updatePropertyTypeDto) {
        return this.postFieldDataService.updatePropertyType(id, updatePropertyTypeDto);
    }
    async updateSellType(id, updateSellTypeDto) {
        return this.postFieldDataService.updateSellType(id, updateSellTypeDto);
    }
    async updateTags(id, updateTagsDto) {
        return this.postFieldDataService.updateSellType(id, updateTagsDto);
    }
    async deleteParking(id) {
        return this.postFieldDataService.deleteParking(id);
    }
    async deletePropertyCategory(id) {
        return this.postFieldDataService.deletePropertyCategory(id);
    }
    async deletePropertyType(id) {
        return this.postFieldDataService.deletePropertyType(id);
    }
    async deleteSellType(id) {
        return this.postFieldDataService.deleteSellType(id);
    }
    async deleteTags(id) {
        return this.postFieldDataService.deleteTags(id);
    }
};
exports.PostFieldDataController = PostFieldDataController;
__decorate([
    (0, common_1.Post)("/parking"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Add successfully' }),
    (0, swagger_1.ApiBody)({
        type: createParkingdto_1.CreateParkingDto,
    }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The Post has been successfully created.',
        type: parking_entity_dto_1.Parking,
    }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createParkingdto_1.CreateParkingDto]),
    __metadata("design:returntype", Promise)
], PostFieldDataController.prototype, "createParking", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)("property-category"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Add successfully' }),
    (0, swagger_1.ApiBody)({
        type: createPropertyCategoryDto_1.CreatePropertyCategoryDto,
    }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The Post has been successfully created.',
        type: propertycategoryentity_dto_1.PropertyCategory,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createPropertyCategoryDto_1.CreatePropertyCategoryDto]),
    __metadata("design:returntype", Promise)
], PostFieldDataController.prototype, "createPropertyCategory", null);
__decorate([
    (0, common_1.Post)("property-type"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Add successfully' }),
    (0, swagger_1.ApiBody)({
        type: createPropertyTypeDto_1.CreatePropertyTypeDto,
    }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The Post has been successfully created.',
        type: PropertyTypeEntity_dto_1.PropertyType,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createPropertyTypeDto_1.CreatePropertyTypeDto]),
    __metadata("design:returntype", Promise)
], PostFieldDataController.prototype, "createPropertyType", null);
__decorate([
    (0, common_1.Post)("sell-type"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Add successfully' }),
    (0, swagger_1.ApiBody)({
        type: createSellType_dto_1.CreateSellTypeDto,
    }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The Post has been successfully created.',
        type: sellType_entity_dto_1.SellType,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createSellType_dto_1.CreateSellTypeDto]),
    __metadata("design:returntype", Promise)
], PostFieldDataController.prototype, "createSellType", null);
__decorate([
    (0, common_1.Post)("tag"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Add successfully' }),
    (0, swagger_1.ApiBody)({
        type: createTags_dto_1.CreateTagsDto,
    }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The Post has been successfully created.',
        type: tags_entity_dto_1.Tags,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createTags_dto_1.CreateTagsDto]),
    __metadata("design:returntype", Promise)
], PostFieldDataController.prototype, "createTags", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('/parking'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all data' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostFieldDataController.prototype, "findAllParking", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('/property-category'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all data' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostFieldDataController.prototype, "findAllPropertyCategory", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('/property-type'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all data' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostFieldDataController.prototype, "findAllPropertyType", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('/sell-type'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all data' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostFieldDataController.prototype, "findAllSellType", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('/tags'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all data' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostFieldDataController.prototype, "findAllTags", null);
__decorate([
    (0, common_1.Patch)('/parking/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Update post by id' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'The post has been successfully updated.',
        type: parking_entity_dto_1.Parking,
    }),
    (0, swagger_1.ApiBody)({
        type: updateParkingDto_1.UpdateParkingDto,
    }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updateParkingDto_1.UpdateParkingDto]),
    __metadata("design:returntype", Promise)
], PostFieldDataController.prototype, "updateParking", null);
__decorate([
    (0, common_1.Patch)('/property-category/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Update post by id' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'The post has been successfully updated.',
        type: propertycategoryentity_dto_1.PropertyCategory,
    }),
    (0, swagger_1.ApiBody)({
        type: updatePropertyCategoryDto_1.UpdatePropertyCategoryDto,
    }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updatePropertyCategoryDto_1.UpdatePropertyCategoryDto]),
    __metadata("design:returntype", Promise)
], PostFieldDataController.prototype, "updatePropertyCategory", null);
__decorate([
    (0, common_1.Patch)('/property-type/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Update post by id' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'The post has been successfully updated.',
        type: PropertyTypeEntity_dto_1.PropertyType,
    }),
    (0, swagger_1.ApiBody)({
        type: updatePropertyTypeDto_1.UpdatePropertyTypeDto,
    }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updatePropertyTypeDto_1.UpdatePropertyTypeDto]),
    __metadata("design:returntype", Promise)
], PostFieldDataController.prototype, "updatePropertyType", null);
__decorate([
    (0, common_1.Patch)('/sell-type/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Update post by id' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'The post has been successfully updated.',
        type: sellType_entity_dto_1.SellType,
    }),
    (0, swagger_1.ApiBody)({
        type: updateSellType_dto_1.UpdateSellTypeDto,
    }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updateSellType_dto_1.UpdateSellTypeDto]),
    __metadata("design:returntype", Promise)
], PostFieldDataController.prototype, "updateSellType", null);
__decorate([
    (0, common_1.Patch)('/tags/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Update post by id' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'The post has been successfully updated.',
        type: tags_entity_dto_1.Tags,
    }),
    (0, swagger_1.ApiBody)({
        type: updateTags_dto_1.UpdateTagsDto,
    }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updateTags_dto_1.UpdateTagsDto]),
    __metadata("design:returntype", Promise)
], PostFieldDataController.prototype, "updateTags", null);
__decorate([
    (0, common_1.Delete)('/parking/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Delete saved post by id' }),
    (0, swagger_1.ApiOkResponse)({ type: parking_entity_dto_1.Parking }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostFieldDataController.prototype, "deleteParking", null);
__decorate([
    (0, common_1.Delete)('/property-category/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Delete saved post by id' }),
    (0, swagger_1.ApiOkResponse)({ type: propertycategoryentity_dto_1.PropertyCategory }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostFieldDataController.prototype, "deletePropertyCategory", null);
__decorate([
    (0, common_1.Delete)('/property-type/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Delete saved post by id' }),
    (0, swagger_1.ApiOkResponse)({ type: PropertyTypeEntity_dto_1.PropertyType }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostFieldDataController.prototype, "deletePropertyType", null);
__decorate([
    (0, common_1.Delete)('/sell-type/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Delete saved post by id' }),
    (0, swagger_1.ApiOkResponse)({ type: sellType_entity_dto_1.SellType }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostFieldDataController.prototype, "deleteSellType", null);
__decorate([
    (0, common_1.Delete)('/sell-type/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Delete saved post by id' }),
    (0, swagger_1.ApiOkResponse)({ type: tags_entity_dto_1.Tags }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostFieldDataController.prototype, "deleteTags", null);
exports.PostFieldDataController = PostFieldDataController = __decorate([
    (0, swagger_1.ApiTags)('post-field-data'),
    (0, common_1.Controller)('post-field-data'),
    __metadata("design:paramtypes", [post_field_data_service_1.PostFieldDataService])
], PostFieldDataController);
//# sourceMappingURL=post-field-data.controller.js.map