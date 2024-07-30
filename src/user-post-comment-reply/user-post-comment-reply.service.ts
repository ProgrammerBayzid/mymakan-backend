import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserPostCommentReplyDto } from './dto/create-user-post-comment-reply.dto';
import { UpdateUserPostCommentReplyDto } from './dto/update-user-post-comment-reply.dto';
import { InjectModel } from '@nestjs/mongoose';
import { UserPostCommentReply, UserPostCommentReplyDocument } from './entities/user-post-comment-reply.entity';
import { Model } from 'mongoose';
import { UserPostComment, UserPostCommentDocument } from 'src/user-post-comment/entities/user-post-comment.entity';

@Injectable()
export class UserPostCommentReplyService {


  constructor(
    @InjectModel(UserPostCommentReply.name) private userPostCommentReplyModel: Model<UserPostCommentReplyDocument>,
    @InjectModel(UserPostComment.name) private readonly userPostCommentModel: Model<UserPostCommentDocument>,
  ) {}


  async create(userId: string, role: string, createDto: CreateUserPostCommentReplyDto): Promise<UserPostCommentReply> {
    const { userPostCommentId, reply } = createDto;
    const data = {
      userPostCommentId,
      reply,
      ...(role === 'buyer' ? { userId } : { agentId: userId }),
    };

    const createdCommentReply = new this.userPostCommentReplyModel(data);
    const savedPostCommentReply = await createdCommentReply.save();

    // Update the associated AgentPostComment document with the new reply
    const replyId = savedPostCommentReply._id;
    await this.userPostCommentModel.findByIdAndUpdate(
      userPostCommentId,
      { $push: { reply: replyId } },
      { new: true, useFindAndModify: false }
    );

    return savedPostCommentReply;
  }

  async updateById(id: string, updateDto: UpdateUserPostCommentReplyDto): Promise<UserPostCommentReply> {
    const updatedPostCommentReply = await this.userPostCommentReplyModel
      .findByIdAndUpdate(id, updateDto, { new: true, runValidators: true })
      .exec();

    if (!updatedPostCommentReply) {
      throw new NotFoundException(`Agent post comment reply with ID ${id} not found`);
    }

    return updatedPostCommentReply;
  }

  async deleteById(id: string): Promise<UserPostCommentReply> {
    // Step 1: Find the reply to get the agentPostCommentId
    const replyToDelete = await this.userPostCommentReplyModel.findById(id).exec();
    if (!replyToDelete) {
      throw new NotFoundException(`Agent post comment reply with ID ${id} not found`);
    }

    const { userPostCommentId } = replyToDelete;

    // Step 2: Delete the reply
    const deletedReply = await this.userPostCommentReplyModel.findByIdAndDelete(id).exec();
    if (!deletedReply) {
      throw new NotFoundException(`Agent post comment reply with ID ${id} could not be deleted`);
    }
    await this.userPostCommentModel.findByIdAndUpdate(
      userPostCommentId,
      { $pull: { reply: id } },
      { new: true, useFindAndModify: false }
    );

    return deletedReply;
  }
}
