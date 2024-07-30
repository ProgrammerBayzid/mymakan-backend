import { Module } from '@nestjs/common';
import { AgentPostCommentService } from './agent-post-comment.service';
import { AgentPostCommentController } from './agent-post-comment.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AgentSchema } from 'src/agent/entities/agent.entity';
import { UserSchema } from 'src/user/entities/user.entity';
import { AgentPostCommentSchema } from './entities/agent-post-comment.entity';
import { PostAgentSchema } from 'src/post-agent/entities/post-agent.entity';
import { AllPostCommentReplySchema } from 'src/all-post-comment-reply/entities/all-post-comment-reply.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'PostAgent', schema: PostAgentSchema },
      { name: 'AgentPostComment', schema: AgentPostCommentSchema },
      { name: 'AllPostCommentReply', schema: AllPostCommentReplySchema },
      { name: 'Agent', schema: AgentSchema },
      { name: 'User', schema: UserSchema },
    ]),
  ],
  controllers: [AgentPostCommentController],
  providers: [AgentPostCommentService],
})
export class AgentPostCommentModule {}
