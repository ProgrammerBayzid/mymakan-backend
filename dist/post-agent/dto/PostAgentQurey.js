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
exports.QueryAgentPostDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class QueryAgentPostDto {
}
exports.QueryAgentPostDto = QueryAgentPostDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Page number for pagination', }),
    __metadata("design:type", Number)
], QueryAgentPostDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Number of items per page', }),
    __metadata("design:type", Number)
], QueryAgentPostDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter the post by rent ot sell', }),
    __metadata("design:type", String)
], QueryAgentPostDto.prototype, "for", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter the post by state', }),
    __metadata("design:type", String)
], QueryAgentPostDto.prototype, "state", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter the post by country', }),
    __metadata("design:type", String)
], QueryAgentPostDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter the post by country', }),
    __metadata("design:type", String)
], QueryAgentPostDto.prototype, "agentId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter the post by country', }),
    __metadata("design:type", String)
], QueryAgentPostDto.prototype, "postType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter the post by country', }),
    __metadata("design:type", String)
], QueryAgentPostDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter the post by country', }),
    __metadata("design:type", String)
], QueryAgentPostDto.prototype, "propertyCategory", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter the post by country', }),
    __metadata("design:type", String)
], QueryAgentPostDto.prototype, "propertyType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter the post by country', }),
    __metadata("design:type", String)
], QueryAgentPostDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter the post by country', }),
    __metadata("design:type", String)
], QueryAgentPostDto.prototype, "towersorBuildingName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter the post by country', }),
    __metadata("design:type", String)
], QueryAgentPostDto.prototype, "parking", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter the post by country', }),
    __metadata("design:type", Boolean)
], QueryAgentPostDto.prototype, "booked", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter the post by country', }),
    __metadata("design:type", Boolean)
], QueryAgentPostDto.prototype, "sell", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter the post by tags', }),
    __metadata("design:type", Array)
], QueryAgentPostDto.prototype, "tags", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter the post by tags', }),
    __metadata("design:type", Array)
], QueryAgentPostDto.prototype, "sellType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter the post by sortBy', }),
    __metadata("design:type", String)
], QueryAgentPostDto.prototype, "sortBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter post by sortOrder asc or desc', }),
    __metadata("design:type", String)
], QueryAgentPostDto.prototype, "sortOrder", void 0);
//# sourceMappingURL=PostAgentQurey.js.map