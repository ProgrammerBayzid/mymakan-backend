"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryModule = void 0;
const common_1 = require("@nestjs/common");
const country_service_1 = require("./country.service");
const country_controller_1 = require("./country.controller");
const mongoose_1 = require("@nestjs/mongoose");
const country_entity_1 = require("./entities/country.entity");
const citiy_entity_1 = require("./entities/citiy-entity");
const sate_entity_1 = require("./entities/sate-entity");
const tower_building_entity_1 = require("./entities/tower-building.entity");
let CountryModule = class CountryModule {
};
exports.CountryModule = CountryModule;
exports.CountryModule = CountryModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'Country', schema: country_entity_1.CountrySchema },
                { name: 'Citiy', schema: citiy_entity_1.CitiySchema },
                { name: 'State', schema: sate_entity_1.StateSchema },
                { name: 'TowersOrBuildingName', schema: tower_building_entity_1.TowersOrBuildingNameSchema },
            ]),
        ],
        controllers: [country_controller_1.CountryController],
        providers: [country_service_1.CountryService],
    })
], CountryModule);
//# sourceMappingURL=country.module.js.map