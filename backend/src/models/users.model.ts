import { IUser } from "../types/users.type";
import mongoose from "mongoose";
const UserSchema = new mongoose.Schema<IUser>({
  _id: mongoose.Types.ObjectId,
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    default: "",
  },
  dob: {
    type: String,
    default: "",
  },
  created_at: {
    type: Number,
  },
});
export const Users = mongoose.model<IUser>("Users", UserSchema);
