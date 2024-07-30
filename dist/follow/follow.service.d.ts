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
import { AgentDocument } from 'src/agent/entities/agent.entity';
import mongoose, { Model } from 'mongoose';
import { UserDocument } from 'src/user/entities/user.entity';
import { BuyerFollowDocument } from './entities/buyer.follow.entity';
import { AgentFollowDocument } from './entities/agent.follow.entity';
import { FollowDocument } from './entities/follow.entity';
export declare class FollowService {
    private readonly agentModel;
    private readonly userModel;
    private readonly agentFollowModel;
    private readonly buyerFollowModel;
    private readonly followModel;
    constructor(agentModel: mongoose.Model<AgentDocument>, userModel: mongoose.Model<UserDocument>, agentFollowModel: Model<AgentFollowDocument>, buyerFollowModel: Model<BuyerFollowDocument>, followModel: Model<FollowDocument>);
    followUser(followingType: string, followingId: string, currentUserId: string, currentUserType: string): Promise<string>;
    unfollowUser(followingType: string, followingId: string, currentUserId: string, currentUserType: string): Promise<string>;
    myfollowingUser(currentUserId: string, currentUserType: string, page?: number, limit?: number, sortBy?: string, sortOrder?: 'asc' | 'desc', search?: string): Promise<any[]>;
    myfollowingAgent(currentUserId: string, currentUserType: string, page?: number, limit?: number, sortBy?: string, sortOrder?: 'asc' | 'desc', search?: string): Promise<any[]>;
    myfollowerUser(currentUserId: string, currentUserType: string, page?: number, limit?: number, sortBy?: string, sortOrder?: 'asc' | 'desc', search?: string): Promise<any[]>;
    myfollowerAgent(currentUserId: string, currentUserType: string, page?: number, limit?: number, sortBy?: string, sortOrder?: 'asc' | 'desc', search?: string): Promise<any[]>;
    followingExisting(role: string, id: string, followingId: string): Promise<boolean>;
}
