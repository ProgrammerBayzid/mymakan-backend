import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateFollowDto } from './dto/create-follow.dto';
import { UpdateFollowDto } from './dto/update-follow.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Agent, AgentDocument } from 'src/agent/entities/agent.entity';
import mongoose, { Model, PipelineStage } from 'mongoose';
import { User, UserDocument } from 'src/user/entities/user.entity';
import { BuyerFollow, BuyerFollowDocument } from './entities/buyer.follow.entity';
import { AgentFollow, AgentFollowDocument } from './entities/agent.follow.entity';
import { Types } from 'mongoose'; // Ensure this import is present
import { Follow, FollowDocument } from './entities/follow.entity';

@Injectable()
export class FollowService {


  constructor(
    @InjectModel(Agent.name)
    private readonly agentModel: mongoose.Model<AgentDocument>,
    @InjectModel(User.name)
    private readonly userModel: mongoose.Model<UserDocument>,
    @InjectModel(AgentFollow.name) private readonly agentFollowModel: Model<AgentFollowDocument>,
    @InjectModel(BuyerFollow.name) private readonly buyerFollowModel: Model<BuyerFollowDocument>,
    @InjectModel(Follow.name) private readonly followModel: Model<FollowDocument>,
  ) {}

  
  async followUser(followingType: string, followingId: string, currentUserId: string, currentUserType: string): Promise<string> {
    if (currentUserId === followingId) {
      throw new ConflictException("You can't follow yourself");
    }

    let followingUser;

    if (followingType === 'buyer') {
      followingUser = await this.userModel.findById(followingId);
    } else if (followingType === 'agent') {
      followingUser = await this.agentModel.findById(followingId);
    } else {
      throw new NotFoundException('Invalid user type');
    }

    if (!followingUser) {
      throw new NotFoundException('User to follow not found');
    }

    const existingFollow = await this.followModel.findOne({
      followerId: currentUserId,
      followingId,
      followerType: currentUserType,
      followingType,
    });

    if (existingFollow) {
      throw new ConflictException('You are already following this user');
    }

    await this.followModel.create({
      followerType: currentUserType,
      followerId: currentUserId,
      followingType,
      followingId,
    });
    

    if(currentUserType === "agent"){
      const agent = await this.agentModel.findById(currentUserId);

      if(followingType === "agent"){

        const followIngAgent = await this.agentModel.findById(followingId);
        const total = followIngAgent.followerAgentCount  + 1;
        const total1 = agent.followingAgentCount  + 1;
     
    await this.agentModel.findByIdAndUpdate(
      followingId,
      {
        followerAgentCount: total,
      },
      { new: true }
    );

    await this.agentModel.findByIdAndUpdate(
      currentUserId,
      {
        followingAgentCount: total1,
      },
      { new: true }
    );

      }else{


        const followIngBuyer = await this.userModel.findById(followingId);
        const total = followIngBuyer.followerAgentCount  + 1;
        const total1 = agent.followingBuyerCount  + 1;
     
    await this.userModel.findByIdAndUpdate(
      followingId,
      {
        followerAgentCount: total,
      },
      { new: true }
    );

    await this.agentModel.findByIdAndUpdate(
      currentUserId,
      {
        followingBuyerCount: total1,
      },
      { new: true }
    );

      }

    }else{
      const buyer = await this.userModel.findById(currentUserId);
     if(followingType === "buyer"){

      const followIngUser = await this.userModel.findById(followingId);
      const total = followIngUser.followerBuyerCount  + 1;
      const total1 = buyer.followingBuyerCount  + 1;

      await this.userModel.findByIdAndUpdate(
        followingId,
        {
          followerBuyerCount: total,
        },
        { new: true }
      );
  
      await this.userModel.findByIdAndUpdate(
        currentUserId,
        {
          followingBuyerCount: total1,
        },
        { new: true }
      );

      }else{
        const followIngAgent = await this.agentModel.findById(followingId);
        const total = followIngAgent.followerBuyerCount  + 1;
        const total1 = buyer.followingAgentCount  + 1;
  
        await this.agentModel.findByIdAndUpdate(
          followingId,
          {
            followerBuyerCount: total,
          },
          { new: true }
        );
    
        await this.userModel.findByIdAndUpdate(
          currentUserId,
          {
            followingAgentCount: total1,
          },
          { new: true }
        );
      }
    }




    return 'Following successful';
  }

