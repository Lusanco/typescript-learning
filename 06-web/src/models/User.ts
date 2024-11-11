import { Eventing } from "./Eventing";
import { Sync } from "./Sync";
import { Attributes } from "./Attributes";

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
  public attributes: Attributes<UserProps>;
  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }
}