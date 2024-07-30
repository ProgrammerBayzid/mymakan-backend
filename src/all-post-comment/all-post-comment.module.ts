import { Module } from '@nestjs/common';
import { AllPostCommentService } from './all-post-comment.service';
import { AllPostCommentController } from './all-post-comment.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AllPostSchema } from 'src/allposts/entities/allpost.entity';
import { AllPostCommentSchema } from './entities/all-post-comment.entity';
import { AgentSchema } from 'src/agent/entities/agent.entity';
import { UserSchema } from 'src/user/entities/user.entity';
import { AllPostCommentReplySchema } from 'src/all-post-comment-reply/entities/all-post-comment-reply.entity';

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
  controllers: [AllPostCommentController],
  providers: [AllPostCommentService],
})
export class AllPostCommentModule {}
