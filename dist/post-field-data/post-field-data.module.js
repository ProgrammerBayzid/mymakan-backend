"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostFieldDataModule = void 0;
const common_1 = require("@nestjs/common");
const post_field_data_service_1 = require("./post-field-data.service");
const post_field_data_controller_1 = require("./post-field-data.controller");
const mongoose_1 = require("@nestjs/mongoose");
const parking_entity_dto_1 = require("./entities/parking.entity.dto");
const propertycategoryentity_dto_1 = require("./entities/propertycategoryentity.dto");
const PropertyTypeEntity_dto_1 = require("./entities/PropertyTypeEntity.dto");
const sellType_entity_dto_1 = require("./entities/sellType.entity.dto");
const tags_entity_dto_1 = require("./entities/tags.entity.dto");
let PostFieldDataModule = class PostFieldDataModule {
};
exports.PostFieldDataModule = PostFieldDataModule;
exports.PostFieldDataModule = PostFieldDataModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'Parking', schema: parking_entity_dto_1.ParkingSchema },
                { name: 'PropertyCategory', schema: propertycategoryentity_dto_1.PropertyCategorySchema },
                { name: 'PropertyType', schema: PropertyTypeEntity_dto_1.PropertyTypeSchema },
                { name: 'SellType', schema: sellType_entity_dto_1.SellTypeSchema },
                { name: 'Tags', schema: tags_entity_dto_1.TagsSchema },
            ]),
        ],
        controllers: [post_field_data_controller_1.PostFieldDataController],
        providers: [post_field_data_service_1.PostFieldDataService],
    })
], PostFieldDataModule);
//# sourceMappingURL=post-field-data.module.js.map