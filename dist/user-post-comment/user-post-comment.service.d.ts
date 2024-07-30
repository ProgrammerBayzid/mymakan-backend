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
import { CreateUserPostCommentDto } from './dto/create-user-post-comment.dto';
import { UpdateUserPostCommentDto } from './dto/update-user-post-comment.dto';
import { UserPostComment, UserPostCommentDocument } from './entities/user-post-comment.entity';
import mongoose, { Model } from 'mongoose';
import { PostUserDocument } from 'src/post-user/entities/post-user.entity';
export declare class UserPostCommentService {
    private readonly userPostCommentModel;
    private postUserModel;
    constructor(userPostCommentModel: Model<UserPostCommentDocument>, postUserModel: mongoose.Model<PostUserDocument>);
    create(userId: string, role: string, createUserPostCommentDto: CreateUserPostCommentDto): Promise<mongoose.Document<unknown, {}, UserPostCommentDocument> & UserPostComment & mongoose.Document<unknown, any, any> & Required<{
        _id: string;
    }>>;
    updateById(id: string, updateUserPostCommentDto: UpdateUserPostCommentDto): Promise<UserPostComment>;
    deleteById(id: string): Promise<UserPostComment>;
}
