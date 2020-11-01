import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref : 'User'},
  post: { type: Schema.Types.ObjectId, ref : 'Post' },
  content: { type: 'String', required: true },
  created_at: { type: 'Number', default: new Date().getTime(), required: true },
});

export default mongoose.model('Comment', commentSchema);

