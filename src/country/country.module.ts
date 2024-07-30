import { Module } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryController } from './country.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CountrySchema } from './entities/country.entity';
import { CitiySchema } from './entities/citiy-entity';
import { StateSchema } from './entities/sate-entity';
import { TowersOrBuildingNameSchema } from './entities/tower-building.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Country', schema: CountrySchema },
      { name: 'Citiy', schema: CitiySchema },
      { name: 'State', schema: StateSchema },
      { name: 'TowersOrBuildingName', schema: TowersOrBuildingNameSchema },
    ]),
  ],
  controllers: [CountryController],
  providers: [CountryService],
})
export class CountryModule {}
