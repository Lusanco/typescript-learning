import { User } from "./models/User";

const user = new User({ name: "El Power", age: 619 });

// quick reminder on accesors

class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person("firstname", "lastname");
console.log(person.fullName);
