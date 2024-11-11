import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";

// his implementation with interfaces
// interface UserProps {
//   name: string;
//   age: number;
// }

// my try enforcing types
type UserProps = {
  id?: number;
  name?: string;
  age?: number;
};

const http = "http://localhost:3000/users/";

export class User {
  public events: Eventing = new Eventing();
  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  fetch(): void {
    axios
      .get(`${http}${this.get("id")}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }

  save(): void {
    const id = this.get("id");
    if (this.get("id")) {
      // put
      axios.put(`${http}${id}`, this.data);
    } else {
      // post
      axios.post(`${http}`, this.data);
    }
  }
}
