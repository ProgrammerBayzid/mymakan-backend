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
import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';
import { Agent, AgentDocument } from './entities/agent.entity';
import mongoose from 'mongoose';
import { AuthDocument } from 'src/auth/entities/auth.entity';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { AgentReview } from './entities/review.entity';
import { CreateAgentReviewDto } from './dto/create-review.dto';
import { UserDocument } from 'src/user/entities/user.entity';
import { QueryAgentDto } from './dto/agentQuery';
import { FollowDocument } from 'src/follow/entities/follow.entity';
export declare class AgentService {
    private readonly agentModel;
    private readonly userModel;
    private authModel;
    private agentReviewModel;
    private readonly followModel;
    private readonly config;
    private readonly jwtService;
    constructor(agentModel: mongoose.Model<AgentDocument>, userModel: mongoose.Model<UserDocument>, authModel: mongoose.Model<AuthDocument>, agentReviewModel: mongoose.Model<AgentReview>, followModel: mongoose.Model<FollowDocument>, config: ConfigService, jwtService: JwtService);
    agentCreate(createagentDto: CreateAgentDto): Promise<Agent>;
    agentCreateWithGoogle(createagentDto: CreateAgentDto): Promise<Agent>;
    private sanitizeAgent;
    private hashPassword;
    findOneAgentByEmailForEmailOrPasswordChange(email: string): Promise<Agent>;
    findOneAgentByEmail(email: string): Promise<Agent>;
    findAgentWithPasswordByEmail(email: string): Promise<Agent>;
    updateAgentPassword(id: string, password: string): Promise<Agent>;
    updateAgentVerificationEmailSentStatus(id: string, status: boolean): Promise<Agent>;
    findAllAgent(userId: string, role: string, queryOptions?: QueryAgentDto): Promise<Agent[]>;
    findMyProfile(id: string): Promise<Agent>;
    findById(id: string, userId: string, role: string): Promise<Agent>;
    updateById(agentID: string, updateAgent: UpdateAgentDto): Promise<Agent>;
    updateAgentEmailVerify(id: string): Promise<Agent>;
    deleteById(id: string): Promise<Agent>;
    adminPanelAgentDelete(id: string): Promise<Agent>;
    reviewCreate(userId: string, createAgentReviewDto: CreateAgentReviewDto): Promise<mongoose.Document<unknown, {}, AgentReview> & AgentReview & {
        _id: mongoose.Types.ObjectId;
    }>;
    findMyReview(id: string): Promise<AgentReview[]>;
}
