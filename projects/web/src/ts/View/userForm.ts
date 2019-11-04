import {User, userProps} from './../Models/User';
import {View } from './View'

export class UserForm extends View<User, userProps>{
   


    //event map on html template not on string
    eventsMap(): { [key: string]: () => void }{
        return {
            '.set-age:click': this.onSetAgeClick,
            '.set-name:click': this.onSetNameClick,
            '.save-model:click': this.onSaveNameClick
        }
    }


    onSaveNameClick = (): void => {
        this.model.save()
    }


    //set name to use
    onSetNameClick = ():void => {
        //get name from ui
        const input = this.parent.querySelector('input')
        const name = input.value;
        //update name using set
        this.model.set({name})

    }




    //event callback
    onSetAgeClick = ():void => {
        this.model.setRandomAge();
    }


    template():string{
        return `
            <div>               
                <input placeholder="${this.model.get('name')}">
                <button class="set-name">Update name</button>
                <button class="set-age">Set Random Age</button>
                <button class="save-model">Save User</button>
            </div>
        `;
    
    }

}