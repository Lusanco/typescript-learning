import { Eventing } from "./Eventing";

// his implementation with interfaces
// interface UserProps {
//   name: string;
//   age: number;
// }

// my try enforcing types
export type UserProps = {
  id?: number;
  name?: string;
  age?: number;
};

export class User {
  public events: Eventing = new Eventing();
  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
}
