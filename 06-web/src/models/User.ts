import { Eventing } from "./Eventing";
import { Sync } from "./Sync";

// interface UserProps { name: string; age: number; }
// using type instead of interface
export type UserProps = {
  id?: number;
  name?: string;
  age?: number;
};

const http = "http://localhost:3000/users";

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(http);
  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
}
