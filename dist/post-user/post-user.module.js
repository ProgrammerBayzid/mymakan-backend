"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUserModule = void 0;
const common_1 = require("@nestjs/common");
const post_user_service_1 = require("./post-user.service");
const post_user_controller_1 = require("./post-user.controller");
const agent_entity_1 = require("../agent/entities/agent.entity");
const user_entity_1 = require("../user/entities/user.entity");
const review_entity_1 = require("../agent/entities/review.entity");
const auth_entity_1 = require("../auth/entities/auth.entity");
const mongoose_1 = require("@nestjs/mongoose");
const post_user_entity_1 = require("./entities/post-user.entity");
let PostUserModule = class PostUserModule {
};
exports.PostUserModule = PostUserModule;
exports.PostUserModule = PostUserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'PostUser', schema: post_user_entity_1.PostUserSchema },
                { name: 'Agent', schema: agent_entity_1.AgentSchema },
                { name: 'User', schema: user_entity_1.UserSchema },
                { name: 'AgentReview', schema: review_entity_1.AgentReviewSchema },
                { name: 'Auth', schema: auth_entity_1.AuthSchema },
            ]),
        ],
        controllers: [post_user_controller_1.PostUserController],
        providers: [post_user_service_1.PostUserService],
    })
], PostUserModule);
//# sourceMappingURL=post-user.module.js.map