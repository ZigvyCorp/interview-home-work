import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const saltRounds = 8;

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

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, saltRounds);
  }
  next();
});

export default mongoose.model("User", userSchema);
