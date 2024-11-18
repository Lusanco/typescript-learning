import { UserForm } from "./views/UserForm";
import { User } from "./models/User";

const user = User.buildUser({ name: "NAME", age: 20 });

// Prev way working code w/type assertion
// const root = document.getElementById("root");
// const userForm = new UserForm(root as Element, user);

const root = document.getElementById("root");

// with type guards
if (root) {
  const userForm = new UserForm(root, user);
  userForm.render();
} else {
  throw new Error("Root element not found");
}
