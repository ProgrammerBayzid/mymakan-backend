"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTwilioDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_twilio_dto_1 = require("./create-twilio.dto");
class UpdateTwilioDto extends (0, swagger_1.PartialType)(create_twilio_dto_1.CreateTwilioDto) {
}
exports.UpdateTwilioDto = UpdateTwilioDto;
//# sourceMappingURL=update-twilio.dto.js.map