import Axios, { AxiosPromise } from "axios";

interface HasId {
  id?: number;
}

export class Sync<T extends HasId> {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return Axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    const id = data.id;

    if (id) {
      //put
      return Axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      //post
      return Axios.post(this.rootUrl, data);
    }
  }
}
