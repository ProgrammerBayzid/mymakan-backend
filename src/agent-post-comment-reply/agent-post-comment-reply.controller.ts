import { Controller, Post, Body, Patch, Param, Delete, HttpStatus, UsePipes, ValidationPipe } from '@nestjs/common';
import { AgentPostCommentReplyService } from './agent-post-comment-reply.service';
import { CreateAgentPostCommentReplyDto } from './dto/create-agent-post-comment-reply.dto';
import { UpdateAgentPostCommentReplyDto } from './dto/update-agent-post-comment-reply.dto';
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AgentPostCommentReply } from './entities/agent-post-comment-reply.entity';
import { GetCurrentUser } from 'src/common/get-current.user';

// @ApiTags('agent-post-comment-reply')
@Controller('agent-post-comment-reply')
export class AgentPostCommentReplyController {
  constructor(private readonly agentPostCommentReplyService: AgentPostCommentReplyService) {}

  @Post('/post')
  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Save new agent post comment reply' })
  @ApiBody({ type: CreateAgentPostCommentReplyDto })
  @ApiCreatedResponse({
    description: 'The agent post comment reply has been successfully created.',
    type: AgentPostCommentReply,
  })
  @ApiBearerAuth()
  async create(
    @Body() createDto: CreateAgentPostCommentReplyDto,
    @GetCurrentUser('userId') userId?: string,
    @GetCurrentUser('role') role?: string,
  ): Promise<AgentPostCommentReply> {
    return this.agentPostCommentReplyService.create(userId, role, createDto);
  }

  @Patch('/update/:id')
  @ApiOperation({ summary: 'Update agent post comment reply by ID' })
  @ApiOkResponse({
    description: 'The agent post comment reply has been successfully updated.',
    type: AgentPostCommentReply,
  })
  @ApiBody({ type: UpdateAgentPostCommentReplyDto })
  @ApiBearerAuth()
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateAgentPostCommentReplyDto,
  ): Promise<AgentPostCommentReply> {
    return this.agentPostCommentReplyService.updateById(id, updateDto);
  }

  @Delete('/delete/:id')
  @ApiOperation({ summary: 'Delete agent post comment reply by ID' })
  @ApiOkResponse({ type: AgentPostCommentReply })
  @ApiBearerAuth()
  async delete(@Param('id') id: string): Promise<AgentPostCommentReply> {
    return this.agentPostCommentReplyService.deleteById(id);
  }
}
