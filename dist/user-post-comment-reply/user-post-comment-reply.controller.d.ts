import { UserPostCommentReplyService } from './user-post-comment-reply.service';
import { CreateUserPostCommentReplyDto } from './dto/create-user-post-comment-reply.dto';
import { UpdateUserPostCommentReplyDto } from './dto/update-user-post-comment-reply.dto';
import { UserPostCommentReply } from './entities/user-post-comment-reply.entity';
export declare class UserPostCommentReplyController {
    private readonly userPostCommentReplyService;
    constructor(userPostCommentReplyService: UserPostCommentReplyService);
    create(createDto: CreateUserPostCommentReplyDto, userId?: string, role?: string): Promise<UserPostCommentReply>;
    update(id: string, updateDto: UpdateUserPostCommentReplyDto): Promise<UserPostCommentReply>;
    delete(id: string): Promise<UserPostCommentReply>;
}
