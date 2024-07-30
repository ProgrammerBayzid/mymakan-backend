import { AllpostsService } from './allposts.service';
import { CreateAllPostDto } from './dto/create-allpost.dto';
import { AllPost } from './entities/allpost.entity';
import { QueryAllPostDto } from './dto/AllPostQuery';
import { UpdateAllPostDto } from './dto/update-allpost.dto';
export declare class AllpostsController {
    private readonly allpostsService;
    constructor(allpostsService: AllpostsService);
    createAgentPost(createAgent: CreateAllPostDto, userId?: string, role?: string): Promise<AllPost>;
    findAll(myId?: string, myRole?: string, queryOptions?: QueryAllPostDto): Promise<AllPost[]>;
    getGetBlog(id: string, myId?: string, myRole?: string): Promise<AllPost>;
    updatePost(id: string, updateAgentPostDto: UpdateAllPostDto): Promise<AllPost>;
    like(id: string, userId: string, role: string): Promise<AllPost>;
    unlike(id: string, userId: string): Promise<AllPost>;
    delete(id: string, userId?: string, role?: string): Promise<AllPost>;
    findMyPost(userId: string, role: string): Promise<{
        totalPosts: number;
        sponsoredPosts: number;
        urgentPosts: number;
        normalPosts: number;
    }>;
}
