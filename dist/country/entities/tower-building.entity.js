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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TowersOrBuildingNameSchema = exports.TowersOrBuildingName = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const mongoose_2 = require("mongoose");
let TowersOrBuildingName = class TowersOrBuildingName {
};
exports.TowersOrBuildingName = TowersOrBuildingName;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '5ff48e093ecb8200f8b0fff3',
        description: 'The unique identifier of the TowersOrBuildingName',
    }),
    __metadata("design:type", String)
], TowersOrBuildingName.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'United States',
        description: 'The name of the TowersOrBuildingName',
    }),
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], TowersOrBuildingName.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "city id",
        description: 'The id of the city',
    }),
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Citiy', required: true }),
    __metadata("design:type", String)
], TowersOrBuildingName.prototype, "city_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-02-01T12:34:56.789Z',
        description: 'The timestamp when the TowersOrBuildingName was created',
    }),
    __metadata("design:type", Date)
], TowersOrBuildingName.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-02-01T12:34:56.789Z',
        description: 'The timestamp when the TowersOrBuildingName was last updated',
    }),
    __metadata("design:type", Date)
], TowersOrBuildingName.prototype, "updatedAt", void 0);
exports.TowersOrBuildingName = TowersOrBuildingName = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
    })
], TowersOrBuildingName);
exports.TowersOrBuildingNameSchema = mongoose_1.SchemaFactory.createForClass(TowersOrBuildingName);
//# sourceMappingURL=tower-building.entity.js.map