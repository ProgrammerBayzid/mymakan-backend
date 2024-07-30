import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './entities/user.entity';
import mongoose from 'mongoose';
import { Auth, AuthDocument } from 'src/auth/entities/auth.entity';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserReview } from './entities/review.entity';
import { CreateUserReviewDto } from './dto/create-review.dto';
import { ObjectId } from 'mongodb';
import { Follow, FollowDocument } from 'src/follow/entities/follow.entity';
import { QueryUserDto } from './dto/QueryUserDto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: mongoose.Model<UserDocument>,
    @InjectModel(Auth.name)
    private authModel: mongoose.Model<AuthDocument>,
    @InjectModel(UserReview.name)
    private userReviewModel: mongoose.Model<UserReview>,
    @InjectModel(Follow.name) private readonly followModel: mongoose.Model<FollowDocument>,
    private readonly config: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  async userCreate(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.userModel.findOne({
      email: createUserDto.email,
    });
    if (user) {
      throw new ForbiddenException('user already exists');
    }

    const createdUser = await this.userModel.create(createUserDto);

    createdUser.password = await this.hashPassword(createdUser.password);

    await createdUser.save();

    return this.sanitizeUser(createdUser);
  }


  async userCreateWithGoogle(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.userModel.findOne({
      email: createUserDto.email,
    });
    if (user) {
      throw new ForbiddenException('user already exists');
    }

    const createdUser = await this.userModel.create(createUserDto);
    await createdUser.save();
    console.log("done");
    


    return this.sanitizeUser(createdUser);
  }

  private sanitizeUser(user: UserDocument): User {
    if (!user) {
      throw new ForbiddenException('user not found');
    }

    const sanitized = user.toObject();
    delete sanitized.password;
    delete sanitized.verificationEmailSent;
    return sanitized;
  }


  private async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  }

  async findOneByEmailForEmailOrPasswordChange(email: string): Promise<User> {
    const user = await this.userModel.findOne({ email });
    return user;
  }

  async findOneByEmail(email: string): Promise<User> {
    const user = await this.userModel.findOne({ email });
    return this.sanitizeUser(user);
  }

  async findUserWithPasswordByEmail(email: string): Promise<User> {
    const user = this.userModel.findOne({ email });
    return user;
  }

  async updatePassword(id: string, password: string): Promise<User> {
    const user = await this.userModel.findById(id);

    // hash password
    const hashedPassword = await this.hashPassword(password);

    user.password = hashedPassword;
    await user.save();

    return this.sanitizeUser(user);
  }

  async updateVerificationEmailSentStatus(
    id: string,
    status: boolean,
  ): Promise<User> {
    const user = await this.userModel.findById(id);

    user.verificationEmailSent = status;
    await user.save();

    return this.sanitizeUser(user);
  }


  // user crud api 


  async findAllUser( userId: string, role: string, queryOptions?: QueryUserDto): Promise<User[]> {
    try {
      const {
        page = 1,
        limit = 100,
        state,
        country,
     
        fullName,
        totalrating,
        avgrating,
        totalReview,
        sortBy,
        sortOrder
      } = queryOptions;
  
      let query = this.userModel.find();
  
      if (country) {
        query = query.where('country').equals(country);
      }
      if (state) {
        query = query.where('state').equals(state);
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
      const users = await query.exec();
  
      // Check if each agent is followed by the user and add the follow field
      const enhancedUsers = await Promise.all(users.map(async (agent) => {
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
  
      return enhancedUsers;
    } catch (error) {
      console.error('Error in findFollowingAllAgent:', error);
      throw error;
    }
  }

  async findMyProfile(id: string): Promise<User> {
    const users = await this.userModel.findById(id);
    return users;
  }


  async findById(id: string, userId: string, role: string): Promise<User> {
    const singleAgent = await this.userModel.findById(id);
    if (!singleAgent) {
      throw new NotFoundException('Buyer not found');
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
  console.log(agentWithFollow);
  console.log(existingFollowing);
  
    return agentWithFollow;
  }


  async updateById(
    buyerID: string,
    updateBuyer: UpdateUserDto,
  ): Promise<User> {
    return await this.userModel
      .findByIdAndUpdate(buyerID, updateBuyer, {
        new: true,
        runValidators: true,
      })
  }

  async updateUserEmailVerify(id: string, ): Promise<User> {
    return this.userModel
      .findByIdAndUpdate(id, { emailVerified: true }, { new: true })
      .exec();
  }


  async deleteById(id: string): Promise<User> {
    try {
      const deletedUser = await this.userModel.findByIdAndDelete(id);

      if (deletedUser) {
        await this.authModel.deleteMany({ userId: id });
        return deletedUser;
      } else {
        throw new NotFoundException('User not found');
      }
    } catch (error) {
      throw new NotFoundException('Error deleting book');
    }
  }


  async adminPanelUserDelete(id: string): Promise<User> {
    try {
      const deletedUser = await this.userModel.findByIdAndDelete(id);

      if (deletedUser) {
        await this.authModel.deleteMany({ userId: id });
        return deletedUser;
      } else {
        throw new NotFoundException('user not found');
      }
    } catch (error) {
      throw new NotFoundException('Error deleting user');
    }
  }


  async reviewCreate(agentId: string,   createUserReviewDto: CreateUserReviewDto) {
    const { rating, content, userId } = createUserReviewDto;

    const userReview = new this.userReviewModel({
      rating,
      content,
      userId,
      reviewerId: agentId
    });
    const savedUserReview = await userReview.save();

 // Update the agent's reviews and ratings
 const user = await this.userModel.findById(userId);

 if (user) {
   // Calculate the new total and average ratings
   const newTotalRating = user.totalrating  + rating;
   const reviewCount = user.totalReview  + 1;
   const newAvgRating = newTotalRating / reviewCount;
   const newAvgRatingRound = Math.round(newAvgRating);
   

   // Update the agent with the new ratings and review
   await this.userModel.findByIdAndUpdate(
    userId,
     {
      totalReview: reviewCount,
       totalrating: newTotalRating,
       avgrating: newAvgRatingRound
     },
     { new: true, useFindAndModify: false }
   );
 }
    return savedUserReview;
  }


  async findMyReview(id: string): Promise<UserReview[]> {
    const userReview = await this.userReviewModel.find({userId: new ObjectId(id)});
    return userReview;
  }

}
