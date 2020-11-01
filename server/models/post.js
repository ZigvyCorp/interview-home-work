import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const postSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref : 'User'},
  title: { type: 'String', required: true },
  searchTitle: { type: 'String', required: true },
  content: { type: 'String', required: true },
  dateAdded: { type: 'Number', default: new Date().getTime(), required: true },
  tags: [{ type: 'String'}] ,
  comment: []
});

export default mongoose.model('Post', postSchema);

