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
exports.QueryAgentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class QueryAgentDto {
}
exports.QueryAgentDto = QueryAgentDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Page number for pagination', }),
    __metadata("design:type", Number)
], QueryAgentDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Number of items per page', }),
    __metadata("design:type", Number)
], QueryAgentDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Number of items per page', }),
    __metadata("design:type", Number)
], QueryAgentDto.prototype, "totalrating", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Number of items per page', }),
    __metadata("design:type", Number)
], QueryAgentDto.prototype, "avgrating", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Number of items per page', }),
    __metadata("design:type", Number)
], QueryAgentDto.prototype, "totalReview", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter the post by state', }),
    __metadata("design:type", String)
], QueryAgentDto.prototype, "state", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter the post by country', }),
    __metadata("design:type", String)
], QueryAgentDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter the post by country', }),
    __metadata("design:type", String)
], QueryAgentDto.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter the post by country', }),
    __metadata("design:type", String)
], QueryAgentDto.prototype, "companyName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter the post by sortBy', }),
    __metadata("design:type", String)
], QueryAgentDto.prototype, "sortBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter post by sortOrder asc or desc', }),
    __metadata("design:type", String)
], QueryAgentDto.prototype, "sortOrder", void 0);
//# sourceMappingURL=agentQuery.js.map