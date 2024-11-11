import { User } from "./models/User";

const user = new User({ name: "El Power", age: 619 });

user.on("change", () => {
  console.log("user was changed");
});
