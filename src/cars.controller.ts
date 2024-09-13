import { Body, Controller, Get, ParseIntPipe, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { UpdateCarDTO } from './dtos/update-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private carsService: CarsService) {}

  @Post()
  createCar(@Body() body:any) {
    return this.carsService.createCar(body);
  }

  @Get()
  getCars() {
    return this.carsService.getCars();
  }

  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id:string) {
    return this.carsService.getCarById(id);
  }

  @Patch(':id')
  updateCarById(@Param('id', ParseIntPipe) id: string, @Body() body: UpdateCarDTO)
}
