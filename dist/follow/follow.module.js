"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FollowModule = void 0;
const common_1 = require("@nestjs/common");
const follow_service_1 = require("./follow.service");
const follow_controller_1 = require("./follow.controller");
const mongoose_1 = require("@nestjs/mongoose");
const agent_follow_entity_1 = require("./entities/agent.follow.entity");
const buyer_follow_entity_1 = require("./entities/buyer.follow.entity");
const agent_entity_1 = require("../agent/entities/agent.entity");
const user_entity_1 = require("../user/entities/user.entity");
const follow_entity_1 = require("./entities/follow.entity");
let FollowModule = class FollowModule {
};
exports.FollowModule = FollowModule;
exports.FollowModule = FollowModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'AgentFollow', schema: agent_follow_entity_1.AgentFollowSchema },
                { name: 'BuyerFollow', schema: buyer_follow_entity_1.BuyerFollowSchema },
                { name: 'Follow', schema: follow_entity_1.FollowSchema },
                { name: 'Agent', schema: agent_entity_1.AgentSchema },
                { name: 'User', schema: user_entity_1.UserSchema },
            ]),
        ],
        controllers: [follow_controller_1.FollowController],
        providers: [follow_service_1.FollowService],
    })
], FollowModule);
//# sourceMappingURL=follow.module.js.map