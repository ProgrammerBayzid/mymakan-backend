import { Module } from '@nestjs/common';
import { UserPostCommentReplyService } from './user-post-comment-reply.service';
import { UserPostCommentReplyController } from './user-post-comment-reply.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PostUserSchema } from 'src/post-user/entities/post-user.entity';
import { UserPostCommentSchema } from 'src/user-post-comment/entities/user-post-comment.entity';
import { AgentSchema } from 'src/agent/entities/agent.entity';
import { UserSchema } from 'src/user/entities/user.entity';
import { UserPostCommentReplySchema } from './entities/user-post-comment-reply.entity';

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
  controllers: [UserPostCommentReplyController],
  providers: [UserPostCommentReplyService],
})
export class UserPostCommentReplyModule {}
