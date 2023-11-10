import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: String,
    password: String,
    name: String,
    dob: String
  },
  { timestamps: true }
);

export const UserSchema = mongoose.model("Users", userSchema);
