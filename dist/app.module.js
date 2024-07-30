"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const user_module_1 = require("./user/user.module");
const agent_module_1 = require("./agent/agent.module");
const core_1 = require("@nestjs/core");
const access_token_guard_1 = require("./common/guards/access-token.guard");
const company_module_1 = require("./company/company.module");
const country_module_1 = require("./country/country.module");
const twilio_module_1 = require("./twilio/twilio.module");
const file_upload_module_1 = require("./file-upload/file-upload.module");
const agent_post_comment_module_1 = require("./agent-post-comment/agent-post-comment.module");
const agent_post_comment_reply_module_1 = require("./agent-post-comment-reply/agent-post-comment-reply.module");
const post_agent_module_1 = require("./post-agent/post-agent.module");
const post_user_module_1 = require("./post-user/post-user.module");
const user_post_comment_module_1 = require("./user-post-comment/user-post-comment.module");
const user_post_comment_reply_module_1 = require("./user-post-comment-reply/user-post-comment-reply.module");
const save_post_module_1 = require("./save-post/save-post.module");
const post_field_data_module_1 = require("./post-field-data/post-field-data.module");
const allposts_module_1 = require("./allposts/allposts.module");
const all_post_comment_module_1 = require("./all-post-comment/all-post-comment.module");
const all_post_comment_reply_module_1 = require("./all-post-comment-reply/all-post-comment-reply.module");
const follow_module_1 = require("./follow/follow.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            mongoose_1.MongooseModule.forRoot("mongodb+srv://myMakan:xg4EHPIweFePwxwQ@cluster0.j7rvpzy.mongodb.net/?retryWrites=true&w=majority"),
            user_module_1.UserModule,
            agent_module_1.AgentModule,
            company_module_1.CompanyModule,
            country_module_1.CountryModule,
            twilio_module_1.TwilioModule,
            file_upload_module_1.FileUploadModule,
            agent_post_comment_module_1.AgentPostCommentModule,
            agent_post_comment_reply_module_1.AgentPostCommentReplyModule,
            post_agent_module_1.PostAgentModule,
            post_user_module_1.PostUserModule,
            user_post_comment_module_1.UserPostCommentModule,
            user_post_comment_reply_module_1.UserPostCommentReplyModule,
            save_post_module_1.SavePostModule,
            post_field_data_module_1.PostFieldDataModule,
            allposts_module_1.AllpostsModule,
            all_post_comment_module_1.AllPostCommentModule,
            all_post_comment_reply_module_1.AllPostCommentReplyModule,
            follow_module_1.FollowModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: access_token_guard_1.AtGuard,
            },
            app_service_1.AppService
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map