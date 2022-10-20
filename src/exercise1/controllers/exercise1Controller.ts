import { Controller } from '@nestjs/common';
import { Exercise1Service } from '../services/exercise1Service';

@Controller()
export class Exercise1Controller {
  constructor(private readonly exercise1Service: Exercise1Service) {}

  getNumbers(limit?: any): void {
    return this.exercise1Service.getNumbers(limit);
  }
}
