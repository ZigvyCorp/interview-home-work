import mongoose from "mongoose";
export type IComment = {
  _id?: mongoose.Types.ObjectId;
  owner: String;
  post: String;
  content?: String;
  created_at: Number;
};
