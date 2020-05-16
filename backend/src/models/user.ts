import { model, Schema } from "mongoose";

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    default: "",
  },
  lastName: {
    type: String,
    required: true,
    default: "",
  },
  username: {
    type: String,
    required: true,
    default: "",
  },
  password: {
    type: String,
    required: true,
    default: "",
  },
  avatar: {
    type: String,
    required: false,
    default: null,
  },
});

export const User = model("User", userSchema, "users");
