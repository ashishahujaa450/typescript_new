import faker from 'faker';
import { mapAble } from './customMap';

export class User implements mapAble {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';
  greeting: string = 'hello i am a user';

  constructor() {
    this.name = faker.name.firstName();

    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  markerContent(): string {
    return `user name: ${this.name}`;
  }
}
