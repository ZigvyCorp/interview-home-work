import mongoose from "mongoose";

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  owner: {
    type: String,
    required: true
  },
  post: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  created_at: {
    type: Number,
    default: Date.now,
  }
});

export default mongoose.model('Comment', commentSchema);