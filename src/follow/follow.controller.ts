import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, BadRequestException, Query } from '@nestjs/common';
import { FollowService } from './follow.service';
import { CreateFollowDto } from './dto/create-follow.dto';
import { UpdateFollowDto } from './dto/update-follow.dto';
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { GetCurrentUser } from 'src/common/get-current.user';
import { BuyerFollow } from './entities/buyer.follow.entity';
import { AgentFollow } from './entities/agent.follow.entity';

@ApiTags('follow')
@Controller('follow')
export class FollowController {
  constructor(private readonly followService: FollowService) {}

  @Post('follow/:role/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Follow user by id' })
  @ApiOkResponse({ description: 'Following successful' })
  @ApiBearerAuth()
  async followUser(
    @Param('role') followingType: string,
    @Param('id') followingId: string,
    @GetCurrentUser('userId') currentUserId: string,
    @GetCurrentUser('role') currentUserType: string,
  ): Promise<string> {
    return this.followService.followUser(followingType, followingId, currentUserId, currentUserType);
  }

  @Delete('unfollow/:role/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'UnFollow user by id' })
  @ApiOkResponse({ description: 'UnFollowing successful' })
  @ApiBearerAuth()
  async unfollowUser(
    @Param('role') followingType: string,
    @Param('id') followingId: string,
    @GetCurrentUser('userId') currentUserId: string,
    @GetCurrentUser('role') currentUserType: string,
  ): Promise<string> {
    return this.followService.unfollowUser(followingType, followingId, currentUserId, currentUserType);
  }


  @Get('following-buyer')
@ApiOperation({ summary: 'Get list of users that the buyer is following' })
@ApiOkResponse({ description: 'List of following users' })
@ApiBearerAuth()
@ApiQuery({ name: 'page', required: false, type: String })
@ApiQuery({ name: 'limit', required: false, type: String })
@ApiQuery({ name: 'sortBy', required: false, type: String })
@ApiQuery({ name: 'sortOrder', required: false, enum: ['asc', 'desc'],  })
@ApiQuery({ name: 'search', required: false, type: String })
async myfollowingUser(
  @GetCurrentUser('userId') currentUserId: string,
  @GetCurrentUser('role') currentUserType: string,
  @Query('page') page: string,
  @Query('limit') limit: string,
  @Query('sortBy') sortBy: string,
  @Query('sortOrder') sortOrder: 'asc' | 'desc',
  @Query('search') search?: string,
): Promise<any[]> {
  const pageNumber = parseInt(page, 10) || 1;
  const limitNumber = parseInt(limit, 10) || 10;
  return this.followService.myfollowingUser(currentUserId, currentUserType, pageNumber, limitNumber, sortBy, sortOrder, search);
}


  @Get('following-agent')
@ApiOperation({ summary: 'Get list of users that the buyer is following' })
@ApiOkResponse({ description: 'List of following users' })
@ApiBearerAuth()
@ApiQuery({ name: 'page', required: false, type: String })
@ApiQuery({ name: 'limit', required: false, type: String })
@ApiQuery({ name: 'sortBy', required: false, type: String })
@ApiQuery({ name: 'sortOrder', required: false, enum: ['asc', 'desc'],  })
@ApiQuery({ name: 'search', required: false, type: String })
async myfollowingAgent(
  @GetCurrentUser('userId') currentUserId: string,
  @GetCurrentUser('role') currentUserType: string,
  @Query('page') page: string,
    @Query('limit') limit: string,
  @Query('sortBy') sortBy: string,
  @Query('sortOrder') sortOrder: 'asc' | 'desc',
  @Query('search') search?: string,
): Promise<any[]> {
  const pageNumber = parseInt(page, 10) || 1;
  const limitNumber = parseInt(limit, 10) || 10;
  return this.followService.myfollowingAgent(currentUserId, currentUserType, pageNumber, limitNumber, sortBy, sortOrder, search);
}

@Get('follower-buyer')
@ApiOperation({ summary: 'Get list of users that the buyer is following' })
@ApiOkResponse({ description: 'List of following users' })
@ApiBearerAuth()
@ApiQuery({ name: 'page', required: false, type: String })
@ApiQuery({ name: 'limit', required: false, type: String })
@ApiQuery({ name: 'sortBy', required: false, type: String })
@ApiQuery({ name: 'sortOrder', required: false, enum: ['asc', 'desc'],  })
@ApiQuery({ name: 'search', required: false, type: String })
async myfollowerUser(
  @GetCurrentUser('userId') currentUserId: string,
  @GetCurrentUser('role') currentUserType: string,
  @Query('page') page: string,
    @Query('limit') limit: string,
  @Query('sortBy') sortBy: string,
  @Query('sortOrder') sortOrder: 'asc' | 'desc',
  @Query('search') search?: string,
): Promise<any[]> {
  const pageNumber = parseInt(page, 10) || 1;
  const limitNumber = parseInt(limit, 10) || 10;
  return this.followService.myfollowerUser(currentUserId, currentUserType, pageNumber, limitNumber, sortBy, sortOrder, search);
}


  @Get('follower-agent')
@ApiOperation({ summary: 'Get list of users that the buyer is following' })
@ApiOkResponse({ description: 'List of following users' })
@ApiBearerAuth()
@ApiQuery({ name: 'page', required: false, type: String })
@ApiQuery({ name: 'limit', required: false, type: String })
@ApiQuery({ name: 'sortBy', required: false, type: String })
@ApiQuery({ name: 'sortOrder', required: false, enum: ['asc', 'desc'],  })
@ApiQuery({ name: 'search', required: false, type: String })
async myfollowerAgent(
  @GetCurrentUser('userId') currentUserId: string,
  @GetCurrentUser('role') currentUserType: string,
  @Query('page') page: string,
    @Query('limit') limit: string,
  @Query('sortBy') sortBy: string,
  @Query('sortOrder') sortOrder: 'asc' | 'desc',
  @Query('search') search?: string,
): Promise<any[]> {
  const pageNumber = parseInt(page, 10) || 1;
  const limitNumber = parseInt(limit, 10) || 10;
  return this.followService.myfollowerAgent(currentUserId, currentUserType, pageNumber, limitNumber, sortBy, sortOrder, search);
}

  


@Get('/following-exist/:followingId')
@HttpCode(HttpStatus.OK)
@ApiOperation({ summary: 'Check if Following is Existing' })
@ApiOkResponse({ type: Boolean })
@ApiBearerAuth()
async followingExisting(
  @GetCurrentUser('userId') userId: string,
  @GetCurrentUser('role') role: string,
  @Param('followingId') followingId: string
): Promise<boolean> {
  return this.followService.followingExisting(role, userId, followingId);
}

}
