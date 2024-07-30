import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { PostFieldDataService } from './post-field-data.service';
import { CreateParkingDto } from './dto/parkingdto/createParkingdto';
import { CreatePropertyCategoryDto } from './dto/propertyCategoryDto/createPropertyCategoryDto';
import { CreatePropertyTypeDto } from './dto/propertyTypeDto/createPropertyTypeDto';
import { CreateSellTypeDto } from './dto/sellTypeDto/createSellType.dto';
import { CreateTagsDto } from './dto/tagsDto/createTags.dto';
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Parking } from './entities/parking.entity.dto';
import { PropertyCategory } from './entities/propertycategoryentity.dto';
import { PropertyType } from './entities/PropertyTypeEntity.dto';
import { SellType } from './entities/sellType.entity.dto';
import { Tags } from './entities/tags.entity.dto';
import { Public } from 'src/common/public.decorator';
import { UpdateParkingDto } from './dto/parkingdto/updateParkingDto';
import { UpdatePropertyCategoryDto } from './dto/propertyCategoryDto/updatePropertyCategoryDto';
import { UpdatePropertyTypeDto } from './dto/propertyTypeDto/updatePropertyTypeDto';
import { UpdateSellTypeDto } from './dto/sellTypeDto/updateSellType.dto';
import { UpdateTagsDto } from './dto/tagsDto/updateTags.dto';

@ApiTags('post-field-data')
@Controller('post-field-data')
export class PostFieldDataController {
  constructor(private readonly postFieldDataService: PostFieldDataService) {}


  @Post("/parking")
  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Add successfully' })
  @ApiBody({
    type: CreateParkingDto,
  })
  @ApiCreatedResponse({
    description: 'The Post has been successfully created.',
    type: Parking,
  })
  @ApiBearerAuth()
  async createParking(@Body() createParkingDto: CreateParkingDto): Promise<Parking>  {
      return this.postFieldDataService.createParking(createParkingDto);
  }


  @Public()
  @Post("property-category")
  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Add successfully' })
  @ApiBody({
    type: CreatePropertyCategoryDto,
  })
  @ApiCreatedResponse({
    description: 'The Post has been successfully created.',
    type: PropertyCategory,
  })
  async createPropertyCategory(@Body() createPropertyCategoryDto: CreatePropertyCategoryDto): Promise<PropertyCategory> {
      return this.postFieldDataService.createPropertyCategory(createPropertyCategoryDto);
  }


  @Post("property-type")
  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Add successfully' })
  @ApiBody({
    type: CreatePropertyTypeDto,
  })
  @ApiCreatedResponse({
    description: 'The Post has been successfully created.',
    type: PropertyType,
  })
  async createPropertyType(@Body() createPropertyTypeDto: CreatePropertyTypeDto): Promise<PropertyType> {
      return this.postFieldDataService.createPropertyType(createPropertyTypeDto);
  }

  @Post("sell-type")
  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Add successfully' })
  @ApiBody({
    type: CreateSellTypeDto,
  })
  @ApiCreatedResponse({
    description: 'The Post has been successfully created.',
    type: SellType,
  })
  async createSellType(@Body() createSellTypeDto: CreateSellTypeDto): Promise<SellType>  {
      return this.postFieldDataService.createSellType(createSellTypeDto);
  }

  @Post("tag")
  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Add successfully' })
  @ApiBody({
    type: CreateTagsDto,
  })
  @ApiCreatedResponse({
    description: 'The Post has been successfully created.',
    type: Tags,
  })
  async createTags(@Body() createTagsDto: CreateTagsDto): Promise<SellType> {
      return this.postFieldDataService.createTags(createTagsDto);
  }

  @Public()
  @Get('/parking')
  @ApiOperation({ summary: 'Get all data' })
  async findAllParking(
  ): Promise<Parking[]> {
    return this.postFieldDataService.findAllParking();
  }

  @Public()
  @Get('/property-category')
  @ApiOperation({ summary: 'Get all data' })
  async findAllPropertyCategory(
  ): Promise<PropertyCategory[]> {
    return this.postFieldDataService.findAllPropertyCategory();
  }

  @Public()
  @Get('/property-type')
  @ApiOperation({ summary: 'Get all data' })
  async findAllPropertyType(
  ): Promise<PropertyType[]> {
    return this.postFieldDataService.findAllPropertyType();
  }

