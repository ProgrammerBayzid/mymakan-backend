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
exports.CountryController = void 0;
const common_1 = require("@nestjs/common");
const country_service_1 = require("./country.service");
const public_decorator_1 = require("../common/public.decorator");
const swagger_1 = require("@nestjs/swagger");
const country_entity_1 = require("./entities/country.entity");
const create_state_dto_1 = require("./dto/create-state.dto");
const sate_entity_1 = require("./entities/sate-entity");
const create_city_dto_1 = require("./dto/create-city.dto");
const citiy_entity_1 = require("./entities/citiy-entity");
const towre_create_dto_1 = require("./dto/towre-create.dto");
const tower_building_entity_1 = require("./entities/tower-building.entity");
let CountryController = class CountryController {
    constructor(countryService) {
        this.countryService = countryService;
    }
    createstate(createStateDto) {
        return this.countryService.createState(createStateDto);
    }
    createcity(createCityDto) {
        return this.countryService.createCity(createCityDto);
    }
    createTower(createTowersOrBuildingNameDto) {
        return this.countryService.createTower(createTowersOrBuildingNameDto);
    }
    async getAllCountry(page = 1, limit = 246, search) {
        return this.countryService.findAllCountry(page, limit, search);
    }
    async getAllTower(page = 1, limit = 246, search) {
        return this.countryService.findAllTowerName(page, limit, search);
    }
};
exports.CountryController = CountryController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)("/state"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Save new features-photo' }),
    (0, swagger_1.ApiBody)({
        type: create_state_dto_1.CreateStateDto,
    }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The FeaturesPhoto has been successfully created.',
        type: [sate_entity_1.State],
    }),
    (0, swagger_1.ApiCreatedResponse)({ type: sate_entity_1.State }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_state_dto_1.CreateStateDto]),
    __metadata("design:returntype", void 0)
], CountryController.prototype, "createstate", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)("city"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Save new features-photo' }),
    (0, swagger_1.ApiBody)({
        type: create_city_dto_1.CreateCityDto,
    }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The FeaturesPhoto has been successfully created.',
        type: [citiy_entity_1.Citiy],
    }),
    (0, swagger_1.ApiCreatedResponse)({ type: citiy_entity_1.Citiy }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_city_dto_1.CreateCityDto]),
    __metadata("design:returntype", void 0)
], CountryController.prototype, "createcity", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)("tower"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Save new features-photo' }),
    (0, swagger_1.ApiBody)({
        type: towre_create_dto_1.CreateTowersOrBuildingNameDto,
    }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The FeaturesPhoto has been successfully created.',
        type: [tower_building_entity_1.TowersOrBuildingName],
    }),
    (0, swagger_1.ApiCreatedResponse)({ type: tower_building_entity_1.TowersOrBuildingName }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [towre_create_dto_1.CreateTowersOrBuildingNameDto]),
    __metadata("design:returntype", void 0)
], CountryController.prototype, "createTower", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all saved Country' }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: Number, description: 'Page number for pagination' }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: Number, description: 'Number of items per page' }),
    (0, swagger_1.ApiQuery)({ name: 'search', required: false, type: String, description: 'Search term for company name' }),
    (0, swagger_1.ApiOkResponse)({ type: [country_entity_1.Country] }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'List of country fetched successfully.',
        type: [country_entity_1.Country],
        isArray: true,
    }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String]),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "getAllCountry", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)("/tower"),
    (0, swagger_1.ApiOperation)({ summary: 'Get all saved TowersOrBuildingName' }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: Number, description: 'Page number for pagination' }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: Number, description: 'Number of items per page' }),
    (0, swagger_1.ApiQuery)({ name: 'search', required: false, type: String, description: 'Search term for company name' }),
    (0, swagger_1.ApiOkResponse)({ type: [tower_building_entity_1.TowersOrBuildingName] }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'List of country fetched successfully.',
        type: [tower_building_entity_1.TowersOrBuildingName],
        isArray: true,
    }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String]),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "getAllTower", null);
exports.CountryController = CountryController = __decorate([
    (0, swagger_1.ApiTags)('country'),
    (0, common_1.Controller)('country'),
    __metadata("design:paramtypes", [country_service_1.CountryService])
], CountryController);
//# sourceMappingURL=country.controller.js.map