import { User } from "./models/User";

const user = new User({ name: "El Power", age: 619 });

user.attributes.get("id");
user.attributes.get("id");
user.attributes.get("id");

user.sync.save();

// Before...
user.save();
