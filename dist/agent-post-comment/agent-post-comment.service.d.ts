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
import { CreateAgentPostCommentDto } from './dto/create-agent-post-comment.dto';
import { UpdateAgentPostCommentDto } from './dto/update-agent-post-comment.dto';
import { AgentPostComment, AgentPostCommentDocument } from './entities/agent-post-comment.entity';
import mongoose, { Model } from 'mongoose';
import { PostAgentDocument } from 'src/post-agent/entities/post-agent.entity';
export declare class AgentPostCommentService {
    private readonly agentPostCommentModel;
    private postAgentModel;
    constructor(agentPostCommentModel: Model<AgentPostCommentDocument>, postAgentModel: mongoose.Model<PostAgentDocument>);
    create(userId: string, role: string, createAgentPostCommentDto: CreateAgentPostCommentDto): Promise<mongoose.Document<unknown, {}, AgentPostCommentDocument> & AgentPostComment & mongoose.Document<unknown, any, any> & Required<{
        _id: string;
    }>>;
    updateById(id: string, updateAgentPostCommentDto: UpdateAgentPostCommentDto): Promise<AgentPostComment>;
    deleteById(id: string): Promise<AgentPostComment>;
}
