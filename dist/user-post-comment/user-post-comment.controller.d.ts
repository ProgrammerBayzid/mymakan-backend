import { UserPostCommentService } from './user-post-comment.service';
import { CreateUserPostCommentDto } from './dto/create-user-post-comment.dto';
import { UpdateUserPostCommentDto } from './dto/update-user-post-comment.dto';
import { UserPostComment } from './entities/user-post-comment.entity';
export declare class UserPostCommentController {
    private readonly userPostCommentService;
    constructor(userPostCommentService: UserPostCommentService);
    createDoctor(createUserPostCommentDto: CreateUserPostCommentDto, userId?: string, role?: string): Promise<UserPostComment>;
    updatePost(id: string, updateUserPostCommentDto: UpdateUserPostCommentDto): Promise<UserPostComment>;
    delete(id: string): Promise<UserPostComment>;
}
