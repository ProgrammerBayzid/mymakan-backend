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
import mongoose, { HydratedDocument } from 'mongoose';
export type AgentDocument = HydratedDocument<Agent>;
export declare class Agent {
    _id: string;
    country: string;
    state: string;
    fullName: string;
    role: string;
    companyName: string;
    image: string;
    coverImage: string;
    mobile: string;
    mobile_code: string;
    email: string;
    password: string;
    gender: string;
    bio: string;
    identity: [];
    language: [];
    uniqueId: string;
    totalrating: number;
    avgrating: number;
    totalReview: number;
    credit: number;
    premium: Boolean;
    followingBuyerCount: number;
    followingAgentCount: number;
    followerBuyerCount: number;
    followerAgentCount: number;
    totalPost: number;
    totalSponsoredPost: number;
    totalUrgentPost: number;
    verified: boolean;
    reject: boolean;
    online: boolean;
    device: string;
    emailVerified: Boolean | false;
    verificationEmailSent: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export declare const AgentSchema: mongoose.Schema<Agent, mongoose.Model<Agent, any, any, any, mongoose.Document<unknown, any, Agent> & Agent & Required<{
    _id: string;
}>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Agent, mongoose.Document<unknown, {}, mongoose.FlatRecord<Agent>> & mongoose.FlatRecord<Agent> & Required<{
    _id: string;
}>>;
