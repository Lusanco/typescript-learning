import { OutputTarget } from "../Summary";

export class ConsoleRport implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}
