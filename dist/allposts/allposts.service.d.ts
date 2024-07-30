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
import { Agent } from 'src/agent/entities/agent.entity';
import { UserDocument } from 'src/user/entities/user.entity';
import { AllPost, AllPostDocument } from './entities/allpost.entity';
import { CreateAllPostDto } from './dto/create-allpost.dto';
import { QueryAllPostDto } from './dto/AllPostQuery';
import { UpdateAllPostDto } from './dto/update-allpost.dto';
import mongoose from 'mongoose';
import { SavePostDocument } from 'src/save-post/entities/save-post.entity';
export declare class AllpostsService {
    private allPostModel;
    private agentModel;
    private userModel;
    private readonly savePostModel;
    constructor(allPostModel: mongoose.Model<AllPostDocument>, agentModel: mongoose.Model<Agent>, userModel: mongoose.Model<UserDocument>, savePostModel: mongoose.Model<SavePostDocument>);
    create(userId: string, role: string, createPostDto: CreateAllPostDto): Promise<AllPost>;
    findAll(myId: string, myRole: string, queryOptions?: QueryAllPostDto): Promise<AllPost[]>;
    findById(id: string, myId: string, myRole: string): Promise<AllPost>;
    updateById(id: string, updateAllPostDto: UpdateAllPostDto): Promise<AllPost>;
    likeById(id: string, userId: string, role: string): Promise<AllPost>;
    unlikeById(id: string, userId: string): Promise<AllPost>;
    deleteById(id: string, userId: string, role: string): Promise<AllPost>;
    findMyAllPost(id: string, role: string): Promise<{
        totalPosts: number;
        sponsoredPosts: number;
        urgentPosts: number;
        normalPosts: number;
    }>;
}
