import mongoose from "mongoose";

//shape data
const userSchema = new mongoose.Schema(
  {
    username: { type: String, require: true },
    password: { type: String, require: true },
    name: { type: String, require: true },
    dob: { type: String, require: true },
  },
  {
    timestamps: true, // createdAt, updatedAt
  },
);
export const User = mongoose.model("user", userSchema);
