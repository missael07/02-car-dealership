import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeedService } from './seed.service';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';

@ApiTags('SEED')
// @UsePipes(ValidationPipe)
@ApiResponse({ status: 200, description: 'Ok.' })
@ApiResponse({ status: 500, description: 'Internal Server Error.' })
@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @ApiOperation({ summary: 'Populate Data for DB in development/local environment' })
  @Get()
  runSeed() {
    return this.seedService.populateDB();
  }

}
