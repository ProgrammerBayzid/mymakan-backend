import { Module } from '@nestjs/common';
import { PostFieldDataService } from './post-field-data.service';
import { PostFieldDataController } from './post-field-data.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ParkingSchema } from './entities/parking.entity.dto';
import { PropertyCategorySchema } from './entities/propertycategoryentity.dto';
import { PropertyTypeSchema } from './entities/PropertyTypeEntity.dto';
import { SellTypeSchema } from './entities/sellType.entity.dto';
import { TagsSchema } from './entities/tags.entity.dto';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Parking', schema: ParkingSchema },
      { name: 'PropertyCategory', schema: PropertyCategorySchema },
      { name: 'PropertyType', schema: PropertyTypeSchema },
      { name: 'SellType', schema: SellTypeSchema },
      { name: 'Tags', schema: TagsSchema },
    ]),
  ],
  controllers: [PostFieldDataController],
  providers: [PostFieldDataService],
})
export class PostFieldDataModule {}
