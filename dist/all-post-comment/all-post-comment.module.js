"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllPostCommentModule = void 0;
const common_1 = require("@nestjs/common");
const all_post_comment_service_1 = require("./all-post-comment.service");
const all_post_comment_controller_1 = require("./all-post-comment.controller");
const mongoose_1 = require("@nestjs/mongoose");
const allpost_entity_1 = require("../allposts/entities/allpost.entity");
const all_post_comment_entity_1 = require("./entities/all-post-comment.entity");
const agent_entity_1 = require("../agent/entities/agent.entity");
const user_entity_1 = require("../user/entities/user.entity");
const all_post_comment_reply_entity_1 = require("../all-post-comment-reply/entities/all-post-comment-reply.entity");
let AllPostCommentModule = class AllPostCommentModule {
};
exports.AllPostCommentModule = AllPostCommentModule;
exports.AllPostCommentModule = AllPostCommentModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'AllPost', schema: allpost_entity_1.AllPostSchema },
                { name: 'AllPostComment', schema: all_post_comment_entity_1.AllPostCommentSchema },
                { name: 'AllPostCommentReply', schema: all_post_comment_reply_entity_1.AllPostCommentReplySchema },
                { name: 'Agent', schema: agent_entity_1.AgentSchema },
                { name: 'User', schema: user_entity_1.UserSchema },
            ]),
        ],
        controllers: [all_post_comment_controller_1.AllPostCommentController],
        providers: [all_post_comment_service_1.AllPostCommentService],
    })
], AllPostCommentModule);
//# sourceMappingURL=all-post-comment.module.js.map