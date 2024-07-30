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
import { CreateAgentPostCommentReplyDto } from './dto/create-agent-post-comment-reply.dto';
import { UpdateAgentPostCommentReplyDto } from './dto/update-agent-post-comment-reply.dto';
import { AgentPostCommentDocument } from 'src/agent-post-comment/entities/agent-post-comment.entity';
import { AgentPostCommentReply, AgentPostCommentReplyDocument } from './entities/agent-post-comment-reply.entity';
import { Model } from 'mongoose';
export declare class AgentPostCommentReplyService {
    private agentPostCommentReplyModel;
    private readonly agentPostCommentModel;
    constructor(agentPostCommentReplyModel: Model<AgentPostCommentReplyDocument>, agentPostCommentModel: Model<AgentPostCommentDocument>);
    create(userId: string, role: string, createDto: CreateAgentPostCommentReplyDto): Promise<AgentPostCommentReply>;
    updateById(id: string, updateDto: UpdateAgentPostCommentReplyDto): Promise<AgentPostCommentReply>;
    deleteById(id: string): Promise<AgentPostCommentReply>;
}
