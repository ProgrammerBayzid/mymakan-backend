import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, HttpCode, HttpStatus, Query, NotFoundException } from '@nestjs/common';
import { PostAgentService } from './post-agent.service';
import { CreatePostAgentDto } from './dto/create-post-agent.dto';
import { UpdatePostAgentDto } from './dto/update-post-agent.dto';
import { PostAgent } from './entities/post-agent.entity';
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { GetCurrentUser } from 'src/common/get-current.user';
import { Public } from 'src/common/public.decorator';
import { QueryAgentPostDto } from './dto/PostAgentQurey';


// @ApiTags('post-agent')
@Controller('post-agent')
export class PostAgentController {
  constructor(private readonly postAgentService: PostAgentService) {}


  @Post('/post')
  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Save new Post' })
  @ApiBody({
    type: CreatePostAgentDto,
  })
  @ApiCreatedResponse({
    description: 'The Post has been successfully created.',
    type: PostAgent,
  })
  @ApiBearerAuth()
  async createAgentPost(
    @Body() createAgent: CreatePostAgentDto,
    @GetCurrentUser('userId') userId?: string,
    @GetCurrentUser('role') role?: string,
  ): Promise<PostAgent> {
    return this.postAgentService.create(userId,role, createAgent);
  }

  @Public()
  @Get('/get')
  @ApiOperation({ summary: 'Get all agent posts with pagination and filtering' })
  async findAll(
    @Query() queryOptions: QueryAgentPostDto,
  ): Promise<PostAgent[]> {
    return this.postAgentService.findAll(queryOptions);
  }

  @Get('/my-post')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get My Post' })
  @ApiOkResponse({ type: [PostAgent] })
  @ApiBearerAuth()
  async findMyPost(
    @GetCurrentUser('userId') userId: string,
    @Query() queryOptions: QueryAgentPostDto,
  ): Promise<PostAgent[]> {
    return this.postAgentService.findMyAgentPost(userId, queryOptions);
  }

  @Public()
  @Get('/single-post/:id')
  @HttpCode(HttpStatus.OK)
  @ApiParam({ name: 'id', description: 'Agent post ID' })
  @ApiOperation({ summary: 'Get Post By ID' })
  @ApiOkResponse({ type: [PostAgent] })
  async getGetBlog(
    @Param('id')
    id: string,
  ): Promise<PostAgent> {
    return this.postAgentService.findById(id);
  }



  @Patch('/update/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update post by id' })
  @ApiOkResponse({
    description: 'The post has been successfully updated.',
    type: PostAgent,
  })
  @ApiBody({
    type: UpdatePostAgentDto,
  })
  @ApiBearerAuth()
  async updatePost(
    @Param('id') id: string,
    @Body() updateAgentPostDto: UpdatePostAgentDto,
  ): Promise<PostAgent> {
    return this.postAgentService.updateById(id, updateAgentPostDto);
  }




  @Post(':id/like')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Like post by id' })
  @ApiOkResponse({ type: PostAgent })
  @ApiBearerAuth()
  async like(
    @Param('id')
    id: string,
    @GetCurrentUser('userId') userId: string,
    @GetCurrentUser('role') role: string,
  ): Promise<PostAgent> {
    return this.postAgentService.likeById(id, userId, role);
  }

  @Post(':id/unlike')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'unLike post by id' })
  @ApiOkResponse({ type: PostAgent })
  @ApiBearerAuth()
  async unlike(
    @Param('id')
    id: string,
    @GetCurrentUser('userId') userId: string,
  ): Promise<PostAgent> {
    return this.postAgentService.unlikeById(id, userId);
  }


  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete saved Agent post by id' })
  @ApiOkResponse({ type: PostAgent })
  async delete(
    @Param('id')
    id: string,
  ): Promise<PostAgent> {
    return this.postAgentService.deleteById(id);
  }


}
