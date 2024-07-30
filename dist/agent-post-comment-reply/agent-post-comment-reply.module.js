"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentPostCommentReplyModule = void 0;
const common_1 = require("@nestjs/common");
const agent_post_comment_reply_service_1 = require("./agent-post-comment-reply.service");
const agent_post_comment_reply_controller_1 = require("./agent-post-comment-reply.controller");
const mongoose_1 = require("@nestjs/mongoose");
const agent_post_comment_entity_1 = require("../agent-post-comment/entities/agent-post-comment.entity");
const agent_post_comment_reply_entity_1 = require("./entities/agent-post-comment-reply.entity");
const agent_entity_1 = require("../agent/entities/agent.entity");
const user_entity_1 = require("../user/entities/user.entity");
const post_agent_entity_1 = require("../post-agent/entities/post-agent.entity");
let AgentPostCommentReplyModule = class AgentPostCommentReplyModule {
};
exports.AgentPostCommentReplyModule = AgentPostCommentReplyModule;
exports.AgentPostCommentReplyModule = AgentPostCommentReplyModule = __decorate([
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
        controllers: [agent_post_comment_reply_controller_1.AgentPostCommentReplyController],
        providers: [agent_post_comment_reply_service_1.AgentPostCommentReplyService],
    })
], AgentPostCommentReplyModule);
//# sourceMappingURL=agent-post-comment-reply.module.js.map