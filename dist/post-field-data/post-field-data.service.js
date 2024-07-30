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
exports.PostFieldDataService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const parking_entity_dto_1 = require("./entities/parking.entity.dto");
const mongoose_2 = require("mongoose");
const propertycategoryentity_dto_1 = require("./entities/propertycategoryentity.dto");
const PropertyTypeEntity_dto_1 = require("./entities/PropertyTypeEntity.dto");
const sellType_entity_dto_1 = require("./entities/sellType.entity.dto");
const tags_entity_dto_1 = require("./entities/tags.entity.dto");
let PostFieldDataService = class PostFieldDataService {
    constructor(parkingModel, propertyCategoryModel, propertyTypeModel, sellTypeModel, tagsModel) {
        this.parkingModel = parkingModel;
        this.propertyCategoryModel = propertyCategoryModel;
        this.propertyTypeModel = propertyTypeModel;
        this.sellTypeModel = sellTypeModel;
        this.tagsModel = tagsModel;
    }
    async createParking(createParkingDto) {
        const createParking = new this.parkingModel({
            ...createParkingDto,
        });
        const savedPost = await createParking.save();
        return savedPost;
    }
    async createPropertyCategory(createPropertyCategoryDto) {
        const createPropertyCategory = new this.propertyCategoryModel({
            name: createPropertyCategoryDto.name,
        });
        const saved = await createPropertyCategory.save();
        return saved;
    }
    async createPropertyType(createPropertyTypeDto) {
        const createPropertyType = new this.propertyTypeModel({
            ...createPropertyTypeDto,
        });
        const saved = await createPropertyType.save();
        return saved;
    }
    async createSellType(createSellTypeDto) {
        const createSellType = new this.sellTypeModel({
            ...createSellTypeDto,
        });
        const saved = await createSellType.save();
        return saved;
    }
    async createTags(createTagsDto) {
        const createTags = new this.tagsModel({
            ...createTagsDto,
        });
        const saved = await createTags.save();
        return saved;
    }
    async findAllParking() {
        return this.parkingModel.find().exec();
    }
    async findAllPropertyCategory() {
        return this.propertyCategoryModel.find().exec();
    }
    async findAllPropertyType() {
        return this.propertyTypeModel.find().exec();
    }
    async findAllSellType() {
        return this.sellTypeModel.find().exec();
    }
    async findAllTags() {
        return this.tagsModel.find().exec();
    }
    async updateParking(id, updateParkingDto) {
        const existingParking = await this.parkingModel.findByIdAndUpdate(id, updateParkingDto, { new: true }).exec();
        if (!existingParking) {
            throw new common_1.NotFoundException(`Parking with ID ${id} not found`);
        }
        return existingParking;
    }
    async updatePropertyCategory(id, updatePropertyCategoryDto) {
        const existingData = await this.propertyCategoryModel.findByIdAndUpdate(id, updatePropertyCategoryDto, { new: true }).exec();
        if (!existingData) {
            throw new common_1.NotFoundException(`Parking with ID ${id} not found`);
        }
        return existingData;
    }
    async updatePropertyType(id, updatePropertyTypeDto) {
        const existingData = await this.propertyTypeModel.findByIdAndUpdate(id, updatePropertyTypeDto, { new: true }).exec();
        if (!existingData) {
            throw new common_1.NotFoundException(`Parking with ID ${id} not found`);
        }
        return existingData;
    }
    async updateSellType(id, updateSellTypeDto) {
        const existingData = await this.sellTypeModel.findByIdAndUpdate(id, updateSellTypeDto, { new: true }).exec();
        if (!existingData) {
            throw new common_1.NotFoundException(`Parking with ID ${id} not found`);
        }
        return existingData;
    }
    async updateTags(id, updateTagsDto) {
        const existingData = await this.tagsModel.findByIdAndUpdate(id, updateTagsDto, { new: true }).exec();
        if (!existingData) {
            throw new common_1.NotFoundException(`Parking with ID ${id} not found`);
        }
        return existingData;
    }
    async deleteParking(id) {
        const deletedParking = await this.parkingModel.findByIdAndDelete(id).exec();
        if (!deletedParking) {
            throw new common_1.NotFoundException(`Parking with ID ${id} not found`);
        }
        return deletedParking;
    }
    async deletePropertyCategory(id) {
        const deleted = await this.propertyCategoryModel.findByIdAndDelete(id).exec();
        if (!deleted) {
            throw new common_1.NotFoundException(`Parking with ID ${id} not found`);
        }
        return deleted;
    }
    async deletePropertyType(id) {
        const deleted = await this.propertyTypeModel.findByIdAndDelete(id).exec();
        if (!deleted) {
            throw new common_1.NotFoundException(`Parking with ID ${id} not found`);
        }
        return deleted;
    }
    async deleteSellType(id) {
        const deleted = await this.sellTypeModel.findByIdAndDelete(id).exec();
        if (!deleted) {
            throw new common_1.NotFoundException(`Parking with ID ${id} not found`);
        }
        return deleted;
    }
    async deleteTags(id) {
        const deleted = await this.tagsModel.findByIdAndDelete(id).exec();
        if (!deleted) {
            throw new common_1.NotFoundException(`Parking with ID ${id} not found`);
        }
        return deleted;
    }
};
exports.PostFieldDataService = PostFieldDataService;
exports.PostFieldDataService = PostFieldDataService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(parking_entity_dto_1.Parking.name)),
    __param(1, (0, mongoose_1.InjectModel)(propertycategoryentity_dto_1.PropertyCategory.name)),
    __param(2, (0, mongoose_1.InjectModel)(PropertyTypeEntity_dto_1.PropertyType.name)),
    __param(3, (0, mongoose_1.InjectModel)(sellType_entity_dto_1.SellType.name)),
    __param(4, (0, mongoose_1.InjectModel)(tags_entity_dto_1.Tags.name)),
    __metadata("design:paramtypes", [mongoose_2.default.Model, mongoose_2.default.Model, mongoose_2.default.Model, mongoose_2.default.Model, mongoose_2.default.Model])
], PostFieldDataService);
//# sourceMappingURL=post-field-data.service.js.map