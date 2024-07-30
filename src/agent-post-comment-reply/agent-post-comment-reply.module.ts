import { Module } from '@nestjs/common';
import { AgentPostCommentReplyService } from './agent-post-comment-reply.service';
import { AgentPostCommentReplyController } from './agent-post-comment-reply.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AgentPostCommentSchema } from 'src/agent-post-comment/entities/agent-post-comment.entity';
import { AgentPostCommentReplySchema } from './entities/agent-post-comment-reply.entity';
import { AgentSchema } from 'src/agent/entities/agent.entity';
import { UserSchema } from 'src/user/entities/user.entity';
import { PostAgentSchema } from 'src/post-agent/entities/post-agent.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'PostAgent', schema: PostAgentSchema },
      { name: 'AgentPostComment', schema: AgentPostCommentSchema },
      { name: 'AgentPostCommentReply', schema: AgentPostCommentReplySchema },
      { name: 'Agent', schema: AgentSchema },
      { name: 'User', schema: UserSchema },
    ]),
  ],
  controllers: [AgentPostCommentReplyController],
  providers: [AgentPostCommentReplyService],
})
export class AgentPostCommentReplyModule {}
