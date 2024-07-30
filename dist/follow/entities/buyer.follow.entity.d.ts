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
import mongoose, { HydratedDocument } from "mongoose";
export type BuyerFollowDocument = HydratedDocument<BuyerFollow>;
export declare class BuyerFollow {
    _id: string;
    userId: string;
    role: string;
    followingUserCount: number;
    followingUser: string[];
    followerUserCount: number;
    followerUser: string[];
    followIngAgentCount: number;
    followingAgent: string[];
    followerAgentCount: number;
    followerAgent: string[];
    createdAt: Date;
    updatedAt: Date;
}
export declare const BuyerFollowSchema: mongoose.Schema<BuyerFollow, mongoose.Model<BuyerFollow, any, any, any, mongoose.Document<unknown, any, BuyerFollow> & BuyerFollow & Required<{
    _id: string;
}>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, BuyerFollow, mongoose.Document<unknown, {}, mongoose.FlatRecord<BuyerFollow>> & mongoose.FlatRecord<BuyerFollow> & Required<{
    _id: string;
}>>;
