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
exports.CountrySchema = exports.Country = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const mongoose_2 = require("mongoose");
const flag_entity_1 = require("./flag.entity");
let Country = class Country {
};
exports.Country = Country;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '5ff48e093ecb8200f8b0fff3',
        description: 'The unique identifier of the Country',
    }),
    __metadata("design:type", String)
], Country.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'United States',
        description: 'The name of the Country',
    }),
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Country.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: flag_entity_1.Flag }),
    (0, swagger_1.ApiProperty)({
        type: flag_entity_1.Flag,
        description: 'The country flag',
    }),
    __metadata("design:type", flag_entity_1.Flag)
], Country.prototype, "flags", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '840',
        description: 'The numeric code of the Country',
    }),
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Country.prototype, "numeric_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '+1',
        description: 'The phone code of the Country',
    }),
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Country.prototype, "phone_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ['California', 'Texas', 'New York'],
        description: 'The states of the Country',
    }),
    (0, mongoose_1.Prop)({ type: [{ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'State' }], default: [] }),
    __metadata("design:type", Array)
], Country.prototype, "states", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-02-01T12:34:56.789Z',
        description: 'The timestamp when the country was created',
    }),
    __metadata("design:type", Date)
], Country.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-02-01T12:34:56.789Z',
        description: 'The timestamp when the country was last updated',
    }),
    __metadata("design:type", Date)
], Country.prototype, "updatedAt", void 0);
exports.Country = Country = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
    })
], Country);
exports.CountrySchema = mongoose_1.SchemaFactory.createForClass(Country);
//# sourceMappingURL=country.entity.js.map