import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserPostCommentDto } from './dto/create-user-post-comment.dto';
import { UpdateUserPostCommentDto } from './dto/update-user-post-comment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { UserPostComment, UserPostCommentDocument } from './entities/user-post-comment.entity';
import mongoose, { Model } from 'mongoose';
import { PostUser, PostUserDocument } from 'src/post-user/entities/post-user.entity';

@Injectable()
export class UserPostCommentService {

  constructor(
    @InjectModel(UserPostComment.name)
    private readonly userPostCommentModel: Model<UserPostCommentDocument>,
    @InjectModel(PostUser.name)
    private postUserModel: mongoose.Model<PostUserDocument>,
  ) {}


  async create(userId: string, role: string, createUserPostCommentDto: CreateUserPostCommentDto) {
    const { userPostId } = createUserPostCommentDto;
    const commentData = {
      ...createUserPostCommentDto,
      ...(role === "buyer" ? { userId } : { agentId: userId })
  };
    const createdComment = new this.userPostCommentModel(commentData);
    const savedPost = await createdComment.save();
    const commentId = savedPost._id;
    await this.postUserModel.findByIdAndUpdate(
      userPostId,
      { $push: { comment: commentId } },
      { new: true, useFindAndModify: false }
    );
    return savedPost;
  }

  async updateById(id: string, updateUserPostCommentDto: UpdateUserPostCommentDto): Promise<UserPostComment> {
    const updatedPostComment = await this.userPostCommentModel.findByIdAndUpdate(id, updateUserPostCommentDto, {
      new: true,
      runValidators: true,
    }).exec();

    if (!updatedPostComment) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    return updatedPostComment.toObject() as UserPostComment;
  }

  

  async deleteById(id: string): Promise<UserPostComment> {
    // Step 1: Find the reply to get the agentPostCommentId
    const commentToDelete = await this.userPostCommentModel.findById(id).exec();
    if (!commentToDelete) {
      throw new NotFoundException(`Agent post comment reply with ID ${id} not found`);
    }

    const { userPostId } = commentToDelete;

    // Step 2: Delete the reply
    const deletedComment = await this.userPostCommentModel.findByIdAndDelete(id).exec();
    if (!deletedComment) {
      throw new NotFoundException(`Agent post comment reply with ID ${id} could not be deleted`);
    }
    await this.postUserModel.findByIdAndUpdate(
      userPostId,
      { $pull: { comment: id } },
      { new: true, useFindAndModify: false }
    );

    return deletedComment;
  }

}
