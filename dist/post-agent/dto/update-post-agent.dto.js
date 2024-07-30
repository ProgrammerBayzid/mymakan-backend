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
exports.UpdatePostAgentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_post_agent_dto_1 = require("./create-post-agent.dto");
const swagger_2 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const post_location_1 = require("../entities/post-location");
class UpdatePostAgentDto extends (0, swagger_1.PartialType)(create_post_agent_dto_1.CreatePostAgentDto) {
}
exports.UpdatePostAgentDto = UpdatePostAgentDto;
__decorate([
    (0, swagger_2.ApiProperty)({
        example: 'the post title',
        description: 'The Post title',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdatePostAgentDto.prototype, "title", void 0);
__decorate([
    (0, swagger_2.ApiProperty)({
        example: 'the post description',
        description: 'The Post description',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdatePostAgentDto.prototype, "description", void 0);
__decorate([
    (0, swagger_2.ApiProperty)({
        example: 'sell or rent etc',
        description: 'The post for sell or rent etc',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdatePostAgentDto.prototype, "for", void 0);
__decorate([
    (0, swagger_2.ApiProperty)({
        type: [String],
        description: 'The images of post',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], UpdatePostAgentDto.prototype, "image", void 0);
__decorate([
    (0, swagger_2.ApiProperty)({
        type: [String],
        description: 'The tags of post',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], UpdatePostAgentDto.prototype, "tags", void 0);
__decorate([
    (0, swagger_2.ApiProperty)({
        type: post_location_1.PostLocation,
        description: 'The map location of post',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", post_location_1.PostLocation)
], UpdatePostAgentDto.prototype, "location", void 0);
__decorate([
    (0, swagger_2.ApiProperty)({
        description: 'Indicates if the post is booked',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdatePostAgentDto.prototype, "booked", void 0);
__decorate([
    (0, swagger_2.ApiProperty)({
        description: 'Indicates if the post is for sell',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdatePostAgentDto.prototype, "sell", void 0);
__decorate([
    (0, swagger_2.ApiProperty)({
        description: 'Indicates if the post is for argent',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdatePostAgentDto.prototype, "postType", void 0);
__decorate([
    (0, swagger_2.ApiProperty)({
        description: 'Indicates if the post is for argent',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdatePostAgentDto.prototype, "type", void 0);
__decorate([
    (0, swagger_2.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdatePostAgentDto.prototype, "propertyCategory", void 0);
__decorate([
    (0, swagger_2.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdatePostAgentDto.prototype, "propertyType", void 0);
__decorate([
    (0, swagger_2.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdatePostAgentDto.prototype, "parking", void 0);
__decorate([
    (0, swagger_2.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdatePostAgentDto.prototype, "sqft", void 0);
__decorate([
    (0, swagger_2.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdatePostAgentDto.prototype, "price", void 0);
__decorate([
    (0, swagger_2.ApiProperty)({
        type: [String],
        description: 'The tags of post',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], UpdatePostAgentDto.prototype, "sellType", void 0);
__decorate([
    (0, swagger_2.ApiProperty)({
        description: 'Linke count of post',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdatePostAgentDto.prototype, "like", void 0);
//# sourceMappingURL=update-post-agent.dto.js.map