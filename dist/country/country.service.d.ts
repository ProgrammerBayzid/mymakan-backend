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
import { Country, CountryDocument } from './entities/country.entity';
import mongoose from 'mongoose';
import { State, StateDocument } from './entities/sate-entity';
import { CreateStateDto } from './dto/create-state.dto';
import { Citiy, CitiyDocument } from './entities/citiy-entity';
import { TowersOrBuildingName, TowersOrBuildingNameDocument } from './entities/tower-building.entity';
import { CreateCityDto } from './dto/create-city.dto';
import { CreateTowersOrBuildingNameDto } from './dto/towre-create.dto';
export declare class CountryService {
    private readonly countryModel;
    private readonly stateModel;
    private readonly cityModel;
    private readonly towersOrBuildingNameModel;
    constructor(countryModel: mongoose.Model<CountryDocument>, stateModel: mongoose.Model<StateDocument>, cityModel: mongoose.Model<CitiyDocument>, towersOrBuildingNameModel: mongoose.Model<TowersOrBuildingNameDocument>);
    createState(createStateDto: CreateStateDto): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, State> & State & Required<{
        _id: string;
    }>> & mongoose.Document<unknown, {}, State> & State & Required<{
        _id: string;
    }>>;
    createCity(createcityDto: CreateCityDto): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Citiy> & Citiy & Required<{
        _id: string;
    }>> & mongoose.Document<unknown, {}, Citiy> & Citiy & Required<{
        _id: string;
    }>>;
    createTower(createTowersOrBuildingNameDto: CreateTowersOrBuildingNameDto): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, TowersOrBuildingName> & TowersOrBuildingName & Required<{
        _id: string;
    }>> & mongoose.Document<unknown, {}, TowersOrBuildingName> & TowersOrBuildingName & Required<{
        _id: string;
    }>>;
    findAllCountry(page: number, limit: number, search?: string): Promise<Country[]>;
    findAllTowerName(page: number, limit: number, search?: string): Promise<TowersOrBuildingName[]>;
}
