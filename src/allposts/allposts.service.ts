import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Agent } from 'src/agent/entities/agent.entity';
import { User, UserDocument } from 'src/user/entities/user.entity';
import { AllPost, AllPostDocument } from './entities/allpost.entity';
import { CreateAllPostDto } from './dto/create-allpost.dto';
import { QueryAllPostDto } from './dto/AllPostQuery';
import { UpdateAllPostDto } from './dto/update-allpost.dto';
import mongoose, { Types } from 'mongoose';
import e from 'express';
import { SavePost, SavePostDocument } from 'src/save-post/entities/save-post.entity';
@Injectable()
export class AllpostsService {


  constructor(
    @InjectModel(AllPost.name)
    private allPostModel: mongoose.Model<AllPostDocument>,
    @InjectModel(Agent.name)
    private agentModel: mongoose.Model<Agent>,
    @InjectModel(User.name)
    private userModel: mongoose.Model<UserDocument>,
    @InjectModel(SavePost.name)
    private readonly savePostModel: mongoose.Model<SavePostDocument>
  ) {}
  
  async create(userId: string, role: string, createPostDto: CreateAllPostDto): Promise<AllPost> {
    const createPost = new this.allPostModel({
      ...createPostDto,
      role: role,
      [role === "agent" ? "agentId" : "userId"]: userId
    });
    const savedPost = await createPost.save();
    if(role=== "agent"){
      const agent = await this.agentModel.findById(userId);
      const totalPost = agent.totalPost  + 1;
         // Update the agent with the new ratings and review
   await this.agentModel.findByIdAndUpdate(
    userId,
    {
      totalPost: totalPost,
    },
    { new: true, useFindAndModify: false }
  );
  if(createPostDto.type === "Urgent"){
    const totalUrgentPost = agent.totalUrgentPost  + 1; 
    await this.agentModel.findByIdAndUpdate(
      userId,
      {
        totalUrgentPost: totalUrgentPost,
      },
      { new: true, useFindAndModify: false }
    ); 
  }else{
    const totalSponsoredPost = agent.totalSponsoredPost  + 1; 
    await this.agentModel.findByIdAndUpdate(
      userId,
      {
        totalSponsoredPost: totalSponsoredPost,
      },
      { new: true, useFindAndModify: false }
    ); 
  }
    }else{
      const buyer = await this.userModel.findById(userId);
      const totalPost = buyer.totalPost  + 1;
      await this.userModel.findByIdAndUpdate(
        userId,
        {
          totalPost: totalPost,
        },
        { new: true, useFindAndModify: false }
      );
      if(createPostDto.type === "Urgent"){
        const totalUrgentPost = buyer.totalUrgentPost  + 1; 
        await this.userModel.findByIdAndUpdate(
          userId,
          {
            totalUrgentPost: totalUrgentPost,
          },
          { new: true, useFindAndModify: false }
        ); 
      }else{
        const totalSponsoredPost = buyer.totalSponsoredPost  + 1; 
        await this.userModel.findByIdAndUpdate(
          userId,
          {
            totalSponsoredPost: totalSponsoredPost,
          },
          { new: true, useFindAndModify: false }
        ); 
      }
    }
    return savedPost;
  }
  

  // async findAll(queryOptions?: QueryAllPostDto): Promise<AllPost[]> {
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
  //       agentId,
  //       userId,
  //       tags,
  //       sell,
  //       role,
  //       sortBy,
  //       sortOrder
  //     } = queryOptions;
  
  //     // Ensure limit is a number
  //     const limitNumber = Number(limit);
  
  //     // Construct the base query object
  //     const baseQuery: any = { hidden: false };
  
  //     if (forFilter) baseQuery.for = forFilter;
  //     if (state) baseQuery.state = state;
  //     if (role) baseQuery.role = role;
  //     if (agentId) baseQuery.agentId = new mongoose.Types.ObjectId(agentId);
  //     if (userId) baseQuery.userId = new mongoose.Types.ObjectId(userId);
  //     if (country) baseQuery.country = country;
  //     if (tags && tags.length > 0) baseQuery.tags = { $in: tags };
  //     if (postType) baseQuery.postType = postType;
  //     if (price) baseQuery.price = price;
  //     if (parking) baseQuery.parking = parking;
  //     if (propertyCategory) baseQuery.propertyCategory = propertyCategory;
  //     if (propertyType) baseQuery.propertyType = propertyType;
  //     if (sellType && sellType.length > 0) baseQuery.sellType = { $in: sellType };
  //     if (sell !== undefined) baseQuery.sell = sell;
  
