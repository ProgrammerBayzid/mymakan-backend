import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Agent, AgentDocument } from './entities/agent.entity';
import mongoose from 'mongoose';
import { Auth, AuthDocument } from 'src/auth/entities/auth.entity';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AgentReview } from './entities/review.entity';
import { CreateAgentReviewDto } from './dto/create-review.dto';
import { User, UserDocument } from 'src/user/entities/user.entity';
import { QueryAgentDto } from './dto/agentQuery';
import { isValidObjectId } from 'mongoose';
import { ObjectId } from 'mongodb';
import { Follow, FollowDocument } from 'src/follow/entities/follow.entity';

@Injectable()
export class AgentService {
  constructor(
    @InjectModel(Agent.name)
    private readonly agentModel: mongoose.Model<AgentDocument>,
    @InjectModel(User.name)
    private readonly userModel: mongoose.Model<UserDocument>,
    @InjectModel(Auth.name)
    private authModel: mongoose.Model<AuthDocument>,
    @InjectModel(AgentReview.name)
    private agentReviewModel: mongoose.Model<AgentReview>,
    @InjectModel(Follow.name) private readonly followModel: mongoose.Model<FollowDocument>,
    private readonly config: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  async agentCreate(createagentDto: CreateAgentDto): Promise<Agent> {
    const user = await this.agentModel.findOne({
      email: createagentDto.email,
    });
    if (user) {
      throw new ForbiddenException('Agent already exists');
    }

    const createdAgent = await this.agentModel.create(createagentDto);

    createdAgent.password = await this.hashPassword(createdAgent.password);

    await createdAgent.save();

    return this.sanitizeAgent(createdAgent);
  }

  
  async agentCreateWithGoogle(createagentDto: CreateAgentDto): Promise<Agent> {
    const user = await this.agentModel.findOne({
      email: createagentDto.email,
    });
    if (user) {
      throw new ForbiddenException('Agent already exists');
    }

    const createdAgent = await this.agentModel.create(createagentDto);

    await createdAgent.save();

    return this.sanitizeAgent(createdAgent);
  }


  private sanitizeAgent(agent: AgentDocument): Agent {
    if (!agent) {
      throw new ForbiddenException('agent not found');
    }

    const sanitized = agent.toObject();
    delete sanitized.password;
    delete sanitized.verificationEmailSent;
    // delete sanitized.verificationCode;

    return sanitized;
  }


  private async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  }

  async findOneAgentByEmailForEmailOrPasswordChange(email: string): Promise<Agent> {
    const agent = await this.agentModel.findOne({ email });
    return agent;
  }

  async findOneAgentByEmail(email: string): Promise<Agent> {
    const agent = await this.agentModel.findOne({ email });
    return this.sanitizeAgent(agent);

  }

  async findAgentWithPasswordByEmail(email: string): Promise<Agent> {
    const user = this.agentModel.findOne({ email });
    return user;
  }

  async updateAgentPassword(id: string, password: string): Promise<Agent> {
    const agent = await this.agentModel.findById(id);

    // hash password
    const hashedPassword = await this.hashPassword(password);

    agent.password = hashedPassword;
    await agent.save();

    return this.sanitizeAgent(agent);
  }

  async updateAgentVerificationEmailSentStatus(
    id: string,
    status: boolean,
  ): Promise<Agent> {
    const agent = await this.agentModel.findById(id);

    agent.verificationEmailSent = status;
    await agent.save();

    return this.sanitizeAgent(agent);
  }



  
  // agent crud api 

  //  async findAllAgent(queryOptions?: QueryAgentDto): Promise<Agent[]> {
  //   try {
  //     const { page = 1, limit = 100,  state, country, companyName, fullName,totalrating,avgrating, totalReview, sortBy, sortOrder } = queryOptions;

  //     let query = this.agentModel.find();

  //     if (country) {
  //       query = query.where('country').equals(country);
  //     }
  //     if (state) {
  //       query = query.where('state').equals(state);
  //     }
  //     if (companyName) {
  //       query = query.where('companyName').equals(companyName);
  //     }
  //     if (totalrating) {
  //       query = query.where('totalrating').equals(totalrating);
  //     }
  //     if (avgrating) {
  //       query = query.where('avgrating').equals(avgrating);
  //     }
  //     if (avgrating) {
  //       query = query.where('totalReview').equals(totalReview);
  //     }

    
  


  //     // Add live search functionality for tower or building name
  //   if (fullName) {
  //     query = query.where('fullName').regex(new RegExp(fullName, 'i'));
  //   }


  //   if (limit === 0) {
  //     // Retrieve all data for page 1
  //     query = query.skip(0);
  //   } else {
  //     // Apply pagination only if limit is not 0
  //     const skip = (page - 1) * limit;
  //     query = query.skip(skip).limit(limit);
  //   }

  //      // Apply sorting
  //   if (sortBy && sortOrder) {
  //     const sortOptions: any = {};
  //     sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;
  //     query = query.sort(sortOptions);
  // }
    
  //     return await query.exec();
  //   } catch (error) {
  //     console.error('Error in findAll:', error);
  //     throw error;
  //   }
  // }



