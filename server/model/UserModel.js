import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
      unique: true,
    },
    dob: {
      type: Date
    },
    post: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
  },
  {
    timestamps: true,
  }
);
export const User = mongoose.model("User", userSchema);