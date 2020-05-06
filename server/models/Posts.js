const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostsSchema = new Schema(
  {
    owner: { type: String },
    title: { type: String },
    content: { type: String },
    tags: { type: Array },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Posts', PostsSchema, 'Posts');

module.exports.requireField = ['title', 'content', 'tags'];

module.exports.editableField = ['title', 'content'];