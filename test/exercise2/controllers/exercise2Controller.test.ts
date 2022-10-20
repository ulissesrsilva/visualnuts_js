import { Exercise2Controller } from 'src/exercise2/controllers/exercise2Controller';
import { Exercise2Repository } from 'src/exercise2/repositories/exercise2Repository';

describe('Exercise 2 Controller Tests', () => {
  test('should call countriesMapping', () => {
    const service: any = {
      mapCountries: jest.fn(),
      repository: new Exercise2Repository(),
    };

    const controller = new Exercise2Controller(service);

    controller.countriesMapping();

    expect(service.mapCountries).toHaveBeenCalledTimes(1);
  });
});
