import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { UserPostCommentService } from './user-post-comment.service';
import { CreateUserPostCommentDto } from './dto/create-user-post-comment.dto';
import { UpdateUserPostCommentDto } from './dto/update-user-post-comment.dto';
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserPostComment } from './entities/user-post-comment.entity';
import { GetCurrentUser } from 'src/common/get-current.user';

// @ApiTags('user-post-comment')
@Controller('user-post-comment')
export class UserPostCommentController {
  constructor(private readonly userPostCommentService: UserPostCommentService) {}

  @Post('/post')
  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Save new agent post comment' })
  @ApiBody({
    type: CreateUserPostCommentDto,
  })
  @ApiCreatedResponse({
    description: 'The agent post comment has been successfully created.',
    type: UserPostComment,
  })
  @ApiBearerAuth()
  async createDoctor(
    @Body() createUserPostCommentDto: CreateUserPostCommentDto,
    @GetCurrentUser('userId') userId?: string,
    @GetCurrentUser('role') role?: string,
  ): Promise<UserPostComment> {
    return this.userPostCommentService.create(userId, role, createUserPostCommentDto);
  }

  @Patch('/update/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update post comment by id' })
  @ApiOkResponse({
    description: 'The post comment has been successfully updated.',
    type: UserPostComment,
  })
  @ApiBody({
    type: UpdateUserPostCommentDto,
  })
  @ApiBearerAuth()
  async updatePost(
    @Param('id') id: string,
    @Body() updateUserPostCommentDto: UpdateUserPostCommentDto,
  ): Promise<UserPostComment> {
    return this.userPostCommentService.updateById(id, updateUserPostCommentDto);
  }


  @Delete('/delete/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete saved Agent post comment by id' })
  @ApiOkResponse({ type: UserPostComment })
  async delete(
    @Param('id')
    id: string,
  ): Promise<UserPostComment> {
    return this.userPostCommentService.deleteById(id);
  }
}
