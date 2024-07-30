import { ConfigurableModuleBuilder, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AgentModule } from './agent/agent.module';
import { APP_GUARD } from '@nestjs/core';
import { AtGuard } from './common/guards/access-token.guard';
import { CompanyModule } from './company/company.module';
import { CountryModule } from './country/country.module';
import { FileUploadModule } from './file-upload/file-upload.module';
import { AgentPostCommentModule } from './agent-post-comment/agent-post-comment.module';
import { AgentPostCommentReplyModule } from './agent-post-comment-reply/agent-post-comment-reply.module';
import { PostAgentModule } from './post-agent/post-agent.module';
import { PostUserModule } from './post-user/post-user.module';
import { UserPostCommentModule } from './user-post-comment/user-post-comment.module';
import { UserPostCommentReplyModule } from './user-post-comment-reply/user-post-comment-reply.module';
import { SavePostModule } from './save-post/save-post.module';
import { PostFieldDataModule } from './post-field-data/post-field-data.module';
import { AllpostsModule } from './allposts/allposts.module';
import { AllPostCommentModule } from './all-post-comment/all-post-comment.module';
import { AllPostCommentReplyModule } from './all-post-comment-reply/all-post-comment-reply.module';
import { FollowModule } from './follow/follow.module';
@Module({
  imports: [AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(
     "mongodb+srv://myMakan:xg4EHPIweFePwxwQ@cluster0.j7rvpzy.mongodb.net/?retryWrites=true&w=majority"
    ),
    UserModule,
    AgentModule,
    CompanyModule,
    CountryModule,
    FileUploadModule,
    AgentPostCommentModule,
    AgentPostCommentReplyModule,
    PostAgentModule,
    PostUserModule,
    UserPostCommentModule,
    UserPostCommentReplyModule,
    SavePostModule,
    PostFieldDataModule,
    AllpostsModule,
    AllPostCommentModule,
    AllPostCommentReplyModule,
    FollowModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AtGuard,
    },
    AppService],
})
export class AppModule {}
