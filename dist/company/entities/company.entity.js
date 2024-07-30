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
exports.CompanySchema = exports.Company = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
let Company = class Company {
};
exports.Company = Company;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '5ff48e093ecb8200f8b0fff3',
        description: 'The unique identifier of the Company',
    }),
    __metadata("design:type", String)
], Company.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'bayzid@gmail.com',
        description: 'The name_english of the Company',
    }),
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Company.prototype, "name_english", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'bayzid@gmail.com',
        description: 'The name_english of the Company',
    }),
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Company.prototype, "name_arabic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'bayzid@gmail.com',
        description: 'The name_english of the Company',
    }),
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Company.prototype, "broker_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'bayzid@gmail.com',
        description: 'The name_english of the Company',
    }),
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Company.prototype, "Office_name_english", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'bayzid@gmail.com',
        description: 'The name_english of the Company',
    }),
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Company.prototype, "phone_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'bayzid@gmail.com',
        description: 'The name_english of the Company',
    }),
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Company.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-02-01T12:34:56.789Z',
        description: 'The timestamp when the doctor was created',
    }),
    __metadata("design:type", Date)
], Company.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-02-01T12:34:56.789Z',
        description: 'The timestamp when the doctor was last updated',
    }),
    __metadata("design:type", Date)
], Company.prototype, "updatedAt", void 0);
exports.Company = Company = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
    })
], Company);
exports.CompanySchema = mongoose_1.SchemaFactory.createForClass(Company);
//# sourceMappingURL=company.entity.js.map