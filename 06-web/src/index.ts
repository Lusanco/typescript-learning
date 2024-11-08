import { User } from "./models/User";

const user = new User({});

user.on("change", () => {
  console.log("Change 1");
});

user.on("change", () => {
  console.log("Change 2");
});

user.on("click", () => {
  console.log("Cliked");
});

user.trigger("click");
