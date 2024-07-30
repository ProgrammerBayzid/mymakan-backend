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
exports.CreateAgentPostCommentReplyDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateAgentPostCommentReplyDto {
}
exports.CreateAgentPostCommentReplyDto = CreateAgentPostCommentReplyDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'the post comment title',
        description: 'The Post comment title',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAgentPostCommentReplyDto.prototype, "agentPostCommentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'The Post comment reply title',
        description: 'The Post comment reply title',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAgentPostCommentReplyDto.prototype, "reply", void 0);
//# sourceMappingURL=create-agent-post-comment-reply.dto.js.map