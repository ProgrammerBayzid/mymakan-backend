"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const country_entity_1 = require("./entities/country.entity");
const mongoose_2 = require("mongoose");
const sate_entity_1 = require("./entities/sate-entity");
const citiy_entity_1 = require("./entities/citiy-entity");
const tower_building_entity_1 = require("./entities/tower-building.entity");
let CountryService = class CountryService {
    constructor(countryModel, stateModel, cityModel, towersOrBuildingNameModel) {
        this.countryModel = countryModel;
        this.stateModel = stateModel;
        this.cityModel = cityModel;
        this.towersOrBuildingNameModel = towersOrBuildingNameModel;
    }
    async createState(createStateDto) {
        const { country_id } = createStateDto;
        const commentData = {
            ...createStateDto,
        };
        const createdState = new this.stateModel(commentData);
        const savedPost = await createdState.save();
        const stateId = savedPost._id;
        await this.countryModel.findByIdAndUpdate(country_id, { $push: { states: stateId } }, { new: true, useFindAndModify: false });
        return savedPost;
    }
    async createCity(createcityDto) {
        const { state_id } = createcityDto;
        const commentData = {
            ...createcityDto,
        };
        const createdcity = new this.cityModel(commentData);
        const savedPost = await createdcity.save();
        const cityId = savedPost._id;
        await this.stateModel.findByIdAndUpdate(state_id, { $push: { cites: cityId } }, { new: true, useFindAndModify: false });
        return savedPost;
    }
    async createTower(createTowersOrBuildingNameDto) {
        const { city_id } = createTowersOrBuildingNameDto;
        const towerData = {
            ...createTowersOrBuildingNameDto,
        };
        const createdTower = new this.towersOrBuildingNameModel(towerData);
        const saved = await createdTower.save();
        const towerId = saved._id;
        await this.cityModel.findByIdAndUpdate(city_id, { $push: { towersorBuildingName: towerId } }, { new: true, useFindAndModify: false });
        return saved;
    }
    async findAllCountry(page, limit, search) {
        const query = search ? { name: new RegExp(search, 'i') } : {};
        return this.countryModel
            .find(query)
            .populate({
            path: 'states',
            populate: {
                path: 'cites',
                populate: { path: "towersorBuildingName" }
            }
        })
            .skip((page - 1) * limit)
            .limit(limit)
            .exec();
    }
    async findAllTowerName(page, limit, search) {
        const query = search ? { name: new RegExp(search, 'i') } : {};
        if (search) {
            return this.towersOrBuildingNameModel
                .find(query)
                .exec();
        }
        else {
            return this.towersOrBuildingNameModel
                .find(query)
                .skip((page - 1) * limit)
                .limit(limit)
                .exec();
        }
    }
};
exports.CountryService = CountryService;
exports.CountryService = CountryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(country_entity_1.Country.name)),
    __param(1, (0, mongoose_1.InjectModel)(sate_entity_1.State.name)),
    __param(2, (0, mongoose_1.InjectModel)(citiy_entity_1.Citiy.name)),
    __param(3, (0, mongoose_1.InjectModel)(tower_building_entity_1.TowersOrBuildingName.name)),
    __metadata("design:paramtypes", [mongoose_2.default.Model, mongoose_2.default.Model, mongoose_2.default.Model, mongoose_2.default.Model])
], CountryService);
//# sourceMappingURL=country.service.js.map