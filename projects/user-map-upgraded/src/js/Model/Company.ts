import { Mapable } from './CustomMap';
import { Location } from './Location';

export class Company extends Location implements Mapable {
  location: {
    lat: number;
    lng: number;
  };

  constructor(
    public name: string,
    public phraseName: string,
    public cityName: string
  ) {
    super();
  }

  markerContent(): string {
    return `
        <div>
            <h2>${this.name} is a great company to work around</h2>
            <h4>we believe in ${this.phraseName}</h4>
        </div>
      `;
  }
}
