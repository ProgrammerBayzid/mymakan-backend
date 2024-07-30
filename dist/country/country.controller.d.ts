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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { CountryService } from './country.service';
import { Country } from './entities/country.entity';
import { CreateStateDto } from './dto/create-state.dto';
import { State } from './entities/sate-entity';
import { CreateCityDto } from './dto/create-city.dto';
import { Citiy } from './entities/citiy-entity';
import { CreateTowersOrBuildingNameDto } from './dto/towre-create.dto';
import { TowersOrBuildingName } from './entities/tower-building.entity';
export declare class CountryController {
    private readonly countryService;
    constructor(countryService: CountryService);
    createstate(createStateDto: CreateStateDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, State> & State & Required<{
        _id: string;
    }>> & import("mongoose").Document<unknown, {}, State> & State & Required<{
        _id: string;
    }>>;
    createcity(createCityDto: CreateCityDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Citiy> & Citiy & Required<{
        _id: string;
    }>> & import("mongoose").Document<unknown, {}, Citiy> & Citiy & Required<{
        _id: string;
    }>>;
    createTower(createTowersOrBuildingNameDto: CreateTowersOrBuildingNameDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, TowersOrBuildingName> & TowersOrBuildingName & Required<{
        _id: string;
    }>> & import("mongoose").Document<unknown, {}, TowersOrBuildingName> & TowersOrBuildingName & Required<{
        _id: string;
    }>>;
    getAllCountry(page?: number, limit?: number, search?: string): Promise<Country[]>;
    getAllTower(page?: number, limit?: number, search?: string): Promise<TowersOrBuildingName[]>;
}
