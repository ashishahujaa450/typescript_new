import faker from 'faker';
import { mapAble } from './customMap';

export class Company implements mapAble {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'blue';

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();

    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  markerContent(): string {
    return `
      <div>
        <h2>Company Name: ${this.companyName}</h2>
        <h4>${this.catchPhrase}</h4>
      </div>
    `;
  }
}
