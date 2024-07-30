import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { AllPostCommentService } from './all-post-comment.service';
import { CreateAllPostCommentDto } from './dto/create-all-post-comment.dto';
import { UpdateAllPostCommentDto } from './dto/update-all-post-comment.dto';
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AllPostComment } from './entities/all-post-comment.entity';
import { GetCurrentUser } from 'src/common/get-current.user';
import { Public } from 'src/common/public.decorator';

@ApiTags('all-post-comment')
@Controller('all-post-comment')
export class AllPostCommentController {
  constructor(private readonly allPostCommentService: AllPostCommentService) {}

  @Post('/post')
  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Save new  post comment' })
  @ApiBody({
    type: CreateAllPostCommentDto,
  })
  @ApiCreatedResponse({
    description: 'The agent post comment has been successfully created.',
    type: AllPostComment,
  })
  @ApiBearerAuth()
  async createDoctor(
    @Body() createAllPostCommentDto: CreateAllPostCommentDto,
    @GetCurrentUser('userId') userId?: string,
    @GetCurrentUser('role') role?: string,
  ): Promise<AllPostComment> {
    return this.allPostCommentService.create(userId, role, createAllPostCommentDto);
  }

  @Patch('/update/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update post comment by id' })
  @ApiOkResponse({
    description: 'The post comment has been successfully updated.',
    type: AllPostComment,
  })
  @ApiBody({
    type: UpdateAllPostCommentDto,
  })
  @ApiBearerAuth()
  async updatePost(
    @Param('id') id: string,
    @Body() updateAllPostCommentDto: UpdateAllPostCommentDto,
  ): Promise<AllPostComment> {
    return this.allPostCommentService.updateById(id, updateAllPostCommentDto);
  }


  @Delete('/delete/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete saved Agent post comment by id' })
  @ApiOkResponse({ type: AllPostComment })
  async delete(
    @Param('id')
    id: string,
  ): Promise<AllPostComment> {
    return this.allPostCommentService.deleteById(id);
  }

  @Public()
  @Get(':postId')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'get all coment' })
  @ApiOkResponse({ type: AllPostComment })
  async getAllPostComments(
    @Param('postId') postId: string,
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 100,
    @Query('sortBy') sortBy?: string,
    @Query('sortOrder') sortOrder?: 'asc' | 'desc'
  ): Promise<AllPostComment[]> {
    return this.allPostCommentService.findAllPostComments(postId, page, limit, sortBy, sortOrder);
  }
}
