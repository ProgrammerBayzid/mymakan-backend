"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostAgentModule = void 0;
const common_1 = require("@nestjs/common");
const post_agent_service_1 = require("./post-agent.service");
const post_agent_controller_1 = require("./post-agent.controller");
const mongoose_1 = require("@nestjs/mongoose");
const post_agent_entity_1 = require("./entities/post-agent.entity");
const agent_post_comment_reply_entity_1 = require("../agent-post-comment-reply/entities/agent-post-comment-reply.entity");
const agent_post_comment_entity_1 = require("../agent-post-comment/entities/agent-post-comment.entity");
const agent_entity_1 = require("../agent/entities/agent.entity");
const user_entity_1 = require("../user/entities/user.entity");
let PostAgentModule = class PostAgentModule {
};
exports.PostAgentModule = PostAgentModule;
exports.PostAgentModule = PostAgentModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'PostAgent', schema: post_agent_entity_1.PostAgentSchema },
                { name: 'AgentPostComment', schema: agent_post_comment_entity_1.AgentPostCommentSchema },
                { name: 'AgentPostCommentReply', schema: agent_post_comment_reply_entity_1.AgentPostCommentReplySchema },
                { name: 'Agent', schema: agent_entity_1.AgentSchema },
                { name: 'User', schema: user_entity_1.UserSchema },
            ]),
        ],
        controllers: [post_agent_controller_1.PostAgentController],
        providers: [post_agent_service_1.PostAgentService],
    })
], PostAgentModule);
//# sourceMappingURL=post-agent.module.js.map