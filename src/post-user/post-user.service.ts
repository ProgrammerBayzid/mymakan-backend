import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostUserDto } from './dto/create-post-user.dto';
import { UpdatePostUserDto } from './dto/update-post-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Types } from 'mongoose';
import { PostUser, PostUserDocument } from './entities/post-user.entity';
import { QueryUserPostDto } from './dto/query.dto';
import { User, UserDocument } from 'src/user/entities/user.entity';
import { Agent, AgentDocument } from 'src/agent/entities/agent.entity';

@Injectable()
export class PostUserService {
  constructor(
    @InjectModel(PostUser.name)
    private postUserModel: mongoose.Model<PostUserDocument>,
    @InjectModel(User.name)
    private userModel: mongoose.Model<UserDocument>,
    @InjectModel(Agent.name)
    private agentModel: mongoose.Model<AgentDocument>,
  ) {}


  async createUserPost(userId: string, role:string ,createUserPostDto: CreatePostUserDto): Promise<PostUser> {    
    const createUserPost = new this.postUserModel({
      ...createUserPostDto,
      userId: userId,
      role: role,
    });
    const savedPost = await createUserPost.save();
    return savedPost;
  }


  // async findAll(queryOptions?: QueryUserPostDto): Promise<PostUser[]> {
  //   try {
  //     const { page = 1, limit = 100, for: forFilter,propertyType, state, price, towersorBuildingName, parking, sellType, propertyCategory ,country, postType, tags ,userId, sell, sortBy, sortOrder ,booked} = queryOptions;

  //     let query = this.postUserModel.find( {booked : false} );

  //     if (forFilter) {
  //       query = query.where('for').equals(forFilter);
  //     }

  //     if (state) {
  //       query = query.where('state').equals(state);
  //     }
  //     if (userId) {
  //       query = query.where('userId').equals(userId);
  //     }

  //     if (country) {
  //       query = query.where('country').equals(country);
  //     }

  //     if (tags) {
  //       query = query.where('tags').equals(tags);
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
  //    // Apply sorting
  //    if (sortBy && sortOrder) {
  //     const sortOptions: any = {};
  //     sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;
  //     query = query.sort(sortOptions);
  // }

  //  // Populate fields
  //  query = query
  //  .populate('userId').populate({
  //   path: 'comment', 
  //   populate: [
  //     { path: 'agentId' },  
  //     { path: 'userId' },  
  //     { path: 'reply', populate:[{ path: 'agentId' },  
  //      { path: 'userId' },] }  
  //   ]
  // }).populate('likedBy');
    
  //     return await query.exec();
  //   } catch (error) {
  //     console.error('Error in findAll:', error);
  //     throw error;
  //   }
  // }

  // do 
  // async findAll(queryOptions?: QueryUserPostDto): Promise<PostUser[]> {
  //   try {
  //     const {
  //       page = 1,
  //       limit = 100,
  //       for: forFilter,
  //       propertyType,
  //       state,
  //       price,
  //       towersorBuildingName,
  //       parking,
  //       sellType,
  //       propertyCategory,
  //       country,
  //       postType,
  //       tags,
  //       userId,
  //       sortBy,
  //       sortOrder,
  //       booked
  //     } = queryOptions;
  
  //     // Ensure limit is a number
  //     const limitNumber = Number(limit);
  
  //     // Construct the query object
  //     const query: any = { booked: false };
  
  //     if (tags) query.tags = { $in: tags };
  //     if (forFilter) query.for = forFilter;
  //     if (state) query.state = state;
  //     if (userId) query.userId = new Types.ObjectId(userId);
  //     if (country) query.country = country;
  //     if (postType) query.postType = postType;
  //     if (price) query.price = price;
  //     if (parking) query.parking = parking;
  //     if (propertyCategory) query.propertyCategory = propertyCategory;
  //     if (propertyType) query.propertyType = propertyType;
  //     if (sellType && sellType.length > 0) query.sellType = { $in: sellType };
  
  //     // Add live search functionality for tower or building name
  //     if (towersorBuildingName) {
  //       query.towersorBuildingName = new RegExp(towersorBuildingName, 'i');
  //     }
  
  //      // Construct the sort object
  //      let sort: any = {};
  //      if (sortBy && sortOrder) {
  //        sort[sortBy] = sortOrder === 'desc' ? -1 : 1;
  //      }
   
  //      // Pagination options
  //      let options: any = { sort };
  //      if (limitNumber === 0) {
  //        options.skip = 0;
  //      } else {
  //        options.skip = (page - 1) * limitNumber;
  //        options.limit = limitNumber;
  //      }
  
  //     // Execute the query with population
  //     const results = await this.postUserModel.find(query, null, options)
  //       .populate('userId')
  //       .populate({
  //         path: 'comment',
  //         populate: [
  //           { path: 'userId' },
  //           { path: 'agentId' },
  //           {
  //             path: 'reply',
  //             populate: [
  //               { path: 'userId' },
  //               { path: 'agentId' },
  //             ]
  //           }
  //         ]
  //       })
  //       .exec();
  
  //     return results;
  //   } catch (error) {
  //     console.error('Error in findAll:', error);
  //     throw error;
  //   }
  // }

