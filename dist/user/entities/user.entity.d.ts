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
export type UserDocument = HydratedDocument<User>;
export declare class User {
    _id: string;
    fullName: string;
    role: string;
    country: string;
    state: string;
    image: string;
    coverImage: string;
    mobile: string;
    mobile_code: string;
    email: string;
    password: string;
    gender: string;
    bio: string;
    uniqueId: string;
    verified: boolean;
    reject: boolean;
    device: string;
    totalrating: number;
    avgrating: number;
    totalReview: number;
    totalPost: number;
    totalSponsoredPost: number;
    totalUrgentPost: number;
    credit: number;
    premium: Boolean;
    online: boolean;
    followingBuyerCount: number;
    followingAgentCount: number;
    followerBuyerCount: number;
    followerAgentCount: number;
    emailVerified: Boolean | false;
    verificationEmailSent: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export declare const UserSchema: mongoose.Schema<User, mongoose.Model<User, any, any, any, mongoose.Document<unknown, any, User> & User & Required<{
    _id: string;
}>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, User, mongoose.Document<unknown, {}, mongoose.FlatRecord<User>> & mongoose.FlatRecord<User> & Required<{
    _id: string;
}>>;
