const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
  content: String,
  created_at: Date,
  updated_at: Date
});

module.exports = mongoose.model('Comment', commentSchema);