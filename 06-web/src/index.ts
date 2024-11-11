import { User } from "./models/User";

const user = new User({ name: "El Power", age: 619 });

// user.set({ name: "alfre", age: 40 });
user.events.on("change", () => {
  console.log("change!");
});

user.events.trigger("change");