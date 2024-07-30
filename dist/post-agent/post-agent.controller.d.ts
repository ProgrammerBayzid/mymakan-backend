import { PostAgentService } from './post-agent.service';
import { CreatePostAgentDto } from './dto/create-post-agent.dto';
import { UpdatePostAgentDto } from './dto/update-post-agent.dto';
import { PostAgent } from './entities/post-agent.entity';
import { QueryAgentPostDto } from './dto/PostAgentQurey';
export declare class PostAgentController {
    private readonly postAgentService;
    constructor(postAgentService: PostAgentService);
    createAgentPost(createAgent: CreatePostAgentDto, userId?: string, role?: string): Promise<PostAgent>;
    findAll(queryOptions: QueryAgentPostDto): Promise<PostAgent[]>;
    findMyPost(userId: string, queryOptions: QueryAgentPostDto): Promise<PostAgent[]>;
    getGetBlog(id: string): Promise<PostAgent>;
    updatePost(id: string, updateAgentPostDto: UpdatePostAgentDto): Promise<PostAgent>;
    like(id: string, userId: string, role: string): Promise<PostAgent>;
    unlike(id: string, userId: string): Promise<PostAgent>;
    delete(id: string): Promise<PostAgent>;
}
