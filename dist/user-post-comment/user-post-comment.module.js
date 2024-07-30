"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPostCommentModule = void 0;
const common_1 = require("@nestjs/common");
const user_post_comment_service_1 = require("./user-post-comment.service");
const user_post_comment_controller_1 = require("./user-post-comment.controller");
const mongoose_1 = require("@nestjs/mongoose");
const post_user_entity_1 = require("../post-user/entities/post-user.entity");
const user_post_comment_entity_1 = require("./entities/user-post-comment.entity");
const agent_entity_1 = require("../agent/entities/agent.entity");
const user_entity_1 = require("../user/entities/user.entity");
const user_post_comment_reply_entity_1 = require("../user-post-comment-reply/entities/user-post-comment-reply.entity");
let UserPostCommentModule = class UserPostCommentModule {
};
exports.UserPostCommentModule = UserPostCommentModule;
exports.UserPostCommentModule = UserPostCommentModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'PostUser', schema: post_user_entity_1.PostUserSchema },
                { name: 'UserPostComment', schema: user_post_comment_entity_1.UserPostCommentSchema },
                { name: 'UserPostCommentReply', schema: user_post_comment_reply_entity_1.UserPostCommentReplySchema },
                { name: 'Agent', schema: agent_entity_1.AgentSchema },
                { name: 'User', schema: user_entity_1.UserSchema },
            ]),
        ],
        controllers: [user_post_comment_controller_1.UserPostCommentController],
        providers: [user_post_comment_service_1.UserPostCommentService],
    })
], UserPostCommentModule);
//# sourceMappingURL=user-post-comment.module.js.map