import {User, userProps} from '../Models/User';
import {View} from './View'

export class UserShow extends View<User, userProps>{
    template = ():string => {
        return `
            <div>
                <h1>User DEtails</h1>
                <div>User Name: ${this.model.get('name')}</div>
                <div>User Age: ${this.model.get('age')}</div>
            </div>        
        `
    }
}