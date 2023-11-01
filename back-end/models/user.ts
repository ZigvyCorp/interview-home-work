import mongoose, { Schema, model } from "mongoose";

const userSchema: Schema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  dob: {
    type: Date,
  },
  created_at: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model("User", userSchema);
