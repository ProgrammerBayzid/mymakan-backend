import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Parking, ParkingDocument } from './entities/parking.entity.dto';
import mongoose from 'mongoose';
import { PropertyCategory, PropertyCategoryDocument } from './entities/propertycategoryentity.dto';
import { PropertyType, PropertyTypeDocument } from './entities/PropertyTypeEntity.dto';
import { SellType, SellTypeDocument } from './entities/sellType.entity.dto';
import { Tags, TagsDocument } from './entities/tags.entity.dto';
import { CreateParkingDto } from './dto/parkingdto/createParkingdto';
import { CreatePropertyCategoryDto } from './dto/propertyCategoryDto/createPropertyCategoryDto';
import { CreatePropertyTypeDto } from './dto/propertyTypeDto/createPropertyTypeDto';
import { CreateSellTypeDto } from './dto/sellTypeDto/createSellType.dto';
import { CreateTagsDto } from './dto/tagsDto/createTags.dto';
import { UpdateParkingDto } from './dto/parkingdto/updateParkingDto';
import { UpdatePropertyCategoryDto } from './dto/propertyCategoryDto/updatePropertyCategoryDto';
import { UpdatePropertyTypeDto } from './dto/propertyTypeDto/updatePropertyTypeDto';
import { UpdateSellTypeDto } from './dto/sellTypeDto/updateSellType.dto';
import { UpdateTagsDto } from './dto/tagsDto/updateTags.dto';

@Injectable()
export class PostFieldDataService {


  constructor(
    @InjectModel(Parking.name)
    private parkingModel: mongoose.Model<ParkingDocument>,
    @InjectModel(PropertyCategory.name)
    private propertyCategoryModel: mongoose.Model<PropertyCategoryDocument>,
    @InjectModel(PropertyType.name)
    private propertyTypeModel: mongoose.Model<PropertyTypeDocument>,
    @InjectModel(SellType.name)
    private sellTypeModel: mongoose.Model<SellTypeDocument>,
    @InjectModel(Tags.name)
    private tagsModel: mongoose.Model<TagsDocument>,
  ) {}


  async createParking(createParkingDto: CreateParkingDto): Promise<Parking> {    
    const createParking = new this.parkingModel({
      ...createParkingDto,
    });
    const savedPost = await createParking.save();
    return savedPost;
  }
  async createPropertyCategory(createPropertyCategoryDto: CreatePropertyCategoryDto): Promise<PropertyCategory> {    
    const createPropertyCategory = new this.propertyCategoryModel({
    name: createPropertyCategoryDto.name ,
    });
    const saved = await createPropertyCategory.save();
    return saved;
  }
  async createPropertyType(createPropertyTypeDto: CreatePropertyTypeDto): Promise<PropertyType> {    
    const createPropertyType = new this.propertyTypeModel({
      ...createPropertyTypeDto,
    });
    const saved = await createPropertyType.save();
    return saved;
  }
  async createSellType(createSellTypeDto: CreateSellTypeDto): Promise<SellType> {    
    const createSellType = new this.sellTypeModel({
      ...createSellTypeDto,
    });
    const saved = await createSellType.save();
    return saved;
  }
  async createTags(createTagsDto: CreateTagsDto): Promise<Tags> {    
    const createTags = new this.tagsModel({
      ...createTagsDto,
    });
    const saved = await createTags.save();
    return saved;
  }


  async findAllParking(): Promise<Parking[]> {
    return this.parkingModel.find().exec();
  }
  async findAllPropertyCategory(): Promise<PropertyCategory[]> {
    return this.propertyCategoryModel.find().exec();
  }
  async findAllPropertyType(): Promise<PropertyType[]> {
    return this.propertyTypeModel.find().exec();
  }
  async findAllSellType(): Promise<SellType[]> {
    return this.sellTypeModel.find().exec();
  }
  async findAllTags(): Promise<Tags[]> {
    return this.tagsModel.find().exec();
  }

  async updateParking(id: string, updateParkingDto: UpdateParkingDto): Promise<Parking> {
    const existingParking = await this.parkingModel.findByIdAndUpdate(id, updateParkingDto, { new: true }).exec();
    if (!existingParking) {
        throw new NotFoundException(`Parking with ID ${id} not found`);
    }
    return existingParking;
}
  async updatePropertyCategory(id: string, updatePropertyCategoryDto: UpdatePropertyCategoryDto): Promise<PropertyCategory> {
    const existingData = await this.propertyCategoryModel.findByIdAndUpdate(id, updatePropertyCategoryDto, { new: true }).exec();
    if (!existingData) {
        throw new NotFoundException(`Parking with ID ${id} not found`);
    }
    return existingData;
}
  async updatePropertyType(id: string, updatePropertyTypeDto: UpdatePropertyTypeDto): Promise<PropertyType> {
    const existingData = await this.propertyTypeModel.findByIdAndUpdate(id, updatePropertyTypeDto, { new: true }).exec();
    if (!existingData) {
        throw new NotFoundException(`Parking with ID ${id} not found`);
    }
    return existingData;
}
  async updateSellType(id: string, updateSellTypeDto: UpdateSellTypeDto): Promise<SellType> {
    const existingData = await this.sellTypeModel.findByIdAndUpdate(id, updateSellTypeDto, { new: true }).exec();
    if (!existingData) {
        throw new NotFoundException(`Parking with ID ${id} not found`);
    }
    return existingData;
}
  async updateTags(id: string, updateTagsDto: UpdateTagsDto): Promise<Tags> {
    const existingData = await this.tagsModel.findByIdAndUpdate(id, updateTagsDto, { new: true }).exec();
    if (!existingData) {
        throw new NotFoundException(`Parking with ID ${id} not found`);
    }
    return existingData;
}

async deleteParking(id: string): Promise<Parking> {
  const deletedParking = await this.parkingModel.findByIdAndDelete(id).exec();
  if (!deletedParking) {
      throw new NotFoundException(`Parking with ID ${id} not found`);
  }
  return deletedParking;
}
async deletePropertyCategory(id: string): Promise<PropertyCategory> {
  const deleted = await this.propertyCategoryModel.findByIdAndDelete(id).exec();
  if (!deleted) {
      throw new NotFoundException(`Parking with ID ${id} not found`);
  }
  return deleted;
}
async deletePropertyType(id: string): Promise<PropertyType> {
  const deleted = await this.propertyTypeModel.findByIdAndDelete(id).exec();
  if (!deleted) {
      throw new NotFoundException(`Parking with ID ${id} not found`);
  }
  return deleted;
}
async deleteSellType(id: string): Promise<SellType> {
  const deleted = await this.sellTypeModel.findByIdAndDelete(id).exec();
  if (!deleted) {
      throw new NotFoundException(`Parking with ID ${id} not found`);
  }
  return deleted;
}
async deleteTags(id: string): Promise<Tags> {
  const deleted = await this.tagsModel.findByIdAndDelete(id).exec();
  if (!deleted) {
      throw new NotFoundException(`Parking with ID ${id} not found`);
  }
  return deleted;
}
}
