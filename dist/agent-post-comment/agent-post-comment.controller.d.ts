import { AgentPostCommentService } from './agent-post-comment.service';
import { CreateAgentPostCommentDto } from './dto/create-agent-post-comment.dto';
import { UpdateAgentPostCommentDto } from './dto/update-agent-post-comment.dto';
import { AgentPostComment } from './entities/agent-post-comment.entity';
export declare class AgentPostCommentController {
    private readonly agentPostCommentService;
    constructor(agentPostCommentService: AgentPostCommentService);
    createDoctor(createAgentPostCommentDto: CreateAgentPostCommentDto, userId?: string, role?: string): Promise<AgentPostComment>;
    updatePost(id: string, updateAgentPostCommentDto: UpdateAgentPostCommentDto): Promise<AgentPostComment>;
    delete(id: string): Promise<AgentPostComment>;
}
