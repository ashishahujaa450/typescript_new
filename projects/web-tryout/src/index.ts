import { UserList } from "./View/UserList";
import { Collection } from "./Model/Collection";

import { UserProps, User } from "./Model/User";

const user = new Collection(
  "http://localhost:3000/users",
  (json: UserProps) => {
    return User.buildUser(json);
  }
);

user.on("change", () => {
  const root = document.getElementById("root");
  new UserList(root, user).render();
});

user.fetch();
