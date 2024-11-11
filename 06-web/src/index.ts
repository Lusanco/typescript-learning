import { User } from "./models/User";

const user = new User({ name: "El Power", age: 619 });

console.log(user.get("name"));

user.on("change", () => {
  console.log("changed!");
});

user.set({ name: "New Name" });
