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
import { CreateAllPostCommentDto } from './dto/create-all-post-comment.dto';
import { UpdateAllPostCommentDto } from './dto/update-all-post-comment.dto';
import { AllPostComment, AllPostCommentDocument } from './entities/all-post-comment.entity';
import mongoose, { Model } from 'mongoose';
import { AllPostDocument } from 'src/allposts/entities/allpost.entity';
export declare class AllPostCommentService {
    private allPostCommentModel;
    private allPostModel;
    constructor(allPostCommentModel: Model<AllPostCommentDocument>, allPostModel: mongoose.Model<AllPostDocument>);
    create(userId: string, role: string, createPostCommentDto: CreateAllPostCommentDto): Promise<mongoose.Document<unknown, {}, AllPostCommentDocument> & AllPostComment & mongoose.Document<unknown, any, any> & Required<{
        _id: string;
    }>>;
    updateById(id: string, updatePostCommentDto: UpdateAllPostCommentDto): Promise<AllPostComment>;
    deleteById(id: string): Promise<AllPostComment>;
    findAllPostComments(postId: string, page?: number, limit?: number, sortBy?: string, sortOrder?: 'asc' | 'desc'): Promise<AllPostComment[]>;
}
