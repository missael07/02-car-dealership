import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Brands')
// @UsePipes(ValidationPipe)
@ApiResponse({ status: 200, description: 'Ok.' })
@ApiResponse({ status: 201, description: 'Created.' })
@ApiResponse({ status: 400, description: 'Bad Request.' })
@ApiResponse({ status: 404, description: 'Not Found.' })
@ApiResponse({ status: 403, description: 'Forbidden.' })
@ApiResponse({ status: 500, description: 'Internal Server Error.' })
@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @ApiOperation({ summary: 'Create Brand' })
  @Post()
  create(@Body() createBrandDto: CreateBrandDto) {
    return this.brandsService.create(createBrandDto);
  }

  @ApiOperation({ summary: 'Get Brands List' })
  @Get()
  findAll() {
    return this.brandsService.findAll();
  }

  @ApiOperation({ summary: 'Get Brand by ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.brandsService.findOne(id);
  }

  @ApiOperation({ summary: 'Update Brand' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBrandDto: UpdateBrandDto) {
    return this.brandsService.update(id, updateBrandDto);
  }

  @ApiOperation({ summary: 'Delete Brand' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.brandsService.remove(id);
  }
}
