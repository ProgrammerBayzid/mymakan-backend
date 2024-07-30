import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { AllpostsService } from './allposts.service';

import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { CreateAllPostDto } from './dto/create-allpost.dto';
import { AllPost } from './entities/allpost.entity';
import { GetCurrentUser } from 'src/common/get-current.user';
import { QueryAllPostDto } from './dto/AllPostQuery';
import { UpdateAllPostDto } from './dto/update-allpost.dto';

@ApiTags('allposts')
@Controller('allposts')
export class AllpostsController {
  constructor(private readonly allpostsService: AllpostsService) {}

  @Post('/post')
  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Save new Post' })
  @ApiBody({
    type: CreateAllPostDto,
  })
  @ApiCreatedResponse({
    description: 'The Post has been successfully created.',
    type: AllPost,
  })
  @ApiBearerAuth()
  async createAgentPost(
    @Body() createAgent: CreateAllPostDto,
    @GetCurrentUser('userId') userId?: string,
    @GetCurrentUser('role') role?: string,
  ): Promise<AllPost> {
    return this.allpostsService.create(userId,role, createAgent);
  }

 
  @Get('/get')
  @ApiOperation({ summary: 'Get all agent posts with pagination and filtering' })
  @ApiBearerAuth()
  async findAll(
    @GetCurrentUser('userId') myId?: string,
    @GetCurrentUser('role') myRole?: string,
    @Query() queryOptions?: QueryAllPostDto,
  ): Promise<AllPost[]> {
    return this.allpostsService.findAll( myId , myRole, queryOptions,);
  }


  @Get('/single-post/:id')
  @HttpCode(HttpStatus.OK)
  @ApiParam({ name: 'id', description: 'Agent post ID' })
  @ApiOperation({ summary: 'Get Post By ID' })
  @ApiOkResponse({ type: [AllPost] })
  @ApiBearerAuth()
  async getGetBlog(
    @Param('id')
    id: string,
    @GetCurrentUser('userId') myId?: string,
    @GetCurrentUser('role') myRole?: string,
  ): Promise<AllPost> {
    return this.allpostsService.findById(id, myId , myRole,);
  }

  @Patch('/update/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update post by id' })
  @ApiOkResponse({
    description: 'The post has been successfully updated.',
    type: AllPost,
  })
  @ApiBody({
    type: UpdateAllPostDto,
  })
  @ApiBearerAuth()
  async updatePost(
    @Param('id') id: string,
    @Body() updateAgentPostDto: UpdateAllPostDto,
  ): Promise<AllPost> {
    return this.allpostsService.updateById(id, updateAgentPostDto);
  }



  
  @Post(':id/like')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Like post by id' })
  @ApiOkResponse({ type: AllPost })
  @ApiBearerAuth()
  async like(
    @Param('id')
    id: string,
    @GetCurrentUser('userId') userId: string,
    @GetCurrentUser('role') role: string,
  ): Promise<AllPost> {
    return this.allpostsService.likeById(id, userId, role);
  }

  @Post(':id/unlike')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'unLike post by id' })
  @ApiOkResponse({ type: AllPost })
  @ApiBearerAuth()
  async unlike(
    @Param('id')
    id: string,
    @GetCurrentUser('userId') userId: string,
  ): Promise<AllPost> {
    return this.allpostsService.unlikeById(id, userId);
  }


  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete saved Agent post by id' })
  @ApiOkResponse({ type: AllPost })
  @ApiBearerAuth()
  async delete(
    @Param('id')
    id: string,
    @GetCurrentUser('userId') userId?: string,
    @GetCurrentUser('role') role?: string,
  ): Promise<AllPost> {
    return this.allpostsService.deleteById(id, userId, role);
  }




  @Get('/my-post-length')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get My Post Lengths' })
  @ApiOkResponse({
    schema: {
      example: {
        totalPosts: 100,
        sponsoredPosts: 10,
        urgentPosts: 5,
        normalPosts: 85,
      },
    },
  })
  @ApiBearerAuth()
  async findMyPost(
    @GetCurrentUser('userId') userId: string,
    @GetCurrentUser('role') role: string,
  ): Promise<{ totalPosts: number, sponsoredPosts: number, urgentPosts: number, normalPosts: number }> {
    return this.allpostsService.findMyAllPost(userId, role);
  }
  



}
