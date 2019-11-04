import axios from 'axios';
import { proxy, locationApiKey } from './../config';

export abstract class Location {
  abstract location: {};
  abstract cityName: string;

  async getLocation() {
    try {
      const placeData = await axios(
        `${proxy}https://api.opencagedata.com/geocode/v1/json?q=${this.cityName}&key=${locationApiKey}`
      );

      const geometry = placeData.data.results[0].geometry;

      //setting location to object itself
      this.location = {
        lat: geometry.lat,
        lng: geometry.lng
      };
    } catch (error) {
      throw new Error(error);
    }
  }
}
