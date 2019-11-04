import { AxiosPromise, AxiosResponse } from "axios";

interface ModerAttribute<T>{
    set(update: T):void;
    getAll(): T;
    get<K extends keyof T>(key: K): T[K];
}

interface Sync<T>{
    fetch(id: number): AxiosPromise;
    save(data: T): AxiosPromise;
}

interface Events{
    on(eventName: string, callback: () => void):void;
    trigger(eventName: string):void;
}

interface HasId{
    id?:number;
}

export class Model<T extends HasId>{
    constructor(private attribute: ModerAttribute<T>, private event: Events, private sync: Sync<T>){
        
    }

    get on(){
        return this.event.on;
      }
    
      get trigger(){
        return this.event.trigger;
      }
    
      get get(){
        return this.attribute.get;
      }
    
      set(update: T){
        this.attribute.set(update);
        this.event.trigger('change')
      }
      
      fetch():void{
        const id = this.attribute.get('id');
    
        if(id){
          this.sync.fetch(id).then((response: AxiosResponse):void => {
            this.set(response.data)
          })
        } else {
          throw new Error('cant get data without an id')
        }
      }
    
      save():void{
        this.sync.save(this.attribute.getAll()).then((response):void => {
          this.trigger('save')
        }).catch(() => {
          this.trigger('error')
        })
      }
}