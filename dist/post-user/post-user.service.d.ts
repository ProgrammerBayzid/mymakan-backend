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
import { CreatePostUserDto } from './dto/create-post-user.dto';
import { UpdatePostUserDto } from './dto/update-post-user.dto';
import mongoose from 'mongoose';
import { PostUser, PostUserDocument } from './entities/post-user.entity';
import { QueryUserPostDto } from './dto/query.dto';
import { UserDocument } from 'src/user/entities/user.entity';
import { AgentDocument } from 'src/agent/entities/agent.entity';
export declare class PostUserService {
    private postUserModel;
    private userModel;
    private agentModel;
    constructor(postUserModel: mongoose.Model<PostUserDocument>, userModel: mongoose.Model<UserDocument>, agentModel: mongoose.Model<AgentDocument>);
    createUserPost(userId: string, role: string, createUserPostDto: CreatePostUserDto): Promise<PostUser>;
    findAll(queryOptions?: QueryUserPostDto): Promise<PostUser[]>;
    findAllMatchingPost(queryOptions?: QueryUserPostDto): Promise<PostUser[]>;
    findMyUserPost(id: string, queryOptions?: QueryUserPostDto): Promise<PostUser[]>;
    findById(id: string): Promise<PostUser>;
    updateById(id: string, updateUserPostDto: UpdatePostUserDto): Promise<PostUser>;
    likeById(id: string, userId: string, role: string): Promise<PostUser>;
    unlikeById(id: string, userId: string): Promise<PostUser>;
    deleteById(id: string): Promise<PostUser>;
}
