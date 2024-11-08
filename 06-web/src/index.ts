import { User } from "./models/User";

const user = new User({});

user.set({ name: "NewName", age: 88 });

user.set({ name: "onlyName" });

console.log(user.get("name"));
console.log(user.get("age"));
