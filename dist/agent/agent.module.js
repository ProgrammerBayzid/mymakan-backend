"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentModule = void 0;
const common_1 = require("@nestjs/common");
const agent_service_1 = require("./agent.service");
const agent_controller_1 = require("./agent.controller");
const mongoose_1 = require("@nestjs/mongoose");
const agent_entity_1 = require("./entities/agent.entity");
const auth_entity_1 = require("../auth/entities/auth.entity");
const jwt_1 = require("@nestjs/jwt");
const review_entity_1 = require("./entities/review.entity");
const user_entity_1 = require("../user/entities/user.entity");
const follow_entity_1 = require("../follow/entities/follow.entity");
let AgentModule = class AgentModule {
};
exports.AgentModule = AgentModule;
exports.AgentModule = AgentModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'Agent', schema: agent_entity_1.AgentSchema },
                { name: 'User', schema: user_entity_1.UserSchema },
                { name: 'AgentReview', schema: review_entity_1.AgentReviewSchema },
                { name: 'Auth', schema: auth_entity_1.AuthSchema },
                { name: 'Follow', schema: follow_entity_1.FollowSchema },
            ]),
        ],
        controllers: [agent_controller_1.AgentController],
        providers: [agent_service_1.AgentService, jwt_1.JwtService],
        exports: [agent_service_1.AgentService],
    })
], AgentModule);
//# sourceMappingURL=agent.module.js.map