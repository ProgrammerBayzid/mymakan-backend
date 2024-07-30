import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAllPostCommentReplyDto } from './dto/create-all-post-comment-reply.dto';
import { UpdateAllPostCommentReplyDto } from './dto/update-all-post-comment-reply.dto';
import { InjectModel } from '@nestjs/mongoose';
import { AllPostCommentReply, AllPostCommentReplyDocument } from './entities/all-post-comment-reply.entity';
import { AllPostComment, AllPostCommentDocument } from 'src/all-post-comment/entities/all-post-comment.entity';
import { Model } from 'mongoose';

@Injectable()
export class AllPostCommentReplyService {


  constructor(
    @InjectModel(AllPostCommentReply.name) private allPostCommentReplyModel: Model<AllPostCommentReplyDocument>,
    @InjectModel(AllPostComment.name) private readonly allPostCommentModel: Model<AllPostCommentDocument>,
  ) {}

  async create(userId: string, role: string, createDto: CreateAllPostCommentReplyDto): Promise<AllPostCommentReply> {
    const { postCommentId, reply } = createDto;
    const data = {
      postCommentId,
      reply,
      ...(role === 'buyer' ? { userId } : { agentId: userId }),
    };

    const createdCommentReply = new this.allPostCommentReplyModel(data);
    const savedPostCommentReply = await createdCommentReply.save();

    // Update the associated AgentPostComment document with the new reply
    const replyId = savedPostCommentReply._id;
    await this.allPostCommentModel.findByIdAndUpdate(
      postCommentId,
      { $push: { reply: replyId } },
      { new: true, useFindAndModify: false }
    );

    return savedPostCommentReply;
  }

  async updateById(id: string, updateDto: UpdateAllPostCommentReplyDto): Promise<AllPostCommentReply> {
    const updatedPostCommentReply = await this.allPostCommentReplyModel
      .findByIdAndUpdate(id, updateDto, { new: true, runValidators: true })
      .exec();

    if (!updatedPostCommentReply) {
      throw new NotFoundException(`Agent post comment reply with ID ${id} not found`);
    }

    return updatedPostCommentReply;
  }

  async deleteById(id: string): Promise<AllPostCommentReply> {
    // Step 1: Find the reply to get the agentPostCommentId
    const replyToDelete = await this.allPostCommentReplyModel.findById(id).exec();
    if (!replyToDelete) {
      throw new NotFoundException(`Agent post comment reply with ID ${id} not found`);
    }

    const { postCommentId } = replyToDelete;

    // Step 2: Delete the reply
    const deletedReply = await this.allPostCommentReplyModel.findByIdAndDelete(id).exec();
    if (!deletedReply) {
      throw new NotFoundException(`Agent post comment reply with ID ${id} could not be deleted`);
    }
    await this.allPostCommentModel.findByIdAndUpdate(
      postCommentId,
      { $pull: { reply: id } },
      { new: true, useFindAndModify: false }
    );

    return deletedReply;
  }
}
