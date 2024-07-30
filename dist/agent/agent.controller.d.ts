import { AgentService } from './agent.service';
import { UpdateAgentDto } from './dto/update-agent.dto';
import { Agent } from './entities/agent.entity';
import { CreateAgentReviewDto } from './dto/create-review.dto';
import { AgentReview } from './entities/review.entity';
import { QueryAgentDto } from './dto/agentQuery';
export declare class AgentController {
    private readonly agentService;
    constructor(agentService: AgentService);
    findMyProfile(userId?: string): Promise<Agent>;
    findAllAgent(userId?: string, role?: string, queryOptions?: QueryAgentDto): Promise<Agent[]>;
    getAgent(id: string, userId?: string, role?: string): Promise<Agent>;
    updateDoctor(userId: string, updateAgent: UpdateAgentDto): Promise<Agent>;
    deleteUser(userId: string): Promise<Agent>;
    deleteAgentByAdminPanel(id: string): Promise<Agent>;
    createDoctor(createAgentReviewDto: CreateAgentReviewDto, userId?: string): Promise<AgentReview>;
    findMyReview(userId?: string): Promise<AgentReview[]>;
}
