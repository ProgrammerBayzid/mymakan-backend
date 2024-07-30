import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { AgentPostCommentService } from './agent-post-comment.service';
import { CreateAgentPostCommentDto } from './dto/create-agent-post-comment.dto';
import { UpdateAgentPostCommentDto } from './dto/update-agent-post-comment.dto';
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AgentPostComment } from './entities/agent-post-comment.entity';
import { GetCurrentUser } from 'src/common/get-current.user';
import { Public } from 'src/common/public.decorator';

// @ApiTags('agent-post-comment')
@Controller('agent-post-comment')
export class AgentPostCommentController {
  constructor(private readonly agentPostCommentService: AgentPostCommentService) {}

 

  @Post('/post')
  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Save new agent post comment' })
  @ApiBody({
    type: CreateAgentPostCommentDto,
  })
  @ApiCreatedResponse({
    description: 'The agent post comment has been successfully created.',
    type: AgentPostComment,
  })
  @ApiBearerAuth()
  async createDoctor(
    @Body() createAgentPostCommentDto: CreateAgentPostCommentDto,
    @GetCurrentUser('userId') userId?: string,
    @GetCurrentUser('role') role?: string,
  ): Promise<AgentPostComment> {
    return this.agentPostCommentService.create(userId, role, createAgentPostCommentDto);
  }

  @Patch('/update/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update post comment by id' })
  @ApiOkResponse({
    description: 'The post comment has been successfully updated.',
    type: AgentPostComment,
  })
  @ApiBody({
    type: UpdateAgentPostCommentDto,
  })
  @ApiBearerAuth()
  async updatePost(
    @Param('id') id: string,
    @Body() updateAgentPostCommentDto: UpdateAgentPostCommentDto,
  ): Promise<AgentPostComment> {
    return this.agentPostCommentService.updateById(id, updateAgentPostCommentDto);
  }


  @Delete('/delete/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete saved Agent post comment by id' })
  @ApiOkResponse({ type: AgentPostComment })
  async delete(
    @Param('id')
    id: string,
  ): Promise<AgentPostComment> {
    return this.agentPostCommentService.deleteById(id);
  }
}
