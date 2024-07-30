import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostAgentDto } from './dto/create-post-agent.dto';
import { UpdatePostAgentDto } from './dto/update-post-agent.dto';
import { PostAgent, PostAgentDocument } from './entities/post-agent.entity';
import mongoose, { Types } from 'mongoose';
import { Agent } from 'http';
import { InjectModel } from '@nestjs/mongoose';
import { QueryAgentPostDto } from './dto/PostAgentQurey';
import { User, UserDocument } from 'src/user/entities/user.entity';

@Injectable()
export class PostAgentService {

  constructor(
    @InjectModel(PostAgent.name)
    private postAgentModel: mongoose.Model<PostAgentDocument>,
    @InjectModel(Agent.name)
    private agentModel: mongoose.Model<Agent>,
    @InjectModel(User.name)
    private userModel: mongoose.Model<UserDocument>,
  ) {}


  async create(userId: string, role: string, createAgentDto: CreatePostAgentDto): Promise<PostAgent> {
      const createAgentPost = new this.postAgentModel({
        ...createAgentDto,
        agentId: userId,
        role: role
      });
      const savedPost = await createAgentPost.save();
      return savedPost;
  }


  // async findAll(queryOptions?: QueryAgentPostDto): Promise<PostAgent[]> {
  //   try {
  //     const { page = 1, limit = 100, for: forFilter, propertyType, state,type, price, towersorBuildingName, parking, sellType, propertyCategory,country, postType, agentId,tags , sell, sortBy, sortOrder } = queryOptions;

  //     let query = this.postAgentModel.find({booked:false});

  //     if (forFilter) {
  //       query = query.where('for').equals(forFilter);
  //     }
  //     if (type) {
  //       query = query.where('type').equals(type);
  //     }

  //     if (state) {
  //       query = query.where('state').equals(state);
  //     }
  //     if (agentId) {
  //       query = query.where('agentId').equals(agentId);
  //     }

  //     if (country) {
  //       query = query.where('country').equals(country);
  //     }

  //     if (tags && tags.length > 0) {
  //       query = query.where('tags').in(tags);
  //     }
      
  //     if (country) {
  //       query = query.where('country').equals(country);
  //     }

  //     if (postType) {
  //       query = query.where('postType').equals(postType);
  //     }
  //     if (price) {
  //       query = query.where('price').equals(price);
  //     }
  //     if (parking) {
  //       query = query.where('parking').equals(parking);
  //     }
  //     if (propertyCategory) {
  //       query = query.where('propertyCategory').equals(propertyCategory);
  //     }
  //     if (propertyType) {
  //       query = query.where('propertyType').equals(propertyType);
  //     }
  //     if (sellType && sellType.length > 0) {
  //       query = query.where('sellType').in(sellType);
  //     }

  //     // Add live search functionality for tower or building name
  //   if (towersorBuildingName) {
  //     query = query.where('towersorBuildingName').regex(new RegExp(towersorBuildingName, 'i'));
  //   }

  //     const skip = (page - 1) * limit;
  //     query = query.skip(skip).limit(limit);

  //      // Apply sorting
  //   if (sortBy && sortOrder) {
  //     const sortOptions: any = {};
  //     sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;
  //     query = query.sort(sortOptions);
  // }

  //  // Populate fields
  //  query = query
  //  .populate('agentId') 
  //  .populate({
  //    path: 'comment', 
  //    populate: [
  //      { path: 'agentId' },  
  //      { path: 'userId' },  
  //      { path: 'reply', populate:[{ path: 'agentId' },  
  //       { path: 'userId' },] }  
  //    ]
  //  }).populate('likedBy');
    
  //     return await query.exec();
  //   } catch (error) {
  //     console.error('Error in findAll:', error);
  //     throw error;
  //   }
  // }

