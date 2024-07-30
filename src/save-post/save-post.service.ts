import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateSavePostDto } from './dto/create-save-post.dto';
import { UpdateSavePostDto } from './dto/update-save-post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { SavePost, SavePostDocument } from './entities/save-post.entity';
import mongoose, { Types } from 'mongoose';

@Injectable()
export class SavePostService {

  constructor(
    @InjectModel(SavePost.name)
    private readonly savePostModel: mongoose.Model<SavePostDocument>
  ) {}


  
  async savePostById(role: string, id: string, userId: string, saveby: string): Promise<string> {
    console.log(`role: ${role}, id: ${id}, userId: ${userId}, saveby: ${saveby}`);
    
    let savePostData: any = {
      saveBy: saveby
    };
  
    if (saveby === "buyer") {
      savePostData.userId = userId;
      savePostData.savePostId = id;
    } else {
      savePostData.agentId = userId;
      savePostData.savePostId = id;
    }
  
    console.log('savePostData:', savePostData);
  
    const savePost = new this.savePostModel(savePostData);
    await savePost.save();
    return "Post saved successfully";
  }
  
 

  async findMySavePost(
    id: string,
    role: string,
    page?: number ,
    limit?: number ,
    sortBy?: string ,
    sortOrder?: string ,
    postType?: string
  ): Promise<SavePost[]> {
    try {
      const objectId = new Types.ObjectId(id);
      let matchStage: any = {};
  
      // Role-based query
      if (role === "buyer") {
        matchStage.userId = objectId;
      } else {
        matchStage.agentId = objectId;
      }
  
      // Log the constructed match stage to debug
      console.log('Constructed Match Stage:', matchStage);
  
      const skip = (page - 1) * limit;
  
      const sortOptions: any = {};
      sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;
  
      // Aggregation pipeline
      const aggregationPipeline = [
        { $match: matchStage },
        { $sort: sortOptions },
        { $skip: skip },
        { $limit: Number(limit)  },
        {
          $lookup: {
            from: 'users',
            localField: 'userId',
            foreignField: '_id',
            as: 'userId',
          },
        },
        { $unwind: { path: '$userId', preserveNullAndEmptyArrays: true } },
        {
          $lookup: {
            from: 'agents',
            localField: 'agentId',
            foreignField: '_id',
            as: 'agentId',
          },
        },
        { $unwind: { path: '$agentId', preserveNullAndEmptyArrays: true } },
        {
          $lookup: {
            from: 'allposts',
            localField: 'savePostId',
            foreignField: '_id',
            as: 'savePostId',
          },
        },
        { $unwind: { path: '$savePostId', preserveNullAndEmptyArrays: true } },
        {
          $lookup: {
            from: 'agents',
            localField: 'savePostId.agentId',
            foreignField: '_id',
            as: 'savePostId.agentId',
          },
        },
        { $unwind: { path: '$savePostId.agentId', preserveNullAndEmptyArrays: true } },
        {
          $lookup: {
              from: 'users',
              localField: 'savePostId.userId',
              foreignField: '_id',
              as: 'savePostId.userId',
          },
      },
      { $unwind: { path: '$savePostId.userId', preserveNullAndEmptyArrays: true } },
              ];
  
      // Add the postType match stage if postType is provided
      if (postType) {
        aggregationPipeline.push({
          $match: { 'savePostId.postType': postType }
        });
      }
  
      // Log the aggregation pipeline for debugging  
      const results = await this.savePostModel.aggregate(aggregationPipeline).exec();
      return results;
    } catch (error) {
      console.error('Error in findMySavePost:', error);
      throw error;
    }
    
  }


  async deleteById(id: string): Promise<SavePost> {
    try {
      console.log();
      
      return await this.savePostModel.findByIdAndDelete(id);
    } catch (error) {
      throw new NotFoundException('Error deleting Doctor');
    }
  }

  async savePostExisting(role: string, id: string, savePostId: string): Promise<boolean> {
    let existingSavePost;
  
    if (role === "buyer") {
      existingSavePost = await this.savePostModel.findOne({
        userId: id,
        saveBy: role,
        savePostId: savePostId,
      });
    } else if (role === "agent") {
      existingSavePost = await this.savePostModel.findOne({
        agentId: id,
        saveBy: role,
        savePostId: savePostId,
      });
    } else {
      throw new BadRequestException('Invalid role specified');
    }
  
    // Return true if the save post entry exists, false otherwise
    return !!existingSavePost;
  }

  async deletePostExisting(role: string, id: string, savePostId: string): Promise<boolean> {
    let deleteResult;
  
    if (role === "buyer") {
      deleteResult = await this.savePostModel.deleteOne({
        userId: id,
        saveBy: role,
        savePostId: savePostId,
      });
    } else if (role === "agent") {
      deleteResult = await this.savePostModel.deleteOne({
        agentId: id,
        saveBy: role,
        savePostId: savePostId,
      });
    } else {
      throw new BadRequestException('Invalid role specified');
    }
  
    // Return true if the delete operation affected any documents, false otherwise
    return deleteResult.deletedCount > 0;
  }
  
  
}
