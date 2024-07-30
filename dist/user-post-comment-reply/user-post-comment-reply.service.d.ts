/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { CreateUserPostCommentReplyDto } from './dto/create-user-post-comment-reply.dto';
import { UpdateUserPostCommentReplyDto } from './dto/update-user-post-comment-reply.dto';
import { UserPostCommentReply, UserPostCommentReplyDocument } from './entities/user-post-comment-reply.entity';
import { Model } from 'mongoose';
import { UserPostCommentDocument } from 'src/user-post-comment/entities/user-post-comment.entity';
export declare class UserPostCommentReplyService {
    private userPostCommentReplyModel;
    private readonly userPostCommentModel;
    constructor(userPostCommentReplyModel: Model<UserPostCommentReplyDocument>, userPostCommentModel: Model<UserPostCommentDocument>);
    create(userId: string, role: string, createDto: CreateUserPostCommentReplyDto): Promise<UserPostCommentReply>;
    updateById(id: string, updateDto: UpdateUserPostCommentReplyDto): Promise<UserPostCommentReply>;
    deleteById(id: string): Promise<UserPostCommentReply>;
}
