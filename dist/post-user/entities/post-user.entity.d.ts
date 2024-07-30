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
import { PostLocation } from 'src/post-agent/entities/post-location';
export type PostUserDocument = PostUser & Document;
export declare class PostUser {
    _id: string;
    title: string;
    role: string;
    description: string;
    for: string;
    userId: string;
    image: string[];
    video: string[];
    doc: string[];
    tags: string[];
    location: PostLocation;
    booked: boolean;
    postType: string;
    type: string;
    propertyCategory: string;
    propertyType: string;
    parking: string;
    sqft: string;
    price: string;
    sellType: String[];
    sell: boolean;
    comment: string[];
    likeCount: number;
    likedBy: {
        _id: string;
        name: string;
        image: string;
        role: string;
    }[];
    createdAt: Date;
    updatedAt: Date;
}
export declare const PostUserSchema: mongoose.Schema<PostUser, mongoose.Model<PostUser, any, any, any, mongoose.Document<unknown, any, PostUser> & PostUser & Required<{
    _id: string;
}>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, PostUser, mongoose.Document<unknown, {}, mongoose.FlatRecord<PostUser>> & mongoose.FlatRecord<PostUser> & Required<{
    _id: string;
}>>;
