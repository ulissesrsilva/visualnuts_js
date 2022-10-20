import { Exercise1Repository } from 'src/exercise1/repositories/exercise1Repository';

describe('Exercise 1 Repository Tests', () => {
  const repository: Exercise1Repository = new Exercise1Repository();

  test('should print the correct number', () => {
    const spy = jest.spyOn(repository, 'print');

    repository.print(1);

    expect(spy).toHaveBeenCalledWith(1);
  });

  test('should print the correct string', () => {
    const spy = jest.spyOn(repository, 'print');

    repository.print('Visual Nuts');

    expect(spy).toHaveBeenCalledWith('Visual Nuts');
  });
});
