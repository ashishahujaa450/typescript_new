import { Eventing } from "./Eventing";
import Axios, { AxiosResponse } from "axios";

export class Collection<T, K> {
  model: T[] = [];
  event: Eventing = new Eventing();

  constructor(public rootUrl: string, public deserialize: (json: K) => T) {}

  get on() {
    return this.event.on;
  }

  get trigger() {
    return this.event.trigger;
  }

  fetch(): void {
    Axios.get(this.rootUrl)
      .then((response: AxiosResponse) => {
        response.data.forEach((value: K) => {
          this.model.push(this.deserialize(value));
        });

        this.trigger("change");
      })
      .catch(error => {
        console.log(error);
      });
  }
}
