import mongoose from "mongoose";
export type IPost = {
  _id?: mongoose.Types.ObjectId;
  owner: String;
  title: String;
  content?: String;
  tags?: String[];
  created_at: Number;
};
