const { Schema } = require('mongoose');
const { blogDb } = require('../databases/init.mongodb');

const PostSchema = new Schema({
  owner: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  tags: { type: Array, required: true, default: [] },
}, {
  collection: 'posts',
  timestamps: true,
})

module.exports = blogDb.model('posts', PostSchema);
