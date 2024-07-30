import { Module } from '@nestjs/common';
import { AllPostCommentReplyService } from './all-post-comment-reply.service';
import { AllPostCommentReplyController } from './all-post-comment-reply.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AllPostSchema } from 'src/allposts/entities/allpost.entity';
import { AllPostCommentSchema } from 'src/all-post-comment/entities/all-post-comment.entity';
import { AllPostCommentReplySchema } from './entities/all-post-comment-reply.entity';
import { AgentSchema } from 'src/agent/entities/agent.entity';
import { UserSchema } from 'src/user/entities/user.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'AllPost', schema: AllPostSchema },
      { name: 'AllPostComment', schema: AllPostCommentSchema },
      { name: 'AllPostCommentReply', schema: AllPostCommentReplySchema },
      { name: 'Agent', schema: AgentSchema },
      { name: 'User', schema: UserSchema },
    ]),
  ],
  controllers: [AllPostCommentReplyController],
  providers: [AllPostCommentReplyService],
})
export class AllPostCommentReplyModule {}
