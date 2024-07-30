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
import mongoose, { Document } from 'mongoose';
export type AllPostCommentReplyDocument = AllPostCommentReply & Document;
export declare class AllPostCommentReply {
    _id: string;
    userId: string;
    agentId: string;
    postCommentId: string;
    reply: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare const AllPostCommentReplySchema: mongoose.Schema<AllPostCommentReply, mongoose.Model<AllPostCommentReply, any, any, any, mongoose.Document<unknown, any, AllPostCommentReply> & AllPostCommentReply & Required<{
    _id: string;
}>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, AllPostCommentReply, mongoose.Document<unknown, {}, mongoose.FlatRecord<AllPostCommentReply>> & mongoose.FlatRecord<AllPostCommentReply> & Required<{
    _id: string;
}>>;
