import { Location } from './Location';
import { Mapable } from './CustomMap';

export class User extends Location implements Mapable {
  location: {
    lat: number;
    lng: number;
  };
  constructor(public name: string, public cityName: string) {
    super();
  }

  markerContent(): string {
    return `
        Hi I am ${this.name}, wishing you a great day!
    `;
  }
}
