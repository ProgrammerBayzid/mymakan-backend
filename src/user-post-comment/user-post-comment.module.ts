import { Module } from '@nestjs/common';
import { UserPostCommentService } from './user-post-comment.service';
import { UserPostCommentController } from './user-post-comment.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PostUserSchema } from 'src/post-user/entities/post-user.entity';
import { UserPostCommentSchema } from './entities/user-post-comment.entity';
import { AgentSchema } from 'src/agent/entities/agent.entity';
import { UserSchema } from 'src/user/entities/user.entity';
import { UserPostCommentReplySchema } from 'src/user-post-comment-reply/entities/user-post-comment-reply.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'PostUser', schema: PostUserSchema },
      { name: 'UserPostComment', schema: UserPostCommentSchema },
      { name: 'UserPostCommentReply', schema: UserPostCommentReplySchema },
      { name: 'Agent', schema: AgentSchema },
      { name: 'User', schema: UserSchema },
    ]),
  ],
  controllers: [UserPostCommentController],
  providers: [UserPostCommentService],
})
export class UserPostCommentModule {}
