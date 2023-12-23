import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@ApiTags('Cars')
// @UsePipes(ValidationPipe)
@ApiResponse({ status: 200, description: 'Ok.' })
@ApiResponse({ status: 201, description: 'Created.' })
@ApiResponse({ status: 400, description: 'Bad Request.' })
@ApiResponse({ status: 404, description: 'Not Found.' })
@ApiResponse({ status: 403, description: 'Forbidden.' })
@ApiResponse({ status: 500, description: 'Internal Server Error.' })
@Controller('cars')
export class CarsController {

  constructor(private _carsService: CarsService) {}

  @Get()
  @ApiOperation({ summary: 'Get Cars List' })
  getAllCars() {
    return this._carsService.getAllCars();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get specific car by the id given' })
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    return this._carsService.getCarById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create car' })
  async create(@Body() createCarDto: CreateCarDto): Promise<any> {
    return this._carsService.createCar(createCarDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update car' })
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDto: UpdateCarDto,
  ): Promise<any> {
    return this._carsService.updateCar(id, updateCarDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete car' })
  async delete(@Param('id', ParseUUIDPipe) id: string): Promise<any> {
    return this._carsService.deleteCar(id);
  }
}
