import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const POST_SCHEMA = new mongoose.Schema({
  title: { type: String, require },
  userId: { type: ObjectId, require },
  body: { type: String, require },
  created_at: { type: Number, default: null, require },
});

POST_SCHEMA.index({ title: 1 });

export default mongoose.model("Post", POST_SCHEMA);
