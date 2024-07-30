import { Module } from '@nestjs/common';
import { PostAgentService } from './post-agent.service';
import { PostAgentController } from './post-agent.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PostAgentSchema } from './entities/post-agent.entity';
import { AgentPostCommentReplySchema } from 'src/agent-post-comment-reply/entities/agent-post-comment-reply.entity';
import { AgentPostCommentSchema } from 'src/agent-post-comment/entities/agent-post-comment.entity';
import { AgentSchema } from 'src/agent/entities/agent.entity';
import { UserSchema } from 'src/user/entities/user.entity';

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
  controllers: [PostAgentController],
  providers: [PostAgentService],
})
export class PostAgentModule {}