  async unfollowUser(followingType: string, followingId: string, currentUserId: string, currentUserType: string): Promise<string> {


    if (currentUserId === followingId) {
      throw new ConflictException("You can't unfollow yourself");
    }

    const existingFollow = await this.followModel.findOne({
      followerId: currentUserId,
      followingId,
      followerType: currentUserType,  // Adjust based on the type of the current user
      followingType,
    });

    if (!existingFollow) {
      throw new ConflictException('You are not following this user');
    }

    await this.followModel.deleteOne({
      followerId: currentUserId,
      followingId,
      followerType: currentUserType,  // Adjust based on the type of the current user
      followingType,
    });


    if(currentUserType === "agent"){
      const agent = await this.agentModel.findById(currentUserId);

      if(followingType === "agent"){

        const followIngAgent = await this.agentModel.findById(followingId);
        const total = followIngAgent.followerAgentCount  - 1;
        const total1 = agent.followingAgentCount  - 1;
     
    await this.agentModel.findByIdAndUpdate(
      followingId,
      {
        followerAgentCount: total,
      },
      { new: true }
    );

    await this.agentModel.findByIdAndUpdate(
      currentUserId,
      {
        followingAgentCount: total1,
      },
      { new: true }
    );

      }else{


        const followIngBuyer = await this.userModel.findById(followingId);
        const total = followIngBuyer.followerAgentCount  - 1;
        const total1 = agent.followingBuyerCount  - 1;
     
    await this.userModel.findByIdAndUpdate(
      followingId,
      {
        followerAgentCount: total,
      },
      { new: true }
    );

    await this.agentModel.findByIdAndUpdate(
      currentUserId,
      {
        followingBuyerCount: total1,
      },
      { new: true }
    );

      }

    }else{
      const buyer = await this.userModel.findById(currentUserId);
     if(followingType === "buyer"){

      const followIngUser = await this.userModel.findById(followingId);
      const total = followIngUser.followerBuyerCount  - 1;
      const total1 = buyer.followingBuyerCount  - 1;

      await this.userModel.findByIdAndUpdate(
        followingId,
        {
          followerBuyerCount: total,
        },
        { new: true }
      );
  
      await this.userModel.findByIdAndUpdate(
        currentUserId,
        {
          followingBuyerCount: total1,
        },
        { new: true }
      );

      }else{
        const followIngAgent = await this.agentModel.findById(followingId);
        const total = followIngAgent.followerBuyerCount  - 1;
        const total1 = buyer.followingAgentCount  - 1;
  
        await this.agentModel.findByIdAndUpdate(
          followingId,
          {
            followerBuyerCount: total,
          },
          { new: true }
        );
    
        await this.userModel.findByIdAndUpdate(
          currentUserId,
          {
            followingAgentCount: total1,
          },
          { new: true }
        );
      }
    }


    return 'UnFollowing successful';
  }



  async myfollowingUser(
    currentUserId: string,
    currentUserType: string,
    page: number = 1,
    limit: number = 10,
    sortBy: string = 'createdAt',
    sortOrder: 'asc' | 'desc' = 'desc',
    search?: string 
  ): Promise<any[]> {
    const objectId = new Types.ObjectId(currentUserId);
    const sortOptions: any = {};
    sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;
  
    const pipeline: PipelineStage[] = [
      {
        $match: {
          followerId: objectId,
          followerType: currentUserType,
          followingType: 'buyer',
        },
      },
      {
        $lookup: {
          from: 'users',
          localField: 'followingId',
          foreignField: '_id',
          as: 'followingBuyer',
        },
      },
      { $unwind: { path: '$followingBuyer', preserveNullAndEmptyArrays: true } },
      {
        $match: {
          'followingAgent.fullName': search ? { $regex: search, $options: 'i' } : { $exists: true },
        },
      },
      {
        $sort: sortOptions,
      },
    ];
  
    // Conditionally add pagination stages if search is empty
    if (!search) {
      pipeline.push(
        {
          $skip: (page - 1) * limit,
        },
        {
          $limit: limit,
        }
      );
    }
  
    const follows = await this.followModel.aggregate(pipeline).exec();
    return follows;
  }