  async findAll(queryOptions?: QueryAgentPostDto): Promise<PostAgent[]> {
    try {
      const {
        page = 1,
        limit = 100,
        for: forFilter,
        propertyType,
        state,
        price,
        towersorBuildingName,
        parking,
        sellType,
        propertyCategory,
        country,
        postType,
        agentId,
        tags,
        sell,
        sortBy,
        sortOrder
      } = queryOptions;
  
      // Ensure limit is a number
      const limitNumber = Number(limit);
  
      // Construct the base query object
      const baseQuery: any = { booked: false };
  
      if (forFilter) baseQuery.for = forFilter;
      if (state) baseQuery.state = state;
      if (agentId) baseQuery.agentId = new mongoose.Types.ObjectId(agentId);
      if (country) baseQuery.country = country;
      if (tags && tags.length > 0) baseQuery.tags = { $in: tags };
      if (postType) baseQuery.postType = postType;
      if (price) baseQuery.price = price;
      if (parking) baseQuery.parking = parking;
      if (propertyCategory) baseQuery.propertyCategory = propertyCategory;
      if (propertyType) baseQuery.propertyType = propertyType;
      if (sellType && sellType.length > 0) baseQuery.sellType = { $in: sellType };
      if (sell !== undefined) baseQuery.sell = sell;
  
      // Add live search functionality for tower or building name
      if (towersorBuildingName) {
        baseQuery.towersorBuildingName = new RegExp(towersorBuildingName, 'i');
      }
  
      // Pagination options
      const skip = (page - 1) * limitNumber;
  
      // Function to get posts by type
      const getPostsByType = async (type: string) => {
        const query = { ...baseQuery, type };
        return await this.postAgentModel.find(query)
          .sort({ createdAt: -1 }) // Sort by creation date in descending order
          .populate('agentId')
          .populate({
            path: 'comment',
            populate: [
              { path: 'agentId' },
              { path: 'userId' },
              {
                path: 'reply',
                populate: [
                  { path: 'agentId' },
                  { path: 'userId' },
                ]
              }
            ]
          })
          .exec();
      };
  
      // Get posts by type
      const sponsoredPosts = await getPostsByType("Sponsored");
      const urgentPosts = await getPostsByType("Urgent");
      const otherPostsQuery = { ...baseQuery, type: { $nin: ["Sponsored", "Urgent"] } };
      const otherPosts = await this.postAgentModel.find(otherPostsQuery)
        .sort({ createdAt: -1 }) // Sort by creation date in descending order
        .populate('agentId')
        .populate({
          path: 'comment',
          populate: [
            { path: 'agentId' },
            { path: 'userId' },
            {
              path: 'reply',
              populate: [
                { path: 'agentId' },
                { path: 'userId' },
              ]
            }
          ]
        })
        .exec();
  
      // Concatenate the results
      const allPosts = [...sponsoredPosts, ...urgentPosts, ...otherPosts];
  
      // Apply pagination to the concatenated results
      const paginatedPosts = allPosts.slice(skip, skip + limitNumber);
  
      return paginatedPosts;
    } catch (error) {
      console.error('Error in findAll:', error);
      throw error;
    }
  }
  
  
  
  
  
  
  async findAllMatchingPost(queryOptions?: QueryAgentPostDto): Promise<PostAgent[]> {
    try {
      const { page = 1, limit = null, for: forFilter,propertyType, state, price, towersorBuildingName, parking, sellType, propertyCategory,country, postType, agentId,tags , sell, sortBy, sortOrder } = queryOptions;

         // Construct the initial query object
    let queryObj: any = { booked: false };

    if (tags && tags.length > 0) {
      queryObj.tags = { $in: tags };
    }

    // Initialize the query with the constructed query object
    let query = this.postAgentModel.find(queryObj);


      if (forFilter) {
        query = query.where('for').equals(forFilter);
      }

      if (state) {
        query = query.where('state').equals(state);
      }
      if (agentId) {
        query = query.where('agentId').equals(agentId);
      }

      if (country) {
        query = query.where('country').equals(country);
      }

      if (postType) {
        query = query.where('postType').equals(postType);
      }
      if (price) {
        query = query.where('price').equals(price);
      }
      if (parking) {
        query = query.where('parking').equals(parking);
      }
      if (propertyCategory) {
        query = query.where('propertyCategory').equals(propertyCategory);
      }
      if (propertyType) {
        query = query.where('propertyType').equals(propertyType);
      }
      if (sellType && sellType.length > 0) {
        query = query.where('sellType').in(sellType);
      }

      // Add live search functionality for tower or building name
    if (towersorBuildingName) {
      query = query.where('towersorBuildingName').regex(new RegExp(towersorBuildingName, 'i'));
    }

      if (limit !== null) {
        const skip = (page - 1) * limit;
        query = query.skip(skip).limit(limit);
      }

       // Apply sorting
    if (sortBy && sortOrder) {
      const sortOptions: any = {};
      sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;
      query = query.sort(sortOptions);
  }

   // Populate fields
   query = query
   .populate('agentId') 
   .populate({
     path: 'comment', 
     populate: [
       { path: 'agentId' },  
       { path: 'userId' },  
       { path: 'reply', populate:[{ path: 'agentId' },  
        { path: 'userId' },] }  
     ]
   }).populate('likedBy');
    
      return await query.exec();
    } catch (error) {
      console.error('Error in findAll:', error);
      throw error;
    }
  }


