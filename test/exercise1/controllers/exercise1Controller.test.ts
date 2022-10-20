import { Exercise1Controller } from 'src/exercise1/controllers/exercise1Controller';
import { Exercise1Repository } from 'src/exercise1/repositories/exercise1Repository';

describe('Exercise 1 Controller Tests', () => {
  test('should call getNumbers', () => {
    const service: any = {
      getNumbers: jest.fn(),
      print: jest.fn(),
      calculateAndPrint: jest.fn(),
      checkIfIsNumber: jest.fn(),
      repository: new Exercise1Repository(),
    };

    const controller = new Exercise1Controller(service);

    controller.getNumbers(1);

    expect(service.getNumbers).toHaveBeenCalledWith(1);
  });
});
