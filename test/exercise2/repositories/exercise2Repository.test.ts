import { Exercise2Repository } from 'src/exercise2/repositories/exercise2Repository';

describe('Exercise 2 Repository Tests', () => {
  const repository: Exercise2Repository = new Exercise2Repository();

  test('should print the correct string', () => {
    const spy = jest.spyOn(repository, 'print');

    repository.print('Visual Nuts');

    expect(spy).toHaveBeenCalledWith('Visual Nuts');
  });

  test('should read the correct file', () => {
    const spy = jest.spyOn(repository, 'readFile');

    repository.readFile('Countries.json');

    expect(spy).toHaveBeenCalledWith('Countries.json');
  });

  test('should throw an error when reading a file', () => {
    const spy = jest.spyOn(repository, 'readFile');
    spy.mockImplementationOnce(() => {
      throw new Error('Error reading file. Please try again');
    });
    try {
      repository.readFile('v.txt');
    } catch (err) {
      expect(spy).toThrow();
      expect(err.message).toBe('Error reading file. Please try again');
    }
  });
});
