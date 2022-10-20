import { Exercise2Service } from 'src/exercise2/services/exercise2Service';

describe('Exercise 2 Service Tests', () => {
  const exercise2Repository = {
    print: jest.fn(),
    readFile: jest.fn(),
    FILE_PATH: 'src/exercise2/resources',
  };

  const service: Exercise2Service = new Exercise2Service(
    exercise2Repository as any,
  );

  beforeAll(() => {
    jest.spyOn(exercise2Repository, 'readFile').mockImplementation(() => {
      return JSON.stringify([
        {
          country: 'US',
          languages: ['en'],
        },
        {
          country: 'BE',
          languages: ['nl', 'fr', 'de'],
        },
        {
          country: 'NL',
          languages: ['nl', 'de'],
        },
        {
          country: 'DE',
          languages: ['de'],
        },
        {
          country: 'ES',
          languages: ['es'],
        },
      ]);
    });
  });

  test('should call readFile', () => {
    const spy = jest.spyOn(exercise2Repository, 'readFile');

    service.mapCountries();

    expect(spy).toHaveBeenCalledWith('Countries.json');
  });

  test('should return true if value is number', () => {
    const spy = jest.spyOn(service as any, 'getTotalCountries');
    service.mapCountries();
    expect(spy).toReturnWith(5);
  });

  test('should return true if value is number', () => {
    const spy = jest.spyOn(service as any, 'findCountryByLanguage');
    service.mapCountries();
    expect(spy).toBeCalledWith(
      [
        {
          country: 'BE',
          languages: ['nl', 'fr', 'de'],
        },
        {
          country: 'NL',
          languages: ['nl', 'de'],
        },
        {
          country: 'US',
          languages: ['en'],
        },
        {
          country: 'DE',
          languages: ['de'],
        },
        {
          country: 'ES',
          languages: ['es'],
        },
      ],
      'de',
    );
  });

  test('should throw Error', () => {
    jest.spyOn(exercise2Repository, 'readFile').mockImplementationOnce(() => {
      throw new Error();
    });

    const spy = jest.spyOn(service as any, 'print');

    service.mapCountries();

    expect(spy).toHaveBeenCalledWith('Interval Server Error.');
  });

  test('should return most common language correctly', () => {
    const spy = jest.spyOn(service as any, 'findCommonLanguage');

    service.mapCountries();

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
