import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: false, default: "" },
  dob: { type: String, required: false, default: "" },
  created_at: { type: Number, required: true },
});

export const userModel = mongoose.model("User", userSchema);
