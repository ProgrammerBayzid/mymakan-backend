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
export type FollowDocument = HydratedDocument<Follow>;
export declare class Follow {
    populate(arg0: {
        path: "followerId" | "followingId";
        model: mongoose.Model<mongoose.Document<unknown, {}, import("../../user/entities/user.entity").User> & import("../../user/entities/user.entity").User & Required<{
            _id: string;
        }>, {}, {}, {}, mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, import("../../user/entities/user.entity").User> & import("../../user/entities/user.entity").User & Required<{
            _id: string;
        }>> & mongoose.Document<unknown, {}, import("../../user/entities/user.entity").User> & import("../../user/entities/user.entity").User & Required<{
            _id: string;
        }>, any> | mongoose.Model<mongoose.Document<unknown, {}, import("../../agent/entities/agent.entity").Agent> & import("../../agent/entities/agent.entity").Agent & Required<{
            _id: string;
        }>, {}, {}, {}, mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, import("../../agent/entities/agent.entity").Agent> & import("../../agent/entities/agent.entity").Agent & Required<{
            _id: string;
        }>> & mongoose.Document<unknown, {}, import("../../agent/entities/agent.entity").Agent> & import("../../agent/entities/agent.entity").Agent & Required<{
            _id: string;
        }>, any>;
        select: string;
    }): void;
    _id: string;
    followerType: string;
    followerId: string;
    followingType: string;
    followingId: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare const FollowSchema: mongoose.Schema<Follow, mongoose.Model<Follow, any, any, any, mongoose.Document<unknown, any, Follow> & Follow & Required<{
    _id: string;
}>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Follow, mongoose.Document<unknown, {}, mongoose.FlatRecord<Follow>> & mongoose.FlatRecord<Follow> & Required<{
    _id: string;
}>>;
