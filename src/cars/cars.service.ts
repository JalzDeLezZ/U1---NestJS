import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      name: 'Ford',
      model: 'Mustang',
    },
    {
      id: 2,
      name: 'Audi',
      model: 'Q7',
    },
    {
      id: 3,
      name: 'BMW',
      model: 'X5',
    },
    {
      id: 4,
      name: 'Mercedes',
      model: 'C class',
    },
  ];

  findAll() {
    return this.cars;
  }

  findById(id: number) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException('Car not found');

    return car;
  }
}