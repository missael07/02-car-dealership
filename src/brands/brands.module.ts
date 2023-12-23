import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsController } from './brands.controller';
import { CarsService } from 'src/cars/cars.service';

@Module({
  controllers: [BrandsController],
  providers: [BrandsService],
  exports: [BrandsService]
})
export class BrandsModule {}
