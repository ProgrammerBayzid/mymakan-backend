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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwilioController = void 0;
const common_1 = require("@nestjs/common");
const twilio_service_1 = require("./twilio.service");
const set_top_dto_1 = require("./dto/set.top.dto");
const public_decorator_1 = require("../common/public.decorator");
let TwilioController = class TwilioController {
    constructor(twilioService) {
        this.twilioService = twilioService;
    }
    async sendMessage(sendTwilioDto) {
        return this.twilioService.sendMessage(sendTwilioDto);
    }
};
exports.TwilioController = TwilioController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('send'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [set_top_dto_1.SendTwilioDto]),
    __metadata("design:returntype", Promise)
], TwilioController.prototype, "sendMessage", null);
exports.TwilioController = TwilioController = __decorate([
    (0, common_1.Controller)('twilio'),
    __metadata("design:paramtypes", [twilio_service_1.TwilioService])
], TwilioController);
//# sourceMappingURL=twilio.controller.js.map