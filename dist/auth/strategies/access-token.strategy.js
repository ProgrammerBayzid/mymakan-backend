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
exports.AtStrategy = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const passport_1 = require("@nestjs/passport");
const mongoose_2 = require("mongoose");
const passport_jwt_1 = require("passport-jwt");
const auth_entity_1 = require("../entities/auth.entity");
let AtStrategy = class AtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'jwt') {
    constructor(config, authModel) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: config.get('AT_SECRET_KEY'),
        });
        this.config = config;
        this.authModel = authModel;
    }
    async validate(payload) {
        console.log('payload', payload);
        const userAuth = await this.authModel.findOne({
            userId: payload['userId'],
        });
        if (!userAuth || !userAuth.refreshToken) {
            throw new common_1.UnauthorizedException();
        }
        return {
            ...payload,
        };
    }
};
exports.AtStrategy = AtStrategy;
exports.AtStrategy = AtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, mongoose_1.InjectModel)(auth_entity_1.Auth.name)),
    __metadata("design:paramtypes", [config_1.ConfigService,
        mongoose_2.Model])
], AtStrategy);
//# sourceMappingURL=access-token.strategy.js.map