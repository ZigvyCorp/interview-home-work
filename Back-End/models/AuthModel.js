import mongoose from "mongoose";

const authScheme = new mongoose.Schema(
  {
    firstname: {
      type: String,
      trim: true,
      maxlength: 25,
    },
    lastname: {
      type: String,
      trim: true,
      maxlength: 25,
    },
    username: {
      type: String,
      trim: true,
      maxlength: 25,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png",
    },
  },
  { timestamp: true }
);

export const PostModel = mongoose.model("auth", authScheme);
