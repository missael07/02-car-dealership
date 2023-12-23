import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { BRAND_SEED } from './data/brand.seed';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';

@Injectable()
export class SeedService {
  constructor(
    private cars: CarsService,
    private brands: BrandsService,
  ) {};

  populateDB() {
    this.cars.fillCarsWithSeedData(CARS_SEED);
    this.brands.fillBrandsWithSeedData(BRAND_SEED);

    return `SEED executed successfully`;
  }
}