  //     // Add live search functionality for tower or building name
  //     if (towersorBuildingName) {
  //       baseQuery.towersorBuildingName = new RegExp(towersorBuildingName, 'i');
  //     }
  
  //     // Pagination options
  //     const skip = (page - 1) * limitNumber;
  
  //     // Function to get posts by type
  //     const getPostsByType = async (type: string) => {
  //       const query = { ...baseQuery, type };
  //       return await this.allPostModel.find(query)
  //         .sort({ createdAt: -1 }) // Sort by creation date in descending order
  //         .populate('agentId')
  //         .populate('userId')
  //         .populate({
  //           path: 'comment',
  //           populate: [
  //             { path: 'agentId' },
  //             { path: 'userId' },
  //             {
  //               path: 'reply',
  //               populate: [
  //                 { path: 'agentId' },
  //                 { path: 'userId' },
  //               ]
  //             }
  //           ]
  //         })
  //         .exec();
  //     };
  
  //     // Get posts by type
  //     const sponsoredPosts = await getPostsByType("Sponsored");
  //     const urgentPosts = await getPostsByType("Urgent");
  //     const otherPostsQuery = { ...baseQuery, type: { $nin: ["Sponsored", "Urgent"] } };
  //     const otherPosts = await this.allPostModel.find(otherPostsQuery)
  //       .sort({ createdAt: -1 }) // Sort by creation date in descending order
  //       .populate('agentId')
  //       .populate('userId')
  //       .populate({
  //         path: 'comment',
  //         populate: [
  //           { path: 'agentId' },
  //           { path: 'userId' },
  //           {
  //             path: 'reply',
  //             populate: [
  //               { path: 'agentId' },
  //               { path: 'userId' },
  //             ]
  //           }
  //         ]
  //       })
  //       .exec();
  
  //     // Concatenate the results
  //     const allPosts = [...sponsoredPosts, ...urgentPosts, ...otherPosts];
  
  //     // Apply pagination to the concatenated results
  //     const paginatedPosts = limitNumber === 0 ? allPosts : allPosts.slice(skip, skip + limitNumber);
  
  //     return paginatedPosts;
  //   } catch (error) {
  //     console.error('Error in findAll:', error);
  //     throw error;
  //   }
  // }

  async findAll( myId: string, myRole: string, queryOptions?: QueryAllPostDto): Promise<AllPost[]> {
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
        userId,
        tags,
        sell,
        role,
        sortBy,
        sortOrder
      } = queryOptions;
  
      // Ensure limit is a number
      const limitNumber = Number(limit);
  
      // Construct the base query object
      const baseQuery: any = { hidden: false };
  
      if (forFilter) baseQuery.for = forFilter;
      if (state) baseQuery.state = state;
      if (role) baseQuery.role = role;
      if (agentId) baseQuery.agentId = new mongoose.Types.ObjectId(agentId);
      if (userId) baseQuery.userId = new mongoose.Types.ObjectId(userId);
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
        return await this.allPostModel.find(query)
          .sort({ createdAt: -1 }) // Sort by creation date in descending order
          .populate('agentId')
          .populate('userId')
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
      const otherPosts = await this.allPostModel.find(otherPostsQuery)
        .sort({ createdAt: -1 }) // Sort by creation date in descending order
        .populate('agentId')
        .populate('userId')
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
      const paginatedPosts = limitNumber === 0 ? allPosts : allPosts.slice(skip, skip + limitNumber);
  
      // Check if each post is saved by the user or agent and add the 'save' field
      const postsWithSaveField = await Promise.all(paginatedPosts.map(async (post) => {
        let existingSavePost;
        if (role === "buyer") {
          existingSavePost = await this.savePostModel.findOne({
            userId:myId,
            saveBy: myRole,
            savePostId: post._id,
          });
        } else if (role === "agent") {
          existingSavePost = await this.savePostModel.findOne({
            agentId: myId,
            saveBy: myRole,
            savePostId: post._id,
          });
        }
  
        return {
          ...post.toObject(), // Convert Mongoose document to plain object
          saveByMe: !!existingSavePost
        };
      }));
  
