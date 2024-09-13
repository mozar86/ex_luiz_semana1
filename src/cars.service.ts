import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateCarDTO } from './dtos/update-car.dto';

@Injectable()
export class CarsService {
  createCar(body: any) {
    return body;
  }

  getCars() {
    return { message: 'All cars returned' };
  }

  getCarById(id: number) {
    const car = this.getCarById.find((car) => car.id === id);

    if(!car) {
      throw new NotFoundException(`A car with id ${id} is not found`)
    }

    return car;
  }

  updateCarById(id: number, body: UpdateCarDTO) {
    const carToUpdate = this.getCarById(id)

    Object.assign(carToUpdate, body)

    return carToUpdate;
  }

}
