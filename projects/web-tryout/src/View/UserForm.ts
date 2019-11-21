import { User, UserProps } from "../Model/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      "click: .set-age": this.setRandomAge,
      "click: .set-name": this.setName,
      "click: .save-model": this.saveModel
    };
  }

  saveModel = (): void => {
    this.model.save();
  };

  setRandomAge = (): void => {
    this.model.setRandomAge();
  };

  setName = (): void => {
    const name = this.parent.querySelector("input").value;
    this.model.set({ name: name });
  };

  template(): string {
    return `
            <div>
                <input placeholder="${this.model.get(
                  "name"
                )}"><button class="set-name">set name</button>
                <button class="set-age">Set Random Age</button>
                <button class="save-model">save model</button>
            </div>
        `;
  }
}