  async findAll(queryOptions?: QueryUserPostDto): Promise<PostUser[]> {
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
        tags,
        userId,
        sortBy,
        sortOrder,
        booked
      } = queryOptions;
  
      // Ensure limit is a number
      const limitNumber = Number(limit);
  
      // Construct the base query object
      const baseQuery: any = { booked: false };
  
      if (tags) baseQuery.tags = { $in: tags };
      if (forFilter) baseQuery.for = forFilter;
      if (state) baseQuery.state = state;
      if (userId) baseQuery.userId = new Types.ObjectId(userId);
      if (country) baseQuery.country = country;
      if (postType) baseQuery.postType = postType;
      if (price) baseQuery.price = price;
      if (parking) baseQuery.parking = parking;
      if (propertyCategory) baseQuery.propertyCategory = propertyCategory;
      if (propertyType) baseQuery.propertyType = propertyType;
      if (sellType && sellType.length > 0) baseQuery.sellType = { $in: sellType };
  
      // Add live search functionality for tower or building name
      if (towersorBuildingName) {
        baseQuery.towersorBuildingName = new RegExp(towersorBuildingName, 'i');
      }
  
      // Pagination options
      const skip = (page - 1) * limitNumber;
  
      // Function to get posts by type
      const getPostsByType = async (type: string) => {
        const query = { ...baseQuery, type };
        return await this.postUserModel.find(query)
        .sort({ createdAt: -1 })
          .populate('userId')
          .populate({
            path: 'comment',
            populate: [
              { path: 'userId' },
              { path: 'agentId' },
              {
                path: 'reply',
                populate: [
                  { path: 'userId' },
                  { path: 'agentId' },
                ]
              }
            ]
          })
          .exec();
      };
  
      // Get posts by type
      const type1Posts = await getPostsByType("Sponsored");
      const type2Posts = await getPostsByType("Urgent");
      const otherPostsQuery = { ...baseQuery, type: { $nin: ["Sponsored", "Urgent"] } };
      const otherPosts = await this.postUserModel.find(otherPostsQuery)
      .sort({ createdAt: -1 })
        .populate('userId')
        .populate({
          path: 'comment',
          populate: [
            { path: 'userId' },
            { path: 'agentId' },
            {
              path: 'reply',
              populate: [
                { path: 'userId' },
                { path: 'agentId' },
              ]
            }
          ]
        })
        .exec();
  
      // Concatenate the results
      const allPosts = [...type1Posts, ...type2Posts, ...otherPosts];
  
      // Apply pagination to the concatenated results
      const paginatedPosts = allPosts.slice(skip, skip + limitNumber);
  
      return paginatedPosts;
    } catch (error) {
      console.error('Error in findAll:', error);
      throw error;
    }
  }
  
  
  
  
  async findAllMatchingPost(queryOptions?: QueryUserPostDto): Promise<PostUser[]> {
    try {
      const { page = 1, limit = null, for: forFilter, propertyType, state, price, towersorBuildingName, parking, sellType, propertyCategory ,country, postType, userId, tags , sell, sortBy, sortOrder ,booked} = queryOptions;

               // Construct the initial query object
    let queryObj: any = { booked: false };

    if (tags && tags.length > 0) {
      queryObj.tags = { $in: tags };
    }

    // Initialize the query with the constructed query object
    let query = this.postUserModel.find(queryObj);

      if (forFilter) {
        query = query.where('for').equals(forFilter);
      }

      if (state) {
        query = query.where('state').equals(state);
      }
      if (userId) {
        query = query.where('userId').equals(userId);
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
   .populate('userId').populate({
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

  async findMyUserPost(id: string, queryOptions?: QueryUserPostDto): Promise<PostUser[]> {
    try {
      const { page = 1, limit = 100, for:  forFilter,type, propertyType, state, price, towersorBuildingName, parking, sellType, propertyCategory ,country, postType, tags , sell, sortBy, sortOrder ,booked} = queryOptions;
      const objectId = new Types.ObjectId(id);
      let query = this.postUserModel.find({ userId: objectId });

      if (forFilter) {
        query = query.where('for').equals(forFilter);
      }

      if (type) {
        query = query.where('type').equals(type);
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
   .populate('userId').populate({
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

  async findById(id: string): Promise<PostUser> {
    const getSinglePost = await this.postUserModel.findById(id).populate('userId').populate({
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

  async updateById(id: string, updateUserPostDto: UpdatePostUserDto): Promise<PostUser> {
    const updatedPost = await this.postUserModel.findByIdAndUpdate(id, updateUserPostDto, {
      new: true,
      runValidators: true,
    }).exec();

    if (!updatedPost) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    return updatedPost.toObject() as PostUser;
  }

  
  async likeById(id: string, userId: string, role: string): Promise<PostUser> {
    const post = await this.postUserModel.findById(id);
    
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

  async unlikeById(id: string, userId: string): Promise<PostUser> {
    const post = await this.postUserModel.findById(id);

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



  async deleteById(id: string): Promise<PostUser> {
    try {
      return await this.postUserModel.findByIdAndDelete(id);
    } catch (error) {
      throw new NotFoundException('Error deleting Doctor');
    }
  }
}
