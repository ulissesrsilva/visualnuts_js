import { Exercise1Service } from 'src/exercise1/services/exercise1Service';

describe('Exercise 1 Service Tests', () => {
  const exercise1Repository = {
    print: jest.fn(),
  };

  const service: Exercise1Service = new Exercise1Service(exercise1Repository);

  test('should print the correct number', () => {
    const spy = jest.spyOn(exercise1Repository, 'print');

    service.getNumbers(1);

    expect(spy).toHaveBeenCalledWith(1);
  });

  test('should return true if value is number', () => {
    const spy = jest.spyOn(service as any, 'checkIfIsNumber');
    service.getNumbers(3);
    expect(spy).toReturnWith(true);
  });

  test('should call print correct times', () => {
    const spy = jest.spyOn(service as any, 'print');
    service.getNumbers(15);
    expect(spy).toBeCalledTimes(15);
  });

  test('should limit to 100 when value is string', () => {
    const spy = jest.spyOn(service as any, 'calculateAndPrint');
    service.getNumbers('abcd');
    expect(spy).toBeCalledTimes(100);
  });
});
