import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { PostUserService } from './post-user.service';
import { CreatePostUserDto } from './dto/create-post-user.dto';
import { UpdatePostUserDto } from './dto/update-post-user.dto';
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { PostUser } from './entities/post-user.entity';
import { GetCurrentUser } from 'src/common/get-current.user';
import { Public } from 'src/common/public.decorator';
import { QueryUserPostDto } from './dto/query.dto';

// @ApiTags('post-user')
@Controller('post-user')
export class PostUserController {
  constructor(private readonly postUserService: PostUserService) {}

  @Post('/post')
  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Save new Post' })
  @ApiBody({
    type: CreatePostUserDto,
  })
  @ApiCreatedResponse({
    description: 'The Post has been successfully created.',
    type: PostUser,
  })
  @ApiBearerAuth()
  async createUserPost(
    @Body() createUserPost: CreatePostUserDto,
    @GetCurrentUser('userId') userId?: string,
    @GetCurrentUser('role') role?: string,
  ): Promise<PostUser> {
    return this.postUserService.createUserPost(userId,role, createUserPost);
  }
  
  @Public()
  @Get('/get')
  @ApiOperation({ summary: 'Get all agent posts with pagination and filtering' })
  async findAll(
    @Query() queryOptions: QueryUserPostDto,
  ): Promise<PostUser[]> {
    return this.postUserService.findAll(queryOptions);
  }

  @Get('/my-post')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get My Post' })
  @ApiOkResponse({ type: [PostUser] })
  @ApiBearerAuth()
  async findMyPost(
    @GetCurrentUser('userId') userId: string,
    @Query() queryOptions: QueryUserPostDto,
  ): Promise<PostUser[]> {
    return this.postUserService.findMyUserPost(userId, queryOptions);
  }

  @Public()
  @Get('/single-post/:id')
  @HttpCode(HttpStatus.OK)
  @ApiParam({ name: 'id', description: 'User post ID' })
  @ApiOperation({ summary: 'Get Post By ID' })
  @ApiOkResponse({ type: [PostUser] })
  async getGetBlog(
    @Param('id')
    id: string,
  ): Promise<PostUser> {
    return this.postUserService.findById(id);
  }



  @Patch('/update/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update post by id' })
  @ApiOkResponse({
    description: 'The post has been successfully updated.',
    type: PostUser,
  })
  @ApiBody({
    type: UpdatePostUserDto,
  })
  @ApiBearerAuth()
  async updatePost(
    @Param('id') id: string,
    @Body() updateUserPostDto: UpdatePostUserDto,
  ): Promise<PostUser> {
    return this.postUserService.updateById(id, updateUserPostDto);
  }




  @Post(':id/like')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Like post by id' })
  @ApiOkResponse({ type: PostUser })
  @ApiBearerAuth()
  async like(
    @Param('id')
    id: string,
    @GetCurrentUser('userId') userId: string,
    @GetCurrentUser('role') role: string,
  ): Promise<PostUser> {
    return this.postUserService.likeById(id, userId, role);
  }

  @Post(':id/unlike')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'unLike post by id' })
  @ApiOkResponse({ type: PostUser })
  @ApiBearerAuth()
  async unlike(
    @Param('id')
    id: string,
    @GetCurrentUser('userId') userId: string,
    
  ): Promise<PostUser> {
    return this.postUserService.unlikeById(id, userId);
  }


  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete saved Agent post by id' })
  @ApiOkResponse({ type: PostUser })
  async delete(
    @Param('id')
    id: string,
  ): Promise<PostUser> {
    return this.postUserService.deleteById(id);
  }


}
