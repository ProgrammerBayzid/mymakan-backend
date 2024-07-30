"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllpostsModule = void 0;
const common_1 = require("@nestjs/common");
const allposts_service_1 = require("./allposts.service");
const allposts_controller_1 = require("./allposts.controller");
const mongoose_1 = require("@nestjs/mongoose");
const agent_entity_1 = require("../agent/entities/agent.entity");
const user_entity_1 = require("../user/entities/user.entity");
const allpost_entity_1 = require("./entities/allpost.entity");
const save_post_entity_1 = require("../save-post/entities/save-post.entity");
let AllpostsModule = class AllpostsModule {
};
exports.AllpostsModule = AllpostsModule;
exports.AllpostsModule = AllpostsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'AllPost', schema: allpost_entity_1.AllPostSchema },
                { name: 'Agent', schema: agent_entity_1.AgentSchema },
                { name: 'User', schema: user_entity_1.UserSchema },
                { name: 'SavePost', schema: save_post_entity_1.SavePostSchema },
            ]),
        ],
        controllers: [allposts_controller_1.AllpostsController],
        providers: [allposts_service_1.AllpostsService],
    })
], AllpostsModule);
//# sourceMappingURL=allposts.module.js.map