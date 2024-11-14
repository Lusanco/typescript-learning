import { Model } from "./Model";

// interface UserProps { name: string; age: number; }
// using type instead of interface
export type UserProps = {
  id?: number;
  name?: string;
  age?: number;
};

const http = "http://localhost:3000/users";

export class User extends Model<UserProps> {}
