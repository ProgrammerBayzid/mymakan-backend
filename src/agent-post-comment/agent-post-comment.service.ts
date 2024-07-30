import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAgentPostCommentDto } from './dto/create-agent-post-comment.dto';
import { UpdateAgentPostCommentDto } from './dto/update-agent-post-comment.dto';
import { AgentPostComment, AgentPostCommentDocument } from './entities/agent-post-comment.entity';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PostAgent, PostAgentDocument } from 'src/post-agent/entities/post-agent.entity';

@Injectable()
export class AgentPostCommentService {


  constructor(
    @InjectModel(AgentPostComment.name)
    private readonly agentPostCommentModel: Model<AgentPostCommentDocument>,
    @InjectModel(PostAgent.name)
    private postAgentModel: mongoose.Model<PostAgentDocument>,
  ) {}

 async create(userId: string, role: string, createAgentPostCommentDto: CreateAgentPostCommentDto) {
    const { agentPostId } = createAgentPostCommentDto;
    console.log(userId,agentPostId, role);
    
    const commentData = {
      ...createAgentPostCommentDto,
      ...(role === "buyer" ? { userId } : { agentId: userId })
  };
    const createdComment = new this.agentPostCommentModel(commentData);
    const savedPost = await createdComment.save();
    const commentId = savedPost._id;
    await this.postAgentModel.findByIdAndUpdate(
      agentPostId,
      { $push: { comment: commentId } },
      { new: true, useFindAndModify: false }
    );
    return savedPost;
  }

  async updateById(id: string, updateAgentPostCommentDto: UpdateAgentPostCommentDto): Promise<AgentPostComment> {
    const updatedPostComment = await this.agentPostCommentModel.findByIdAndUpdate(id, updateAgentPostCommentDto, {
      new: true,
      runValidators: true,
    }).exec();

    if (!updatedPostComment) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    return updatedPostComment.toObject() as AgentPostComment;
  }

  // async deleteById(id: string): Promise<AgentPostComment> {
  //   try {
  //     return await this.agentPostCommentModel.findByIdAndDelete(id);
  //   } catch (error) {
  //     throw new NotFoundException('Error deleting Doctor');
  //   }
  // }

  async deleteById(id: string): Promise<AgentPostComment> {
    // Step 1: Find the reply to get the agentPostCommentId
    const commentToDelete = await this.agentPostCommentModel.findById(id).exec();
    if (!commentToDelete) {
      throw new NotFoundException(`Agent post comment reply with ID ${id} not found`);
    }

    const { agentPostId } = commentToDelete;

    // Step 2: Delete the reply
    const deletedComment = await this.agentPostCommentModel.findByIdAndDelete(id).exec();
    if (!deletedComment) {
      throw new NotFoundException(`Agent post comment reply with ID ${id} could not be deleted`);
    }
    await this.postAgentModel.findByIdAndUpdate(
      agentPostId,
      { $pull: { comment: id } },
      { new: true, useFindAndModify: false }
    );

    return deletedComment;
  }


}
