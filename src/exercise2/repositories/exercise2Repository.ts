import { Repository } from '../../common/interfaces/Repository';
import { readFileSync } from 'fs';
import { join } from 'path';

export class Exercise2Repository implements Repository {
  private readonly FILE_PATH = 'src/exercise2/resources';

  print(value: any): void {
    return console.log(value);
  }

  readFile(filename: string): string {
    try {
      const result = readFileSync(join(this.FILE_PATH, filename), 'utf-8');
      return result;
    } catch (err) {
      throw new Error('Error reading file. Please try again');
    }
  }
}
