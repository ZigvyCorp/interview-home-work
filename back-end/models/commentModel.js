import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  postId: String,
  userId: String,
  body: String,
  createdAt: { type: Number, default: Date.now },
});

export default mongoose.model('Comment', CommentSchema);
