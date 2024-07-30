import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Query, UsePipes, ValidationPipe, HttpCode } from '@nestjs/common';
import { CountryService } from './country.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Public } from 'src/common/public.decorator';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Country } from './entities/country.entity';
import { CreateStateDto } from './dto/create-state.dto';
import { State } from './entities/sate-entity';
import { CreateCityDto } from './dto/create-city.dto';
import { Citiy } from './entities/citiy-entity';
import { CreateTowersOrBuildingNameDto } from './dto/towre-create.dto';
import { TowersOrBuildingName } from './entities/tower-building.entity';

@ApiTags('country')
@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}
  @Public()
  @Post("/state")
  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Save new features-photo' })
  @ApiBody({
    type: CreateStateDto,
  })
  @ApiCreatedResponse({
    description: 'The FeaturesPhoto has been successfully created.',
    type: [State],
  })
  @ApiCreatedResponse({ type: State })
  createstate(@Body() createStateDto: CreateStateDto) {
    return this.countryService.createState(createStateDto);
  }

  @Public()
  @Post("city")
  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Save new features-photo' })
  @ApiBody({
    type: CreateCityDto,
  })
  @ApiCreatedResponse({
    description: 'The FeaturesPhoto has been successfully created.',
    type: [Citiy],
  })
  @ApiCreatedResponse({ type: Citiy })
  createcity(@Body() createCityDto: CreateCityDto) {
    return this.countryService.createCity(createCityDto);
  }

  @Public()
  @Post("tower")
  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Save new features-photo' })
  @ApiBody({
    type: CreateTowersOrBuildingNameDto,
  })
  @ApiCreatedResponse({
    description: 'The FeaturesPhoto has been successfully created.',
    type: [TowersOrBuildingName],
  })
  @ApiCreatedResponse({ type: TowersOrBuildingName })
  createTower(@Body() createTowersOrBuildingNameDto: CreateTowersOrBuildingNameDto) {
    return this.countryService.createTower(createTowersOrBuildingNameDto);
  }

  @Public()
  @Get()
  @ApiOperation({ summary: 'Get all saved Country' })
  @ApiQuery({ name: 'page', required: false, type: Number, description: 'Page number for pagination' })
  @ApiQuery({ name: 'limit', required: false, type: Number, description: 'Number of items per page' })
  @ApiQuery({ name: 'search', required: false, type: String, description: 'Search term for company name' })
  @ApiOkResponse({ type: [Country] })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'List of country fetched successfully.',
    type: [Country],
    isArray: true,
  })
  async getAllCountry(
    @Query('page') page = 1,
    @Query('limit') limit = 246,
    @Query('search') search?: string,
  ): Promise<Country[]> {
    return this.countryService.findAllCountry(page, limit, search);
  }


  @Public()
  @Get("/tower")
  @ApiOperation({ summary: 'Get all saved TowersOrBuildingName' })
  @ApiQuery({ name: 'page', required: false, type: Number, description: 'Page number for pagination' })
  @ApiQuery({ name: 'limit', required: false, type: Number, description: 'Number of items per page' })
  @ApiQuery({ name: 'search', required: false, type: String, description: 'Search term for company name' })
  @ApiOkResponse({ type: [TowersOrBuildingName] })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'List of country fetched successfully.',
    type: [TowersOrBuildingName],
    isArray: true,
  })
  async getAllTower(
    @Query('page') page = 1,
    @Query('limit') limit = 246,
    @Query('search') search?: string,
  ): Promise<TowersOrBuildingName[]> {
    return this.countryService.findAllTowerName(page, limit, search);
  }

  
}
