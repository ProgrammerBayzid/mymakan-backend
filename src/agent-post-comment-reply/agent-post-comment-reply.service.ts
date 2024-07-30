import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAgentPostCommentReplyDto } from './dto/create-agent-post-comment-reply.dto';
import { UpdateAgentPostCommentReplyDto } from './dto/update-agent-post-comment-reply.dto';
import { AgentPostComment, AgentPostCommentDocument } from 'src/agent-post-comment/entities/agent-post-comment.entity';
import { InjectModel } from '@nestjs/mongoose';
import { AgentPostCommentReply, AgentPostCommentReplyDocument } from './entities/agent-post-comment-reply.entity';
import { Model } from 'mongoose';

@Injectable()
export class AgentPostCommentReplyService {
  constructor(
    @InjectModel(AgentPostCommentReply.name) private agentPostCommentReplyModel: Model<AgentPostCommentReplyDocument>,
    @InjectModel(AgentPostComment.name) private readonly agentPostCommentModel: Model<AgentPostCommentDocument>,
  ) {}

  async create(userId: string, role: string, createDto: CreateAgentPostCommentReplyDto): Promise<AgentPostCommentReply> {
    const { agentPostCommentId, reply } = createDto;
    const data = {
      agentPostCommentId,
      reply,
      ...(role === 'buyer' ? { userId } : { agentId: userId }),
    };

    const createdCommentReply = new this.agentPostCommentReplyModel(data);
    const savedPostCommentReply = await createdCommentReply.save();

    // Update the associated AgentPostComment document with the new reply
    const replyId = savedPostCommentReply._id;
    await this.agentPostCommentModel.findByIdAndUpdate(
      agentPostCommentId,
      { $push: { reply: replyId } },
      { new: true, useFindAndModify: false }
    );

    return savedPostCommentReply;
  }

  async updateById(id: string, updateDto: UpdateAgentPostCommentReplyDto): Promise<AgentPostCommentReply> {
    const updatedPostCommentReply = await this.agentPostCommentReplyModel
      .findByIdAndUpdate(id, updateDto, { new: true, runValidators: true })
      .exec();

    if (!updatedPostCommentReply) {
      throw new NotFoundException(`Agent post comment reply with ID ${id} not found`);
    }

    return updatedPostCommentReply;
  }

  async deleteById(id: string): Promise<AgentPostCommentReply> {
    // Step 1: Find the reply to get the agentPostCommentId
    const replyToDelete = await this.agentPostCommentReplyModel.findById(id).exec();
    if (!replyToDelete) {
      throw new NotFoundException(`Agent post comment reply with ID ${id} not found`);
    }

    const { agentPostCommentId } = replyToDelete;

    // Step 2: Delete the reply
    const deletedReply = await this.agentPostCommentReplyModel.findByIdAndDelete(id).exec();
    if (!deletedReply) {
      throw new NotFoundException(`Agent post comment reply with ID ${id} could not be deleted`);
    }
    await this.agentPostCommentModel.findByIdAndUpdate(
      agentPostCommentId,
      { $pull: { reply: id } },
      { new: true, useFindAndModify: false }
    );

    return deletedReply;
  }
}
