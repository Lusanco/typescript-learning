import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";
// convention in typescript not to use default keyword to avoid typos and confusion
// export default "red";

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "red";
  constructor() {
    this.name = faker.name.firstName("male");
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
