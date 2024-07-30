"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentPostCommentModule = void 0;
const common_1 = require("@nestjs/common");
const agent_post_comment_service_1 = require("./agent-post-comment.service");
const agent_post_comment_controller_1 = require("./agent-post-comment.controller");
const mongoose_1 = require("@nestjs/mongoose");
const agent_entity_1 = require("../agent/entities/agent.entity");
const user_entity_1 = require("../user/entities/user.entity");
const agent_post_comment_entity_1 = require("./entities/agent-post-comment.entity");
const post_agent_entity_1 = require("../post-agent/entities/post-agent.entity");
const all_post_comment_reply_entity_1 = require("../all-post-comment-reply/entities/all-post-comment-reply.entity");
let AgentPostCommentModule = class AgentPostCommentModule {
};
exports.AgentPostCommentModule = AgentPostCommentModule;
exports.AgentPostCommentModule = AgentPostCommentModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'PostAgent', schema: post_agent_entity_1.PostAgentSchema },
                { name: 'AgentPostComment', schema: agent_post_comment_entity_1.AgentPostCommentSchema },
                { name: 'AllPostCommentReply', schema: all_post_comment_reply_entity_1.AllPostCommentReplySchema },
                { name: 'Agent', schema: agent_entity_1.AgentSchema },
                { name: 'User', schema: user_entity_1.UserSchema },
            ]),
        ],
        controllers: [agent_post_comment_controller_1.AgentPostCommentController],
        providers: [agent_post_comment_service_1.AgentPostCommentService],
    })
], AgentPostCommentModule);
//# sourceMappingURL=agent-post-comment.module.js.map