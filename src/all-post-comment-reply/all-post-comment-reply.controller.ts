import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { AllPostCommentReplyService } from './all-post-comment-reply.service';
import { CreateAllPostCommentReplyDto } from './dto/create-all-post-comment-reply.dto';
import { UpdateAllPostCommentReplyDto } from './dto/update-all-post-comment-reply.dto';
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AllPostCommentReply } from './entities/all-post-comment-reply.entity';
import { GetCurrentUser } from 'src/common/get-current.user';

@ApiTags('all-post-comment-reply')
@Controller('all-post-comment-reply')
export class AllPostCommentReplyController {
  constructor(private readonly allPostCommentReplyService: AllPostCommentReplyService) {}

  @Post('/post')
  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Save new agent post comment reply' })
  @ApiBody({ type: CreateAllPostCommentReplyDto })
  @ApiCreatedResponse({
    description: 'The agent post comment reply has been successfully created.',
    type: AllPostCommentReply,
  })
  @ApiBearerAuth()
  async create(
    @Body() createDto: CreateAllPostCommentReplyDto,
    @GetCurrentUser('userId') userId?: string,
    @GetCurrentUser('role') role?: string,
  ): Promise<AllPostCommentReply> {
    return this.allPostCommentReplyService.create(userId, role, createDto);
  }

  @Patch('/update/:id')
  @ApiOperation({ summary: 'Update agent post comment reply by ID' })
  @ApiOkResponse({
    description: 'The agent post comment reply has been successfully updated.',
    type: AllPostCommentReply,
  })
  @ApiBody({ type: UpdateAllPostCommentReplyDto })
  @ApiBearerAuth()
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateAllPostCommentReplyDto,
  ): Promise<AllPostCommentReply> {
    return this.allPostCommentReplyService.updateById(id, updateDto);
  }

  @Delete('/delete/:id')
  @ApiOperation({ summary: 'Delete agent post comment reply by ID' })
  @ApiOkResponse({ type: AllPostCommentReply })
  @ApiBearerAuth()
  async delete(@Param('id') id: string): Promise<AllPostCommentReply> {
    return this.allPostCommentReplyService.deleteById(id);
  }
}