  async myfollowingAgent(
    currentUserId: string,
    currentUserType: string,
    page: number = 1,
    limit: number = 10,
    sortBy: string = 'createdAt',
    sortOrder: 'asc' | 'desc' = 'desc',
    search?: string
  ): Promise<any[]> {
    const objectId = new Types.ObjectId(currentUserId);
    const sortOptions: any = {};
    sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;
  
    const pipeline: PipelineStage[] = [
      {
        $match: {
          followerId: objectId,
          followerType: currentUserType,
          followingType: 'agent',
        },
      },
      {
        $lookup: {
          from: 'agents',
          localField: 'followingId',
          foreignField: '_id',
          as: 'followingAgent',
        },
      },
      { $unwind: { path: '$followingAgent', preserveNullAndEmptyArrays: true } },
      {
        $match: {
          'followingAgent.fullName': search ? { $regex: search, $options: 'i' } : { $exists: true },
        },
      },
      {
        $sort: sortOptions,
      },
    ];
  
    // Conditionally add pagination stages if search is empty
    if (!search) {
      pipeline.push(
        {
          $skip: (page - 1) * limit,
        },
        {
          $limit: limit,
        }
      );
    }
  
    const follows = await this.followModel.aggregate(pipeline).exec();
    return follows;
  }


  async myfollowerUser(
    currentUserId: string,
    currentUserType: string,
    page: number = 1,
    limit: number = 10,
    sortBy: string = 'createdAt',
    sortOrder: 'asc' | 'desc' = 'desc',
    search?: string 
  ): Promise<any[]> {
    const objectId = new Types.ObjectId(currentUserId);
    const sortOptions: any = {};
    sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;
  
    const pipeline: PipelineStage[] = [
      {
        $match: {
          followingId: objectId,
          followingType: currentUserType,
          followerType: 'buyer',
        },
      },
      {
        $lookup: {
          from: 'users',
          localField: 'followerId',
          foreignField: '_id',
          as: 'followerBuyer',
        },
      },
      { $unwind: { path: '$followerBuyer', preserveNullAndEmptyArrays: true } },
      {
        $match: {
          'followingAgent.fullName': search ? { $regex: search, $options: 'i' } : { $exists: true },
        },
      },
      {
        $sort: sortOptions,
      },
    ];
  
    // Conditionally add pagination stages if search is empty
    if (!search) {
      pipeline.push(
        {
          $skip: (page - 1) * limit,
        },
        {
          $limit: limit,
        }
      );
    }
  
    const follows = await this.followModel.aggregate(pipeline).exec();
    return follows;
  }


  async myfollowerAgent(
    currentUserId: string,
    currentUserType: string,
    page: number = 1,
    limit: number = 10,
    sortBy: string = 'createdAt',
    sortOrder: 'asc' | 'desc' = 'desc',
    search?: string 
  ): Promise<any[]> {
    const objectId = new Types.ObjectId(currentUserId);
    const sortOptions: any = {};
    sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;
  
    const pipeline: PipelineStage[] = [
      {
        $match: {
          followingId: objectId,
          followingType: currentUserType,
          followerType: 'agent',
        },
      },
      {
        $lookup: {
          from: 'agents',
          localField: 'followerId',
          foreignField: '_id',
          as: 'followerAgent',
        },
      },
      { $unwind: { path: '$followerAgent', preserveNullAndEmptyArrays: true } },
      {
        $match: {
          'followingAgent.fullName': search ? { $regex: search, $options: 'i' } : { $exists: true },
        },
      },
      {
        $sort: sortOptions,
      },
    ];
  
    // Conditionally add pagination stages if search is empty
    if (!search) {
      pipeline.push(
        {
          $skip: (page - 1) * limit,
        },
        {
          $limit: limit,
        }
      );
    }
  
    const follows = await this.followModel.aggregate(pipeline).exec();
    return follows;
  }




  async followingExisting(role: string, id: string, followingId: string): Promise<boolean> {
   
   
    const existingFollowing = await this.followModel.findOne({
      followerId: id,
      followerType: role,
      followingId: followingId,
    });

    return !!existingFollowing;
  }
        

  
}
