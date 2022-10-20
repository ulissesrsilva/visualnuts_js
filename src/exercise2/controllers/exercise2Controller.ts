import { Controller } from '@nestjs/common';
import { Exercise2Service } from '../services/exercise2Service';

@Controller()
export class Exercise2Controller {
  constructor(private readonly exercise2Service: Exercise2Service) {}

  async countriesMapping(): Promise<void> {
    return await this.exercise2Service.mapCountries();
  }
}
