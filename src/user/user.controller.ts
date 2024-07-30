import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UsePipes, ValidationPipe, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { User } from './entities/user.entity';
import { GetCurrentUser } from 'src/common/get-current.user';
import { Public } from 'src/common/public.decorator';
import { CreateUserReviewDto } from './dto/create-review.dto';
import { UserReview } from './entities/review.entity';
import { QueryUserDto } from './dto/QueryUserDto';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}


  @Get('/all-get')
  @ApiOperation({ summary: 'Get all user posts with pagination and filtering' })
  @ApiBearerAuth()
  @ApiOkResponse({ type: User })
  @ApiBearerAuth()
  async findAllAgent(
    @GetCurrentUser('userId') userId?: string,
    @GetCurrentUser('role') role?: string,
    @Query() queryOptions?: QueryUserDto,
  ): Promise<User[]> {
    return this.userService.findAllUser( userId,role,  queryOptions);
  }

  @Get('/myProfile')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get my Profile' })
  @ApiOkResponse({ type: [User] })
  @ApiBearerAuth()
  async findMyProfile(
    @GetCurrentUser('userId') userId?: string,
  ): Promise<User> {
    console.log(userId);
    
    return this.userService.findMyProfile(userId);
  }


  @Get(':id')
  @ApiParam({ name: 'id', description: 'User ID' })
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Successfully Buyer Get' })
  @ApiOkResponse({ type: User })
  @ApiBearerAuth()
  async getUser(
    @Param('id')
    id: string,
    @GetCurrentUser('userId') userId?: string,
    @GetCurrentUser('role') role?: string,
  ): Promise<User> {
    return this.userService.findById(id, userId,role);
  }


  @Patch('/update-profile')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update saved agent by id' })
  @ApiOkResponse({
    description: 'The agent has been successfully update.',
    type: User,
  })
  @ApiBody({
    type: UpdateUserDto,
  })
  @ApiBearerAuth()
  async updateDoctor(
    @GetCurrentUser('userId') userId: string,
    @Body()
    updateUser: UpdateUserDto,
  ): Promise<User> {
    return this.userService.updateById(userId, updateUser);
  }


  @Delete('/delete')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete saved User by id' })
  @ApiOkResponse({ type: User })
  @ApiBearerAuth()
  async deleteUser(@GetCurrentUser('userId') userId: string): Promise<User> {
    return this.userService.deleteById(userId);
  }


  @Delete('/delete-admin-panel/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete saved User by id' })
  @ApiOkResponse({ type: User })
  @ApiBearerAuth()
  async deleteUserByAdminPanel(@Param('id') id: string): Promise<User> {
    return this.userService.adminPanelUserDelete(id);
  }



  @Post('/add-review')
  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Add a review' })
  @ApiBody({
    type: CreateUserReviewDto,
  })
  @ApiCreatedResponse({
    description: 'The agent post comment has been successfully created.',
    type: UserReview,
  })
  @ApiBearerAuth()
  async createDoctor(
    @Body() createUserReviewDto: CreateUserReviewDto,
    @GetCurrentUser('userId') agentId?: string,
  ): Promise<UserReview> {
    return this.userService.reviewCreate(agentId, createUserReviewDto);
  }
 



  @Get('/my-review')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get my Profile' })
  @ApiOkResponse({ type: [UserReview] })
  @ApiBearerAuth()
  async findMyReview(
    @GetCurrentUser('userId') userId?: string,
  ): Promise<UserReview[]> {
    return this.userService.findMyReview(userId);
  }


}
