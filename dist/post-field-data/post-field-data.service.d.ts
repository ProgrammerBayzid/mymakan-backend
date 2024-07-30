/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
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
export declare class PostFieldDataService {
    private parkingModel;
    private propertyCategoryModel;
    private propertyTypeModel;
    private sellTypeModel;
    private tagsModel;
    constructor(parkingModel: mongoose.Model<ParkingDocument>, propertyCategoryModel: mongoose.Model<PropertyCategoryDocument>, propertyTypeModel: mongoose.Model<PropertyTypeDocument>, sellTypeModel: mongoose.Model<SellTypeDocument>, tagsModel: mongoose.Model<TagsDocument>);
    createParking(createParkingDto: CreateParkingDto): Promise<Parking>;
    createPropertyCategory(createPropertyCategoryDto: CreatePropertyCategoryDto): Promise<PropertyCategory>;
    createPropertyType(createPropertyTypeDto: CreatePropertyTypeDto): Promise<PropertyType>;
    createSellType(createSellTypeDto: CreateSellTypeDto): Promise<SellType>;
    createTags(createTagsDto: CreateTagsDto): Promise<Tags>;
    findAllParking(): Promise<Parking[]>;
    findAllPropertyCategory(): Promise<PropertyCategory[]>;
    findAllPropertyType(): Promise<PropertyType[]>;
    findAllSellType(): Promise<SellType[]>;
    findAllTags(): Promise<Tags[]>;
    updateParking(id: string, updateParkingDto: UpdateParkingDto): Promise<Parking>;
    updatePropertyCategory(id: string, updatePropertyCategoryDto: UpdatePropertyCategoryDto): Promise<PropertyCategory>;
    updatePropertyType(id: string, updatePropertyTypeDto: UpdatePropertyTypeDto): Promise<PropertyType>;
    updateSellType(id: string, updateSellTypeDto: UpdateSellTypeDto): Promise<SellType>;
    updateTags(id: string, updateTagsDto: UpdateTagsDto): Promise<Tags>;
    deleteParking(id: string): Promise<Parking>;
    deletePropertyCategory(id: string): Promise<PropertyCategory>;
    deletePropertyType(id: string): Promise<PropertyType>;
    deleteSellType(id: string): Promise<SellType>;
    deleteTags(id: string): Promise<Tags>;
}