  @Public()
  @Get('/sell-type')
  @ApiOperation({ summary: 'Get all data' })
  async findAllSellType(
  ): Promise<SellType[]> {
    return this.postFieldDataService.findAllSellType();
  }

  @Public()
  @Get('/tags')
  @ApiOperation({ summary: 'Get all data' })
  async findAllTags(
  ): Promise<Tags[]> {
    return this.postFieldDataService.findAllTags();
  }


  @Patch('/parking/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update post by id' })
  @ApiOkResponse({
    description: 'The post has been successfully updated.',
    type: Parking,
  })
  @ApiBody({
    type: UpdateParkingDto,
  })
  @ApiBearerAuth()
  async updateParking(
    @Param('id') id: string,
    @Body() updateParkingDto: UpdateParkingDto,
  ): Promise<Parking> {
    return this.postFieldDataService.updateParking(id, updateParkingDto);
  }


  @Patch('/property-category/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update post by id' })
  @ApiOkResponse({
    description: 'The post has been successfully updated.',
    type: PropertyCategory,
  })
  @ApiBody({
    type: UpdatePropertyCategoryDto,
  })
  @ApiBearerAuth()
  async updatePropertyCategory(
    @Param('id') id: string,
    @Body() updatePropertyCategoryDto: UpdatePropertyCategoryDto,
  ): Promise<Parking> {
    return this.postFieldDataService.updatePropertyCategory(id, updatePropertyCategoryDto);
  }


  @Patch('/property-type/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update post by id' })
  @ApiOkResponse({
    description: 'The post has been successfully updated.',
    type: PropertyType,
  })
  @ApiBody({
    type: UpdatePropertyTypeDto,
  })
  @ApiBearerAuth()
  async updatePropertyType(
    @Param('id') id: string,
    @Body() updatePropertyTypeDto: UpdatePropertyTypeDto,
  ): Promise<Parking> {
    return this.postFieldDataService.updatePropertyType(id, updatePropertyTypeDto);
  }


  @Patch('/sell-type/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update post by id' })
  @ApiOkResponse({
    description: 'The post has been successfully updated.',
    type: SellType,
  })
  @ApiBody({
    type: UpdateSellTypeDto,
  })
  @ApiBearerAuth()
  async updateSellType(
    @Param('id') id: string,
    @Body() updateSellTypeDto: UpdateSellTypeDto,
  ): Promise<Parking> {
    return this.postFieldDataService.updateSellType(id, updateSellTypeDto);
  }


  @Patch('/tags/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update post by id' })
  @ApiOkResponse({
    description: 'The post has been successfully updated.',
    type: Tags,
  })
  @ApiBody({
    type: UpdateTagsDto,
  })
  @ApiBearerAuth()
  async updateTags(
    @Param('id') id: string,
    @Body() updateTagsDto: UpdateTagsDto,
  ): Promise<Parking> {
    return this.postFieldDataService.updateSellType(id, updateTagsDto);
  }


  @Delete('/parking/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete saved post by id' })
  @ApiOkResponse({ type: Parking })
  async deleteParking(
    @Param('id')
    id: string,
  ): Promise<Parking> {
    return this.postFieldDataService.deleteParking(id);
  }

  @Delete('/property-category/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete saved post by id' })
  @ApiOkResponse({ type: PropertyCategory })
  async deletePropertyCategory(
    @Param('id')
    id: string,
  ): Promise<PropertyCategory> {
    return this.postFieldDataService.deletePropertyCategory(id);
  }

  @Delete('/property-type/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete saved post by id' })
  @ApiOkResponse({ type: PropertyType })
  async deletePropertyType(
    @Param('id')
    id: string,
  ): Promise<PropertyType> {
    return this.postFieldDataService.deletePropertyType(id);
  }

  @Delete('/sell-type/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete saved post by id' })
  @ApiOkResponse({ type: SellType })
  async deleteSellType(
    @Param('id')
    id: string,
  ): Promise<SellType> {
    return this.postFieldDataService.deleteSellType(id);
  }

  @Delete('/sell-type/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete saved post by id' })
  @ApiOkResponse({ type: Tags })
  async deleteTags(
    @Param('id')
    id: string,
  ): Promise<Tags> {
    return this.postFieldDataService.deleteTags(id);
  }
}
