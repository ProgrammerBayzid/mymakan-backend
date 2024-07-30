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
exports.CreateAllPostDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const post_location_1 = require("../../post-agent/entities/post-location");
class CreateAllPostDto {
}
exports.CreateAllPostDto = CreateAllPostDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'the post title',
        description: 'The Post title',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAllPostDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'the post description',
        description: 'The Post description',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAllPostDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'sell or rent etc',
        description: 'The post for sell or rent etc',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAllPostDto.prototype, "for", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The media items associated with the post',
        type: [
            {
                _id: { type: String, required: true },
                type: { type: String, required: true },
                url: { type: String, required: true },
            },
        ],
        example: [
            {
                _id: '609d0f2f2f3b1c6b6d7d91d5',
                type: 'image',
                url: 'https://example.com/media/image.jpg',
            },
            {
                _id: '609d0f2f2f3b1c6b6d7d91d6',
                type: 'video',
                url: 'https://example.com/media/video.mp4',
            },
        ],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => MediaItem),
    __metadata("design:type", Array)
], CreateAllPostDto.prototype, "media", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        description: 'The tags of post',
    }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateAllPostDto.prototype, "tags", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: post_location_1.PostLocation,
        description: 'The map location of post',
    }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => post_location_1.PostLocation),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", post_location_1.PostLocation)
], CreateAllPostDto.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Indicates if the post is for argent',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAllPostDto.prototype, "postType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Indicates if the post is for argent',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAllPostDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAllPostDto.prototype, "propertyCategory", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAllPostDto.prototype, "propertyType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAllPostDto.prototype, "parking", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateAllPostDto.prototype, "sqft", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateAllPostDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        description: 'The tags of post',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateAllPostDto.prototype, "sellType", void 0);
class MediaItem {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The unique identifier for the media item',
        example: '609d0f2f2f3b1c6b6d7d91d5',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MediaItem.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The type of the media item (e.g., image, video)',
        example: 'image',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MediaItem.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The URL of the media item',
        example: 'https://example.com/media/image.jpg',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MediaItem.prototype, "url", void 0);
//# sourceMappingURL=create-allpost.dto.js.map