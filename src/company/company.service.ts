import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company, CompanyDocument } from './entities/company.entity';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { UserDocument } from 'src/user/entities/user.entity';

@Injectable()
export class CompanyService {


  constructor(
    @InjectModel(Company.name)
    private readonly companyModel: mongoose.Model<CompanyDocument>,

  ) {}

  async findAll(page = 1, limit = 1000, search?: string, name?: string): Promise<Company[]> {
    let query: any = {};
  
    if (search) {
      query.Office_name_english = { $regex: new RegExp(search, 'i') };
    }
  
    if (name) {
      query.Office_name_english = name;
    }
  
    const queryBuilder = this.companyModel.find(query);
  
    if (limit !== 0) {
      // Apply pagination only if limit is not 0
      const skip = (page - 1) * limit;
      queryBuilder.skip(skip).limit(limit);
    } else {
      // If limit is 0, retrieve all data for page 1
      queryBuilder.skip(0);
    }
  
    return queryBuilder.exec();
  }
  
  
  
  
}
