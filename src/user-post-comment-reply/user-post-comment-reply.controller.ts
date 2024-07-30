import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserPostCommentReplyService } from './user-post-comment-reply.service';
import { CreateUserPostCommentReplyDto } from './dto/create-user-post-comment-reply.dto';
import { UpdateUserPostCommentReplyDto } from './dto/update-user-post-comment-reply.dto';
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserPostCommentReply } from './entities/user-post-comment-reply.entity';
import { GetCurrentUser } from 'src/common/get-current.user';

// @ApiTags('user-post-comment-reply')
@Controller('user-post-comment-reply')
export class UserPostCommentReplyController {
  constructor(private readonly userPostCommentReplyService: UserPostCommentReplyService) {}

  @Post('/post')
  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Save new agent post comment reply' })
  @ApiBody({ type: CreateUserPostCommentReplyDto })
  @ApiCreatedResponse({
    description: 'The agent post comment reply has been successfully created.',
    type: UserPostCommentReply,
  })
  @ApiBearerAuth()
  async create(
    @Body() createDto: CreateUserPostCommentReplyDto,
    @GetCurrentUser('userId') userId?: string,
    @GetCurrentUser('role') role?: string,
  ): Promise<UserPostCommentReply> {
    return this.userPostCommentReplyService.create(userId, role, createDto);
  }

  @Patch('/update/:id')
  @ApiOperation({ summary: 'Update agent post comment reply by ID' })
  @ApiOkResponse({
    description: 'The agent post comment reply has been successfully updated.',
    type: UserPostCommentReply,
  })
  @ApiBody({ type: UpdateUserPostCommentReplyDto })
  @ApiBearerAuth()
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateUserPostCommentReplyDto,
  ): Promise<UserPostCommentReply> {
    return this.userPostCommentReplyService.updateById(id, updateDto);
  }

  @Delete('/delete/:id')
  @ApiOperation({ summary: 'Delete agent post comment reply by ID' })
  @ApiOkResponse({ type: UserPostCommentReply })
  @ApiBearerAuth()
  async delete(@Param('id') id: string): Promise<UserPostCommentReply> {
    return this.userPostCommentReplyService.deleteById(id);
  }
}
