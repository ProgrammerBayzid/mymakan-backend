import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, UsePipes, ValidationPipe, HttpCode, Query } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { Company } from './entities/company.entity';
import { Public } from 'src/common/public.decorator';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}


  @Public()
  @Get()
  @ApiOperation({ summary: 'Get all saved CompanyNames' })
  @ApiQuery({ name: 'page', required: false, type: Number, description: 'Page number for pagination' })
  @ApiQuery({ name: 'limit', required: false, type: Number, description: 'Number of items per page' })
  @ApiQuery({ name: 'search', required: false, type: String, description: 'Search term for company name' })
  @ApiOkResponse({ type: [Company] })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'List of CompanyNames fetched successfully.',
    type: [Company],
    isArray: true,
  })
  async getAllCompanyName(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
    @Query('search') search?: string,
    @Query('name') name?: string,
  ): Promise<Company[]> {
    return this.companyService.findAll(page, limit, search, name);
  }
  

}
