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
import { CreateAllPostCommentReplyDto } from './dto/create-all-post-comment-reply.dto';
import { UpdateAllPostCommentReplyDto } from './dto/update-all-post-comment-reply.dto';
import { AllPostCommentReply, AllPostCommentReplyDocument } from './entities/all-post-comment-reply.entity';
import { AllPostCommentDocument } from 'src/all-post-comment/entities/all-post-comment.entity';
import { Model } from 'mongoose';
export declare class AllPostCommentReplyService {
    private allPostCommentReplyModel;
    private readonly allPostCommentModel;
    constructor(allPostCommentReplyModel: Model<AllPostCommentReplyDocument>, allPostCommentModel: Model<AllPostCommentDocument>);
    create(userId: string, role: string, createDto: CreateAllPostCommentReplyDto): Promise<AllPostCommentReply>;
    updateById(id: string, updateDto: UpdateAllPostCommentReplyDto): Promise<AllPostCommentReply>;
    deleteById(id: string): Promise<AllPostCommentReply>;
}
