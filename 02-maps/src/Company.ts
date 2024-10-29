import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "red";
  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `
    <div class="flex flex-col">
    <h1 class="text-xl font-semibold">Company Name: ${this.companyName}</h1>
    <h3 class="text-slate-500 font-bold">Catchphrase: ${this.catchPhrase}</h3>
    </div>
    `;
  }
}
