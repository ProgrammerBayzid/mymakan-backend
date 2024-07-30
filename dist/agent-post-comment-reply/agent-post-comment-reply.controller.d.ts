import { AgentPostCommentReplyService } from './agent-post-comment-reply.service';
import { CreateAgentPostCommentReplyDto } from './dto/create-agent-post-comment-reply.dto';
import { UpdateAgentPostCommentReplyDto } from './dto/update-agent-post-comment-reply.dto';
import { AgentPostCommentReply } from './entities/agent-post-comment-reply.entity';
export declare class AgentPostCommentReplyController {
    private readonly agentPostCommentReplyService;
    constructor(agentPostCommentReplyService: AgentPostCommentReplyService);
    create(createDto: CreateAgentPostCommentReplyDto, userId?: string, role?: string): Promise<AgentPostCommentReply>;
    update(id: string, updateDto: UpdateAgentPostCommentReplyDto): Promise<AgentPostCommentReply>;
    delete(id: string): Promise<AgentPostCommentReply>;
}
