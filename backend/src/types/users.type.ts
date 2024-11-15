import mongoose from "mongoose";

export type IUser = {
  _id?: mongoose.Types.ObjectId;
  username: String;
  password: string;
  name?: String;
  dob?: String;
  created_at: Number;
};
