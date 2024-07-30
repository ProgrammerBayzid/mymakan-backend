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
exports.PostLocation = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
class PostLocation {
}
exports.PostLocation = PostLocation;
__decorate([
    (0, mongoose_1.Prop)({ type: Number }),
    (0, swagger_1.ApiProperty)({
        type: Number,
        description: 'The latitude of the post location',
    }),
    __metadata("design:type", Number)
], PostLocation.prototype, "lat", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number }),
    (0, swagger_1.ApiProperty)({
        type: Number,
        description: 'The longitude of the post location',
    }),
    __metadata("design:type", Number)
], PostLocation.prototype, "lng", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'The formatted address of the post location',
    }),
    __metadata("design:type", String)
], PostLocation.prototype, "formatted_address", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'The country of the post',
    }),
    __metadata("design:type", String)
], PostLocation.prototype, "country", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'The state of the post',
    }),
    __metadata("design:type", String)
], PostLocation.prototype, "state", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'The state of the post',
    }),
    __metadata("design:type", String)
], PostLocation.prototype, "city", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'Towers or Building Name',
    }),
    __metadata("design:type", String)
], PostLocation.prototype, "towersorBuildingName", void 0);
//# sourceMappingURL=post-location.js.map