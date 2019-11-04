import {Model} from './Model';
import {Attributes} from './Attribute';
import {Eventing} from './Eventing';
import {Sync} from './Sync'
import {Collection} from './Collection'


export interface userProps {
  name?: string;
  age?: number;
  id?: number;
}

const rootUrl = 'http://localhost:3000/users'

export class User extends Model<userProps>{
  static buildUser(attrs: userProps): User{
    return new User(
      new Attributes<userProps>(attrs),
      new Eventing(),
      new Sync<userProps>(rootUrl)
    )
  }

  static buildUserCollection(): Collection<User, userProps>{
    return new Collection<User, userProps>(rootUrl, (json: userProps):User => {
      return User.buildUser(json)
    })
  }

  setRandomAge():void{
    const age = Math.round(Math.random() * 100);

    this.set({age})
  }
}
