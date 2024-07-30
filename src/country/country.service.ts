import { Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Country, CountryDocument } from './entities/country.entity';
import mongoose from 'mongoose';
import { State, StateDocument } from './entities/sate-entity';
import { CreateStateDto } from './dto/create-state.dto';
import { Citiy, CitiyDocument } from './entities/citiy-entity';
import { TowersOrBuildingName, TowersOrBuildingNameDocument } from './entities/tower-building.entity';
import { CreateCityDto } from './dto/create-city.dto';
import { CreateTowersOrBuildingNameDto } from './dto/towre-create.dto';
import path from 'path';

@Injectable()
export class CountryService {
  constructor(
    @InjectModel(Country.name)
    private readonly countryModel: mongoose.Model<CountryDocument>,
    @InjectModel(State.name)
    private readonly stateModel: mongoose.Model<StateDocument>,
    @InjectModel(Citiy.name)
    private readonly cityModel: mongoose.Model<CitiyDocument>,
    @InjectModel(TowersOrBuildingName.name)
    private readonly towersOrBuildingNameModel: mongoose.Model<TowersOrBuildingNameDocument>,

  ) {}

  async createState( createStateDto: CreateStateDto) {
    const { country_id } = createStateDto;
    const commentData = {
      ...createStateDto,
  };
    const createdState = new this.stateModel(commentData);
    const savedPost = await createdState.save();
    const stateId = savedPost._id;
    await this.countryModel.findByIdAndUpdate(
      country_id,
      { $push: { states: stateId } },
      { new: true, useFindAndModify: false }
    );
    return savedPost;
  }
  async createCity( createcityDto: CreateCityDto) {
    const { state_id } = createcityDto;
    const commentData = {
      ...createcityDto,
  };
    const createdcity = new this.cityModel(commentData);
    const savedPost = await createdcity.save();
    const cityId = savedPost._id;
    await this.stateModel.findByIdAndUpdate(
      state_id,
      { $push: { cites: cityId } },
      { new: true, useFindAndModify: false }
    );
    return savedPost;
  }
  async createTower( createTowersOrBuildingNameDto: CreateTowersOrBuildingNameDto) {
    const { city_id } = createTowersOrBuildingNameDto;
    const towerData = {
      ...createTowersOrBuildingNameDto,
  };
    const createdTower = new this.towersOrBuildingNameModel(towerData);
    const saved = await createdTower.save();
    const towerId = saved._id;
    await this.cityModel.findByIdAndUpdate(
      city_id,
      { $push: { towersorBuildingName: towerId } },
      { new: true, useFindAndModify: false }
    );
    return saved;
  }


  async findAllCountry(page: number, limit: number, search?: string): Promise<Country[]> {
    const query = search ? { name: new RegExp(search, 'i') } : {};
    return this.countryModel
      .find(query)
      .populate({
        path: 'states',
        populate: {
          path: 'cites', // Assuming `State` has a `cities` field that references the `City` model
          populate:{ path: "towersorBuildingName"}
        }
      })
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();
  }


  async findAllTowerName(page: number, limit: number, search?: string): Promise<TowersOrBuildingName[]> {
    const query = search ? { name: new RegExp(search, 'i') } : {};
  
    if (search) {
      // If search is provided, fetch all data without pagination
      return this.towersOrBuildingNameModel
        .find(query)
        .exec();
    } else {
      // If no search is provided, paginate the results
      return this.towersOrBuildingNameModel
        .find(query)
        .skip((page - 1) * limit)
        .limit(limit)
        .exec();
    }
  }
  
  


}
