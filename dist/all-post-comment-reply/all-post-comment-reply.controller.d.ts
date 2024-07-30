import { AllPostCommentReplyService } from './all-post-comment-reply.service';
import { CreateAllPostCommentReplyDto } from './dto/create-all-post-comment-reply.dto';
import { UpdateAllPostCommentReplyDto } from './dto/update-all-post-comment-reply.dto';
import { AllPostCommentReply } from './entities/all-post-comment-reply.entity';
export declare class AllPostCommentReplyController {
    private readonly allPostCommentReplyService;
    constructor(allPostCommentReplyService: AllPostCommentReplyService);
    create(createDto: CreateAllPostCommentReplyDto, userId?: string, role?: string): Promise<AllPostCommentReply>;
    update(id: string, updateDto: UpdateAllPostCommentReplyDto): Promise<AllPostCommentReply>;
    delete(id: string): Promise<AllPostCommentReply>;
}
