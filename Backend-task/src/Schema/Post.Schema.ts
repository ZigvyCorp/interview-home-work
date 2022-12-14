import mongoose from "mongoose";
import { Schema } from "mongoose";

//const ObjectId = Schema.ObjectId;

const PostSchema = new Schema({
  name: { type: String, maxLength: 255, required: true },
  email: { type: String, maxLength: 255, required: true },
  body: { type: String, maxLength: 255, required: true },
  created_at: { type: Date, maxLength: 255, default: Date.now },
  created_by: { type: String, maxLength: 255 },
  update_at: { type: Date, maxLength: 255, default: Date.now },
  update_by: { type: String, maxLength: 255 },
  is_deleted: { type: Boolean, maxLength: 255, default: false },
});
module.exports = mongoose.model("posts", PostSchema);