  async findMyAgentPost(id: string, queryOptions?: QueryAgentPostDto): Promise<PostAgent[]> {
    try {
      const { page = 1, limit = 100, for: forFilter,propertyType, state, price, towersorBuildingName, parking, sellType, propertyCategory,country, postType, agentId,tags , sell, sortBy, sortOrder ,booked } = queryOptions;
      const objectId = new Types.ObjectId(id);
      let query = this.postAgentModel.find({ agentId: objectId });

      if (forFilter) {
        query = query.where('for').equals(forFilter);
      }

      if (state) {
        query = query.where('state').equals(state);
      }

      if (country) {
        query = query.where('country').equals(country);
      }

      if (booked) {
        query = query.where('booked').equals(booked);
      }
      if (sell) {
        query = query.where('sell').equals(sell);
      }

      if (postType) {
        query = query.where('postType').equals(postType);
      }
      if (price) {
        query = query.where('price').equals(price);
      }
      if (parking) {
        query = query.where('parking').equals(parking);
      }
      if (propertyCategory) {
        query = query.where('propertyCategory').equals(propertyCategory);
      }
      if (propertyType) {
        query = query.where('propertyType').equals(propertyType);
      }
      if (sellType && sellType.length > 0) {
        query = query.where('sellType').in(sellType);
      }

      // Add live search functionality for tower or building name
    if (towersorBuildingName) {
      query = query.where('towersorBuildingName').regex(new RegExp(towersorBuildingName, 'i'));
    }

      const skip = (page - 1) * limit;
      query = query.skip(skip).limit(limit);


      if (sortBy && sortOrder) {
        const sortOptions: any = {};
        sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;
        query = query.sort(sortOptions);
    }

 // Populate fields
   query = query
   .populate('agentId') 
   .populate({
     path: 'comment', 
     populate: [
       { path: 'agentId' },  
       { path: 'userId' },  
       { path: 'reply', populate:[{ path: 'agentId' },  
        { path: 'userId' },] }  
     ]
   }).populate('likedBy');
      return await query.exec();
    } catch (error) {
      console.error('Error in findAll:', error);
      throw error;
    }
  }

  
  async findById(id: string): Promise<PostAgent> {
    const getSinglePost = await this.postAgentModel.findById(id).populate('agentId') 
    .populate({
      path: 'comment', 
      populate: [
        { path: 'agentId' },  
        { path: 'userId' },  
        { path: 'reply', populate:[{ path: 'agentId' },  
         { path: 'userId' },] }  
      ]
    }).populate('likedBy');
    if (!getSinglePost) {
      throw new NotFoundException('post not found');
    }
    return getSinglePost;
  }


  async updateById(id: string, updateAgentPostDto: UpdatePostAgentDto): Promise<PostAgent> {
    const updatedPost = await this.postAgentModel.findByIdAndUpdate(id, updateAgentPostDto, {
      new: true,
      runValidators: true,
    }).exec();

    if (!updatedPost) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    return updatedPost.toObject() as PostAgent;
  }



  async likeById(id: string, userId: string, role: string): Promise<PostAgent> {
    const post = await this.postAgentModel.findById(id);
    
    if (!post) {
      throw new NotFoundException('Post not found');
    }

    let userData;
    if (role === 'buyer') {
      userData = await this.userModel.findById(userId);
    } else {
      userData = await this.agentModel.findById(userId);
    }

    if (!userData) {
      throw new NotFoundException('User not found');
    }

    const alreadyLiked = post.likedBy.some(like => like._id === userId);

    if (alreadyLiked) {
      throw new BadRequestException('Post already liked by this user');
    }

    post.likeCount++;
    post.likedBy.push({
      _id: userData._id,
      name: userData.fullName,
      image: userData.image,
      role: role
    });

    return await post.save();
  }


  async unlikeById(id: string, userId: string): Promise<PostAgent> {
    const post = await this.postAgentModel.findById(id);

    if (!post) {
      throw new NotFoundException('Post not found');
    }

    const userIndex = post.likedBy.findIndex(like => like._id.toString() === userId);

    if (userIndex === -1) {
      throw new BadRequestException('Post is not liked by this user');
    }

    // Update post with unlike
    post.likeCount--;
    post.likedBy.splice(userIndex, 1); // Remove the user from likedBy array

    return await post.save();
  }



  async deleteById(id: string): Promise<PostAgent> {
    try {
      return await this.postAgentModel.findByIdAndDelete(id);
    } catch (error) {
      throw new NotFoundException('Error deleting Doctor');
    }
  }
}
