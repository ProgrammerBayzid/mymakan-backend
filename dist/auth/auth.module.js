"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const auth_controller_1 = require("./auth.controller");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const auth_entity_1 = require("./entities/auth.entity");
const user_entity_1 = require("../user/entities/user.entity");
const user_module_1 = require("../user/user.module");
const access_token_strategy_1 = require("./strategies/access-token.strategy");
const refresh_token_strategy_1 = require("./strategies/refresh-token.strategy");
const email_service_1 = require("../email/email.service");
const email_module_1 = require("../email/email.module");
const agent_entity_1 = require("../agent/entities/agent.entity");
const agent_module_1 = require("../agent/agent.module");
const agent_follow_entity_1 = require("../follow/entities/agent.follow.entity");
const buyer_follow_entity_1 = require("../follow/entities/buyer.follow.entity");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({
                secret: '8739c4aaddb29d8b017c55c25249266effbe144a',
                global: true,
            }),
            mongoose_1.MongooseModule.forFeature([
                { name: auth_entity_1.Auth.name, schema: auth_entity_1.AuthSchema },
                { name: user_entity_1.User.name, schema: user_entity_1.UserSchema },
                { name: agent_entity_1.Agent.name, schema: agent_entity_1.AgentSchema },
                { name: agent_follow_entity_1.AgentFollow.name, schema: agent_follow_entity_1.AgentFollowSchema },
                { name: buyer_follow_entity_1.BuyerFollow.name, schema: buyer_follow_entity_1.BuyerFollowSchema },
            ]),
            user_module_1.UserModule,
            agent_module_1.AgentModule,
            email_module_1.EmailModule,
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [
            auth_service_1.AuthService,
            access_token_strategy_1.AtStrategy,
            refresh_token_strategy_1.RtStrategy,
            {
                provide: 'MAILER',
                useClass: email_service_1.EmailService,
            },
        ],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map