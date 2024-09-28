// src/models/postModel.ts

import mongoose, { Schema } from "mongoose";

export interface IPost {
  userId: string;
  id: number;
  title: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
}

const postSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  title: { type: String, required: true },
  body: { type: String, required: true },
  createAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model<IPost>("Post", postSchema)