import { Injectable } from '@nestjs/common';
import { Exercise1Repository } from '../repositories/exercise1Repository';
import { Messages } from '../enums/Messages';

@Injectable()
export class Exercise1Service {
  constructor(private repository: Exercise1Repository) {}

  /**
   * @function getNumbers()
   * @param {any} value value to be the limit of the loop
   * @returns void, print the correct message or the value
   */
  getNumbers(value: any): void {
    const limit: number = this.checkIfIsNumber(value) ? value : 100;

    for (let i = 1; i <= limit; i++) {
      this.calculateAndPrint(i);
    }
  }

  /**
   * @function checkIfIsNumber()
   * @param {any} value value to check if is a number
   * @returns true if is a number, false if not
   */
  private checkIfIsNumber(value: any): boolean {
    return !isNaN(value);
  }

  /**
   * @function calculateAndPrint()
   * @param {number} value value to calculate and print
   * @returns void, print the correct message or the value
   */
  private calculateAndPrint(value: number): void {
    const isMultipleOf3: boolean = value % 3 === 0;
    const isMultipleOf5: boolean = value % 5 === 0;
    const isMultipleOf3And5: boolean = isMultipleOf3 && isMultipleOf5;

    if (isMultipleOf3And5) {
      return this.print(Messages.VISUAL_NUTS);
    } else if (isMultipleOf3) {
      return this.print(Messages.VISUAL);
    } else if (isMultipleOf5) {
      return this.print(Messages.NUTS);
    }

    return this.print(value);
  }

  /**
   * @function print()
   * @param {number} value value to print
   * @returns void, print the value
   */
  private print(value: number | string): void {
    return this.repository.print(value);
  }
}
