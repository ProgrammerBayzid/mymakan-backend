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
exports.QueryAllPostDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class QueryAllPostDto {
}
exports.QueryAllPostDto = QueryAllPostDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Page number for pagination', }),
    __metadata("design:type", Number)
], QueryAllPostDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Number of items per page', }),
    __metadata("design:type", Number)
], QueryAllPostDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter the post by rent ot sell', }),
    __metadata("design:type", String)
], QueryAllPostDto.prototype, "for", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter the post by rent ot sell', }),
    __metadata("design:type", String)
], QueryAllPostDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter the post by state', }),
    __metadata("design:type", String)
], QueryAllPostDto.prototype, "state", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter the post by country', }),
    __metadata("design:type", String)
], QueryAllPostDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter the post by country', }),
    __metadata("design:type", String)
], QueryAllPostDto.prototype, "agentId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter the post by country', }),
    __metadata("design:type", String)
], QueryAllPostDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter the post by country', }),
    __metadata("design:type", String)
], QueryAllPostDto.prototype, "postType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter the post by country', }),
    __metadata("design:type", String)
], QueryAllPostDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter the post by country', }),
    __metadata("design:type", String)
], QueryAllPostDto.prototype, "propertyCategory", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter the post by country', }),
    __metadata("design:type", String)
], QueryAllPostDto.prototype, "propertyType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter the post by country', }),
    __metadata("design:type", String)
], QueryAllPostDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter the post by country', }),
    __metadata("design:type", String)
], QueryAllPostDto.prototype, "towersorBuildingName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter the post by country', }),
    __metadata("design:type", String)
], QueryAllPostDto.prototype, "parking", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter the post by country', }),
    __metadata("design:type", Boolean)
], QueryAllPostDto.prototype, "booked", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter the post by country', }),
    __metadata("design:type", Boolean)
], QueryAllPostDto.prototype, "sell", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter the post by tags', }),
    __metadata("design:type", Array)
], QueryAllPostDto.prototype, "tags", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter the post by tags', }),
    __metadata("design:type", Array)
], QueryAllPostDto.prototype, "sellType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter the post by sortBy', }),
    __metadata("design:type", String)
], QueryAllPostDto.prototype, "sortBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter post by sortOrder asc or desc', }),
    __metadata("design:type", String)
], QueryAllPostDto.prototype, "sortOrder", void 0);
//# sourceMappingURL=AllPostQuery.js.map