import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private _cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Nissan',
      model: 'Sentra',
    },
    {
      id: uuid(),
      brand: 'Ford',
      model: 'Mustang',
    },
  ];

  getAllCars() {
    return this._cars;
  }

  getCarById(id: string) {
    const car = this._cars.find((f) => f.id === id);
    if (!car) throw new NotFoundException(`Car with ID: ${id} not found.`);
    return car;
  }

  createCar(createCarDto: CreateCarDto) {
    const exists = this._cars.find(
      (f) => f.model === createCarDto.model && f.brand === createCarDto.brand,
    );

    if (exists) throw new BadRequestException('This Car already Exists');
    const car: Car = {
      id: uuid(),
      ...createCarDto,
    };

    this._cars.push(car);

    return car;
  }

  updateCar(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.getCarById(id);

    this._cars = this._cars.map((car) => {
      if (car.id === id) {
        carDB = {...carDB, ...updateCarDto, id};
        return carDB;
      }
      return car;
    });

    return carDB;
  }

  deleteCar(id: string) {
    this.getCarById(id);

    this._cars = this._cars.filter( f => f.id !== id);
  }
}
