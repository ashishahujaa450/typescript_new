import {Eventing} from './Eventing'
import Axios, { AxiosResponse } from 'axios';


export class Collection<T, K>{
    model: T[] = [];
    event: Eventing = new Eventing();

    constructor(
        public rooUrl: string,
        public deserialize: (json: K) => T){}

    get on(){
        return this.event.on;
    }

    get trigger(){
        return this.event.trigger;
    }

    fetch():void{
        Axios.get(this.rooUrl).then((response: AxiosResponse) => {
            response.data.forEach((value: K) => {
                this.model.push(this.deserialize(value));
            })

            //to give signal to the app that data has been changed
            this.trigger('change')
        })
    }
}