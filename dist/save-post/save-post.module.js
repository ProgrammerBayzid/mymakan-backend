"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavePostModule = void 0;
const common_1 = require("@nestjs/common");
const save_post_service_1 = require("./save-post.service");
const save_post_controller_1 = require("./save-post.controller");
const mongoose_1 = require("@nestjs/mongoose");
const agent_entity_1 = require("../agent/entities/agent.entity");
const save_post_entity_1 = require("./entities/save-post.entity");
const user_entity_1 = require("../user/entities/user.entity");
let SavePostModule = class SavePostModule {
};
exports.SavePostModule = SavePostModule;
exports.SavePostModule = SavePostModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'SavePost', schema: save_post_entity_1.SavePostSchema },
                { name: 'Agent', schema: agent_entity_1.AgentSchema },
                { name: 'User', schema: user_entity_1.UserSchema },
            ]),
        ],
        controllers: [save_post_controller_1.SavePostController],
        providers: [save_post_service_1.SavePostService],
    })
], SavePostModule);
//# sourceMappingURL=save-post.module.js.map