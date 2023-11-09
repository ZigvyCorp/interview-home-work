const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const Comment = require('./commentModel');

const postSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  comments: [Comment.schema],
});
autoIncrement.initialize(mongoose.connection);

postSchema.plugin(autoIncrement.plugin, {
  model: 'Post',
  field: 'postId',
  startAt: 1,
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
