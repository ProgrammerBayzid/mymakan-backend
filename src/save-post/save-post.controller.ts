import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { SavePostService } from './save-post.service';
import { CreateSavePostDto } from './dto/create-save-post.dto';
import { UpdateSavePostDto } from './dto/update-save-post.dto';
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { SavePost } from './entities/save-post.entity';
import { GetCurrentUser } from 'src/common/get-current.user';

@ApiTags('save-post')
@Controller('save-post')
export class SavePostController {
  constructor(private readonly savePostService: SavePostService) {}

  @Post('/:role/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Save post by id' })
  @ApiOkResponse({ description: 'Save Post successful' })
  @ApiBearerAuth()
  async savePostById(
    @Param('id') id: string,
    @Param('role') role: string,
    @GetCurrentUser('userId') userId: string,
    @GetCurrentUser('role') saveby: string,
  ): Promise<string> {
    return this.savePostService.savePostById(role, id, userId, saveby);
  }
  

  @Get('/my-save-post')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get My Post' })
  @ApiOkResponse({ type: [SavePost] })
  @ApiBearerAuth()
  async findMyPost(
    @GetCurrentUser('userId') userId: string,
    @GetCurrentUser('role') role: string,
    @Query('page') page?: number ,
    @Query('limit') limit?: number ,
    @Query('sortBy') sortBy?: string,
    @Query('sortOrder') sortOrder?: string,
    @Query('postType') postType?: string 
  ): Promise<SavePost[]> {
    return this.savePostService.findMySavePost(userId, role, page, limit, sortBy, sortOrder, postType);
  }


  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete saved save post by id' })
  @ApiOkResponse({ type: SavePost })
  async delete(
    @Param('id')
    id: string,
  ): Promise<SavePost> {
    return this.savePostService.deleteById(id);
  }



  @Get('/save-post-exist/:savePostId')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Check if Post is Saved' })
  @ApiOkResponse({ type: Boolean })
  @ApiBearerAuth()
  async existingSavePost(
    @GetCurrentUser('userId') userId: string,
    @GetCurrentUser('role') role: string,
    @Param('savePostId') savePostId: string
  ): Promise<boolean> {
    return this.savePostService.savePostExisting(role, userId, savePostId);
  }


  @Delete('/delete-post-exist/:savePostId')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Check if Post is Saved' })
  @ApiOkResponse({ type: Boolean })
  @ApiBearerAuth()
  async deletePostExisting(
    @GetCurrentUser('userId') userId: string,
    @GetCurrentUser('role') role: string,
    @Param('savePostId') savePostId: string
  ): Promise<boolean> {
    return this.savePostService.deletePostExisting(role, userId, savePostId);
  }
  


}


  


