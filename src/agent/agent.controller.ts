import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UsePipes, ValidationPipe, Query } from '@nestjs/common';
import { AgentService } from './agent.service';
import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { Agent } from './entities/agent.entity';
import { GetCurrentUser } from 'src/common/get-current.user';
import { Public } from 'src/common/public.decorator';
import { CreateAgentReviewDto } from './dto/create-review.dto';
import { AgentReview } from './entities/review.entity';
import { QueryAgentDto } from './dto/agentQuery';

@ApiTags("agent")
@Controller('agent')
export class AgentController {
  constructor(private readonly agentService: AgentService) {}

  
  @Get('/myProfile')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get my Profile' })
  @ApiOkResponse({ type: [Agent] })
  @ApiBearerAuth()
  async findMyProfile(
    @GetCurrentUser('userId') userId?: string,
  ): Promise<Agent> {
    return this.agentService.findMyProfile(userId);
  }

  @Get('/all-get')
  @ApiOperation({ summary: 'Get all agent posts with pagination and filtering' })
  @ApiBearerAuth()
  @ApiOkResponse({ type: Agent })
  @ApiBearerAuth()
  async findAllAgent(
    @GetCurrentUser('userId') userId?: string,
    @GetCurrentUser('role') role?: string,
    @Query() queryOptions?: QueryAgentDto,
  ): Promise<Agent[]> {
    return this.agentService.findAllAgent( userId,role,  queryOptions);
  }
  


  @Get(':id')
  @ApiParam({ name: 'id', description: 'Agent ID' })
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Successfully Agent Get' })
  @ApiOkResponse({ type: Agent })
  @ApiBearerAuth()
  async getAgent(
    @Param('id')
    id: string,
    @GetCurrentUser('userId') userId?: string,
    @GetCurrentUser('role') role?: string,
  ): Promise<Agent> {
    return this.agentService.findById(id, userId,role);
  }

  @Patch('/update-profile')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update saved agent by id' })
  @ApiOkResponse({
    description: 'The agent has been successfully update.',
    type: Agent,
  })
  @ApiBody({
    type: UpdateAgentDto,
  })
  @ApiBearerAuth()
  async updateDoctor(
    @GetCurrentUser('userId') userId: string,
    @Body()
    updateAgent: UpdateAgentDto,
  ): Promise<Agent> {
    return this.agentService.updateById(userId, updateAgent);
  }


  @Delete('/delete')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete saved Agent by id' })
  @ApiOkResponse({ type: Agent })
  @ApiBearerAuth()
  async deleteUser(@GetCurrentUser('userId') userId: string): Promise<Agent> {
    return this.agentService.deleteById(userId);
  }


  @Delete('/delete-admin-panel/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete saved Agent by id' })
  @ApiOkResponse({ type: Agent })
  @ApiBearerAuth()
  async deleteAgentByAdminPanel(@Param('id') id: string): Promise<Agent> {
    return this.agentService.adminPanelAgentDelete(id);
  }


  @Post('/add-review')
  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Add a review' })
  @ApiBody({
    type: CreateAgentReviewDto,
  })
  @ApiCreatedResponse({
    description: 'The agent post comment has been successfully created.',
    type: AgentReview,
  })
  @ApiBearerAuth()
  async createDoctor(
    @Body() createAgentReviewDto: CreateAgentReviewDto,
    @GetCurrentUser('userId') userId?: string,
  ): Promise<AgentReview> {
    return this.agentService.reviewCreate(userId, createAgentReviewDto);
  }




  @Get('/my-review')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get my Profile' })
  @ApiOkResponse({ type: [AgentReview] })
  @ApiBearerAuth()
  async findMyReview(
    @GetCurrentUser('userId') userId?: string,
  ): Promise<AgentReview[]> {
    return this.agentService.findMyReview(userId);
  }





}
