import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    username: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true, trim: true, minlength: 5 },
    avatar: {
      type: String,
      default: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    },
    dob: { type: String },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("users", userSchema);
