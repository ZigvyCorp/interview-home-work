import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  userId: String,
  title: String,
  body: String,
  createdAt: { type: Number, default: Date.now },
});

export default mongoose.model('Post', PostSchema);
