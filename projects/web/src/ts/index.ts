import {UserList} from './View/userList'
import {Collection} from './Models/Collection'
import {userProps, User} from './Models/User'

const users = new Collection('http://localhost:3000/users', (json: userProps) => {
    return User.buildUser(json);
})

users.on('change', () => {
    const root = document.getElementById('root')

    if(root){
        new UserList(root, users).render()
    }
})

users.fetch()

console.log(users)