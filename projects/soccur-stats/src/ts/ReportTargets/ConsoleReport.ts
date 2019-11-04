import { OutputTarget } from '../Summary';

export class ConsoleReport implements OutputTarget {
  print(data: string): void {
    console.log(data);
  }
}
