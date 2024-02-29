const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  tags: [String],
  content: String,
  created_at: Date,
  updated_at: Date
});

module.exports = mongoose.model('Post', postSchema);