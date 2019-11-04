import Axios, { AxiosPromise } from 'axios';
import {userProps} from './User'

interface hasId{
  id?:number;
}

export class Sync<T extends hasId> {
  constructor(public rootUrl: string){};

    //fetch some data from json file
  fetch(id: number): AxiosPromise {
    return Axios.get(`${this.rootUrl}/${id}`)
  }

  //save some data to json file
  save(data: T): AxiosPromise {
    const id = data.id;

    if (id) {
      //put request
      return Axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      //post request
      return Axios.post(this.rootUrl, data)
    }
  }
}
