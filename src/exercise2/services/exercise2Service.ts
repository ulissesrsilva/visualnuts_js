import { Injectable } from '@nestjs/common';
import { Country } from '../interfaces/Country';
import { Exercise2Repository } from '../repositories/exercise2Repository';

@Injectable()
export class Exercise2Service {
  constructor(private repository: Exercise2Repository) {}

  /**
   * @function mapCountries()
   * @returns void, prints information about the contries
   */
  mapCountries(): void {
    try {
      const data: string = this.repository.readFile('Countries.json');
      const countries = JSON.parse(data as string);

      const totalCountries: number = this.getTotalCountries(countries);
      this.print(`Total of Countries in the World: ${totalCountries}`);

      const countriesOrderByLanguage: Country[] =
        this.orderByLanguage(countries);

      const countryByLanguage: Country = this.findCountryByLanguage(
        countriesOrderByLanguage,
        'de',
      );
      this.print(
        `The country with the most official languages, where they also speak German is: ${
          countryByLanguage.country
        }. They speak ${
          countryByLanguage.languages.length
        } languages: ${countryByLanguage.languages.join(', ')}`,
      );

      this.print(
        `The country with the highest number of official languages is: ${
          countriesOrderByLanguage[0].country
        }. They speak ${
          countriesOrderByLanguage[0].languages.length
        } languages: ${countriesOrderByLanguage[0].languages.join(', ')}`,
      );

      const language: { name: string; countries: string[] } =
        this.findCommonLanguage(countries);
      this.print(
        `The most common official language is: ${language.name}, and it's spoken in ${language.countries.length} countries.`,
      );
    } catch (err) {
      console.log(err);
      this.print('Interval Server Error.');
    }
  }

  /**
   * @function print()
   * @param {number} value value to print
   * @returns void, print the value
   */
  private print(value: number | string): void {
    return this.repository.print(value);
  }

  /**
   * @function getTotalCountries()
   * @param {Country[]} countries array of countries
   * @returns {number} total of countries
   */
  private getTotalCountries(countries: Country[]): number {
    return countries.length;
  }

  /**
   * @function findCountryByLanguage()
   * @param {Country[]} countries array of countries
   * @param {string} language language to find
   * @returns {Country} country with the most official languages, where they also speak {language}
   */
  private findCountryByLanguage(
    countries: Country[],
    language: string,
  ): Country {
    return countries.find((country) => country.languages.includes(language));
  }

  /**
   * @function orderByLanguage()
   * @param {Country[]} countries array of countries
   * @returns {Country[]} array of countries ordered by the number of official languages
   */
  private orderByLanguage(countries: Country[]): Country[] {
    const countriesOrderByLanguage = countries.sort((a, b) => {
      if (a.languages.length > b.languages.length) {
        return -1;
      }
      if (a.languages.length < b.languages.length) {
        return 1;
      }
      return 0;
    });

    return countriesOrderByLanguage;
  }

  /**
   * @function findCommonLanguage()
   * @param {Country[]} countries array of countries
   * @returns {name: string, countries: string[]]} object with the most common official language and the countries that speak it
   */
  private findCommonLanguage(countries: Country[]): {
    name: string;
    countries: string[];
  } {
    const languages = countries.reduce((acc, country) => {
      country.languages.forEach((lang) => {
        if (acc[lang]) {
          acc[lang].push(country.country);
        } else {
          acc[lang] = [country.country];
        }
      });
      return acc;
    }, {});
    const auxLanguages: Array<any> = Object.entries(languages);
    const mostOffical: number = auxLanguages.reduce(
      (acc, language, index) =>
        language[1].length > auxLanguages[acc][1].length ? index : acc,
      0,
    );

    return {
      name: auxLanguages[mostOffical][0],
      countries: auxLanguages[mostOffical][1],
    };
  }
}
