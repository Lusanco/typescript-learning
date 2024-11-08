// his implementation with interfaces
// interface UserProps {
//   name: string;
//   age: number;
// }

// my try enforcing types
type UserProps = {
  name?: string;
  age?: number;
};

export class User {
  constructor(private data: UserProps) {}
  get(propName: string): number | string {
    return this.data[propName];
  }
  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
}