  async findAllAgent( userId: string, role: string, queryOptions?: QueryAgentDto): Promise<Agent[]> {
    try {
      const {
        page = 1,
        limit = 100,
        state,
        country,
        companyName,
        fullName,
        totalrating,
        avgrating,
        totalReview,
        sortBy,
        sortOrder
      } = queryOptions;
  
      let query = this.agentModel.find();
  
      if (country) {
        query = query.where('country').equals(country);
      }
      if (state) {
        query = query.where('state').equals(state);
      }
      if (companyName) {
        query = query.where('companyName').equals(companyName);
      }
      if (totalrating) {
        query = query.where('totalrating').equals(totalrating);
      }
      if (avgrating) {
        query = query.where('avgrating').equals(avgrating);
      }
      if (totalReview) {
        query = query.where('totalReview').equals(totalReview);
      }
  
      // Add live search functionality for fullName
      if (fullName) {
        query = query.where('fullName').regex(new RegExp(fullName, 'i'));
      }
  
      if (limit !== 0) {
        const skip = (page - 1) * limit;
        query = query.skip(skip).limit(limit);
      }
  
      // Apply sorting
      if (sortBy && sortOrder) {
        const sortOptions: any = {};
        sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;
        query = query.sort(sortOptions);
      }
  
      // Execute the query to get the agents
      const agents = await query.exec();
  
      // Check if each agent is followed by the user and add the follow field
      const enhancedAgents = await Promise.all(agents.map(async (agent) => {
        const existingFollowing = await this.followModel.findOne({
          followerId: userId,
          followerType: role,
          followingId: agent._id
        });
        return {
          ...agent.toObject(),
          following: !!existingFollowing
        };
      }));
  
      return enhancedAgents;
    } catch (error) {
      console.error('Error in findFollowingAllAgent:', error);
      throw error;
    }
  }
  


  async findMyProfile(id: string): Promise<Agent> {
    const agent = await this.agentModel.findById(id);
    return agent;
  }

  async findById(id: string, userId: string, role: string): Promise<Agent> {
    const singleAgent = await this.agentModel.findById(id);
    if (!singleAgent) {
      throw new NotFoundException('Agent not found');
    }
  
    // Check if the agent is followed by the user
    const existingFollowing = await this.followModel.findOne({
      followerId: userId,
      followerType: role,
      followingId: id
    });
  
    // Add the follow field to the agent object
    const agentWithFollow = {
      ...singleAgent.toObject(),
      following: !!existingFollowing
    };
  
    return agentWithFollow;
  }
  


  async updateById(
    agentID: string,
    updateAgent: UpdateAgentDto,
  ): Promise<Agent> {
    return await this.agentModel
      .findByIdAndUpdate(agentID, updateAgent, {
        new: true,
        runValidators: true,
      })
  }


  async updateAgentEmailVerify(id: string, ): Promise<Agent> {
    return this.agentModel
      .findByIdAndUpdate(id, { emailVerified: true }, { new: true })
      .exec();
  }


  async deleteById(id: string): Promise<Agent> {
    try {
      const deletedAgent = await this.agentModel.findByIdAndDelete(id);

      if (deletedAgent) {
        await this.authModel.deleteMany({ userId: id });
        return deletedAgent;
      } else {
        throw new NotFoundException('Doctor not found');
      }
    } catch (error) {

      throw new NotFoundException('Error deleting Agent');
    }
  }

  async adminPanelAgentDelete(id: string): Promise<Agent> {
    try {
      const deletedAgent = await this.agentModel.findByIdAndDelete(id);

      if (deletedAgent) {
        await this.authModel.deleteMany({ userId: id });
        return deletedAgent;
      } else {
        throw new NotFoundException('Agent not found');
      }
    } catch (error) {
      throw new NotFoundException('Error deleting Agent');
    }
  }


  async reviewCreate(userId: string,   createAgentReviewDto: CreateAgentReviewDto) {
    const { rating, content, agentId } = createAgentReviewDto;

    const agentReview = new this.agentReviewModel({
      rating,
      content,
      agentId,
      reviewerId: userId
    });
    const savedAgentReview = await agentReview.save();

 // Update the agent's reviews and ratings
 const agent = await this.agentModel.findById(agentId);

 if (agent) {
   // Calculate the new total and average ratings
   const newTotalRating = agent.totalrating  + rating;
   const reviewCount = agent.totalReview  + 1;
   const newAvgRating = newTotalRating / reviewCount;
   const newAvgRatingRound = Math.round(newAvgRating);
   

   // Update the agent with the new ratings and review
   await this.agentModel.findByIdAndUpdate(
     agentId,
     {
      totalReview: reviewCount,
       totalrating: newTotalRating,
       avgrating: newAvgRatingRound
     },
     { new: true, useFindAndModify: false }
   );
 }
    return savedAgentReview;
  }





  async findMyReview(id: string): Promise<AgentReview[]> {
    const agentReview = await this.agentReviewModel.find({agentId: new ObjectId(id) });
    return agentReview;
  }
 



  


}
