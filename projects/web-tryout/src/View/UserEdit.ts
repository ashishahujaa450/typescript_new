import { View } from "./View";
import { User, UserProps } from "./../Model/User";
import { UserShow } from "./UserShow";
import { UserForm } from "./UserForm";

export class UserEdit extends View<User, UserProps> {
  template(): string {
    return `
            <div class="user-show"></div>
            <div class="user-form"></div>
        `;
  }

  regionsMap = (): { [key: string]: string } => {
    return {
      userShow: ".user-show",
      userForm: ".user-form"
    };
  };

  onRender(): void {
    new UserShow(this.regions.userShow, this.model).render();
    new UserForm(this.regions.userForm, this.model).render();
  }
}
