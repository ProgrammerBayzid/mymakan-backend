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
import { PostLocation } from './post-location';
export type PostAgentDocument = PostAgent & Document;
export declare class PostAgent {
    _id: string;
    title: string;
    role: string;
    description: string;
    for: string;
    agentId: string;
    media: {
        _id: {
            type: String;
            required: true;
        };
        type: {
            type: String;
            required: true;
        };
        url: {
            type: String;
            required: true;
        };
    }[];
    tags: [];
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
export declare const PostAgentSchema: mongoose.Schema<PostAgent, mongoose.Model<PostAgent, any, any, any, mongoose.Document<unknown, any, PostAgent> & PostAgent & Required<{
    _id: string;
}>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, PostAgent, mongoose.Document<unknown, {}, mongoose.FlatRecord<PostAgent>> & mongoose.FlatRecord<PostAgent> & Required<{
    _id: string;
}>>;
