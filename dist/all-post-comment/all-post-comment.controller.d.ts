import { AllPostCommentService } from './all-post-comment.service';
import { CreateAllPostCommentDto } from './dto/create-all-post-comment.dto';
import { UpdateAllPostCommentDto } from './dto/update-all-post-comment.dto';
import { AllPostComment } from './entities/all-post-comment.entity';
export declare class AllPostCommentController {
    private readonly allPostCommentService;
    constructor(allPostCommentService: AllPostCommentService);
    createDoctor(createAllPostCommentDto: CreateAllPostCommentDto, userId?: string, role?: string): Promise<AllPostComment>;
    updatePost(id: string, updateAllPostCommentDto: UpdateAllPostCommentDto): Promise<AllPostComment>;
    delete(id: string): Promise<AllPostComment>;
    getAllPostComments(postId: string, page?: number, limit?: number, sortBy?: string, sortOrder?: 'asc' | 'desc'): Promise<AllPostComment[]>;
}
