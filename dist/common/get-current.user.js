"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCurrentUser = void 0;
const common_1 = require("@nestjs/common");
exports.GetCurrentUser = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    console.log('request.user', request.user);
    if (!data)
        return request.user;
    return request.user ? request.user[data] : null;
});
//# sourceMappingURL=get-current.user.js.map