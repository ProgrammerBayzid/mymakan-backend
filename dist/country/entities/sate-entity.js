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
exports.StateSchema = exports.State = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const mongoose_2 = require("mongoose");
let State = class State {
};
exports.State = State;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '5ff48e093ecb8200f8b0fff3',
        description: 'The unique identifier of the State',
    }),
    __metadata("design:type", String)
], State.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'United States',
        description: 'The name of the State',
    }),
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], State.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "country id",
        description: 'The id of the Country',
    }),
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Country', required: true }),
    __metadata("design:type", String)
], State.prototype, "country_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ['California', 'Texas', 'New York'],
        description: 'The states of the State',
    }),
    (0, mongoose_1.Prop)({ type: [{ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Citiy' }], default: [] }),
    __metadata("design:type", Array)
], State.prototype, "cites", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-02-01T12:34:56.789Z',
        description: 'The timestamp when the State was created',
    }),
    __metadata("design:type", Date)
], State.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-02-01T12:34:56.789Z',
        description: 'The timestamp when the State was last updated',
    }),
    __metadata("design:type", Date)
], State.prototype, "updatedAt", void 0);
exports.State = State = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
    })
], State);
exports.StateSchema = mongoose_1.SchemaFactory.createForClass(State);
//# sourceMappingURL=sate-entity.js.map