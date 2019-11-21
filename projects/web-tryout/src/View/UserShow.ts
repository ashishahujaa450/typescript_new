import { View } from "./View";
import { User, UserProps } from "./../Model/User";

export class UserShow extends View<User, UserProps> {
  template(): string {
    return `
          <div>
            <h1>User Form</h1>
            <div>User NAME: ${this.model.get("name")}</div>
            <div>User Age: ${this.model.get("age")}</div>
           <div>
        `;
  }
}
