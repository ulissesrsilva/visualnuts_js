import { Repository } from '../../common/interfaces/Repository';

export class Exercise1Repository implements Repository {
  print(value: any): void {
    return console.log(value);
  }
}
