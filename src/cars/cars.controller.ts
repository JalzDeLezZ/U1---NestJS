import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly _carService: CarsService) {}

  @Get()
  findAll() {
    return this._carService.findAll();
  }

  @Get(':id')
  getCardById(@Param('id', ParseUUIDPipe) id: string) {
    console.log({ id });
    return this._carService.findById(id);
  }

  @Post()
  createCar(@Body() oForm: any) {
    return oForm;
    // return this._carService.createCar(oForm);
  }

  @Patch(':id')
  updateCar(@Param('id', ParseIntPipe) id: number, @Body() oForm: any) {
    return `This action updates a #${id} car with ${JSON.stringify(oForm)}`;
    // return this._carService.updateCar(id, oForm);
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return `This action deletes a #${id} car`;
    // return this._carService.deleteCar(id);
  }
}
