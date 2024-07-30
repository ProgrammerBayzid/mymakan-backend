import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAllPostCommentDto } from './dto/create-all-post-comment.dto';
import { UpdateAllPostCommentDto } from './dto/update-all-post-comment.dto';
import { AllPostComment, AllPostCommentDocument } from './entities/all-post-comment.entity';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { AllPost, AllPostDocument } from 'src/allposts/entities/allpost.entity';

@Injectable()
export class AllPostCommentService {



  constructor(
    @InjectModel(AllPostComment.name)
    private  allPostCommentModel: Model<AllPostCommentDocument>,
    @InjectModel(AllPost.name)
    private allPostModel: mongoose.Model<AllPostDocument>,
  ) {}




  async create(userId: string, role: string, createPostCommentDto: CreateAllPostCommentDto) {
    const { postId } = createPostCommentDto;
    
    const commentData = {
      ...createPostCommentDto,
      ...(role === "buyer" ? { userId } : { agentId: userId }),
      commentBy: role
  };
    const createdComment = new this.allPostCommentModel(commentData);
    const savedPost = await createdComment.save();
    return savedPost;
  }

  async updateById(id: string, updatePostCommentDto: UpdateAllPostCommentDto): Promise<AllPostComment> {
    const updatedPostComment = await this.allPostCommentModel.findByIdAndUpdate(id, updatePostCommentDto, {
      new: true,
      runValidators: true,
    }).exec();

    if (!updatedPostComment) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    return updatedPostComment.toObject() as AllPostComment;
  }

 
  async deleteById(id: string): Promise<AllPostComment> {
    // Step 1: Find the reply to get the agentPostCommentId
    const commentToDelete = await this.allPostCommentModel.findById(id).exec();
    if (!commentToDelete) {
      throw new NotFoundException(`Agent post comment reply with ID ${id} not found`);
    }

    const { postId } = commentToDelete;

    // Step 2: Delete the reply
    const deletedComment = await this.allPostCommentModel.findByIdAndDelete(id).exec();
    if (!deletedComment) {
      throw new NotFoundException(`Agent post comment reply with ID ${id} could not be deleted`);
    }

    return deletedComment;
  }





  async findAllPostComments(
    postId: string, 
    page: number = 1, 
    limit: number = 100, 
    sortBy?: string, 
    sortOrder?: 'asc' | 'desc'
  ): Promise<AllPostComment[]> {
    try {
      const objectId = new mongoose.Types.ObjectId(postId);
      let query = this.allPostCommentModel.find({ postId: objectId }).populate('userId').populate('agentId').populate('reply');  
      if (limit !== 0) {
        const skip = (page - 1) * limit;
        query = query.skip(skip).limit(limit);
      }
  
      if (sortBy && sortOrder) {
        const sortOptions: any = {};
        sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;
        query = query.sort(sortOptions);
      }
  
      return await query.exec();
    } catch (error) {
      console.error('Error in findAllPostComments:', error);
      throw error;
    }
  }
  
}