      return postsWithSaveField;
    } catch (error) {
      console.error('Error in findAll:', error);
      throw error;
    }
  }
  
  

  // async findById(id: string): Promise<AllPost> {
  //   const getSinglePost = await this.allPostModel.findById(id).populate('agentId').populate('userId')
  //   .populate({
  //     path: 'comment', 
  //     populate: [
  //       { path: 'agentId' },  
  //       { path: 'userId' },  
  //       { path: 'reply', populate:[{ path: 'agentId' },  
  //        { path: 'userId' },] }  
  //     ]
  //   }).populate('likedBy');
  //   if (!getSinglePost) {
  //     throw new NotFoundException('post not found');
  //   }
  //   return getSinglePost;
  // }
  async findById(id: string, myId: string, myRole: string): Promise<AllPost> {
    const getSinglePost = await this.allPostModel.findById(id)
      .populate('agentId')
      .populate('userId')
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
      .populate('likedBy');
  
    if (!getSinglePost) {
      throw new NotFoundException('Post not found');
    }
  
    // Check if the post is saved by the user or agent
    let existingSavePost;
    if (myRole === "buyer") {
      existingSavePost = await this.savePostModel.findOne({
        userId: myId,
        saveBy: myRole,
        savePostId: getSinglePost._id,
      });
    } else if (myRole === "agent") {
      existingSavePost = await this.savePostModel.findOne({
        agentId: myId,
        saveBy: myRole,
        savePostId: getSinglePost._id,
      });
    }
  
    // Add the 'save' field to the post object
    const postWithSaveField = {
      ...getSinglePost.toObject(), // Convert Mongoose document to plain object
      save: !!existingSavePost
    };
  
    return postWithSaveField;
  }
  

  async updateById(id: string, updateAllPostDto: UpdateAllPostDto): Promise<AllPost> {
    const updatedPost = await this.allPostModel.findByIdAndUpdate(id, updateAllPostDto, {
      new: true,
      runValidators: true,
    }).exec();

    if (!updatedPost) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    return updatedPost.toObject() as AllPost;
  }

  async likeById(id: string, userId: string, role: string): Promise<AllPost> {
    const post = await this.allPostModel.findById(id);
    
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


  async unlikeById(id: string, userId: string): Promise<AllPost> {
    const post = await this.allPostModel.findById(id);

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



  async deleteById(id: string, userId: string, role: string): Promise<AllPost> {
    try {
      const post = await this.allPostModel.findById(id);
      if (!post) {
        throw new NotFoundException('Post not found');
      }
  
      await this.allPostModel.findByIdAndDelete(id);
  
      if (role === "agent") {
        const agent = await this.agentModel.findById(userId);
        if (!agent) {
          throw new NotFoundException('Agent not found');
        }
        const totalPost = agent.totalPost - 1;
        await this.agentModel.findByIdAndUpdate(
          userId,
          { totalPost: totalPost },
          { new: true, useFindAndModify: false }
        );
      } else {
        const buyer = await this.userModel.findById(userId);
        if (!buyer) {
          throw new NotFoundException('User not found');
        }
        const totalPost = buyer.totalPost - 1;
        await this.userModel.findByIdAndUpdate(
          userId,
          { totalPost: totalPost },
          { new: true, useFindAndModify: false }
        );
      }
  
      return post;
    } catch (error) {
      throw new NotFoundException('Error deleting post');
    }
  }
  




  async findMyAllPost(
    id: string,
    role: string,
  ): Promise<{ totalPosts: number, sponsoredPosts: number, urgentPosts: number, normalPosts: number }> {
    try {
      const objectId = new Types.ObjectId(id);
      let matchStage: any = {};
  
      // Role-based query
      if (role === "buyer") {
        matchStage.userId = objectId;
      } else {
        matchStage.agentId = objectId;
      }
  
      // Aggregation pipeline with facet stage
      const results = await this.allPostModel.aggregate([
        { $match: matchStage },
        {
          $facet: {
            totalPosts: [
              { $count: "count" }
            ],
            sponsoredPosts: [
              { $match: { type: "Sponsored" } },
              { $count: "count" }
            ],
            urgentPosts: [
              { $match: { type: "Urgent" } },
              { $count: "count" }
            ],
            normalPosts: [
              { $match: { type: "Normal" } },
              { $count: "count" }
            ]
          }
        }
      ]);
  
      // Extracting the counts from the result
      const totalPosts = results[0].totalPosts.length > 0 ? results[0].totalPosts[0].count : 0;
      const sponsoredPosts = results[0].sponsoredPosts.length > 0 ? results[0].sponsoredPosts[0].count : 0;
      const urgentPosts = results[0].urgentPosts.length > 0 ? results[0].urgentPosts[0].count : 0;
      const normalPosts = results[0].normalPosts.length > 0 ? results[0].normalPosts[0].count : 0;
  
      return { totalPosts, sponsoredPosts, urgentPosts, normalPosts };
    } catch (error) {
      console.error('Error in findMyAllPost:', error);
      throw error;
    }
  }
  
  


  
}
