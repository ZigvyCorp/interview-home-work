const { Schema } = require('mongoose');
const { blogDb } = require('../databases/init.mongodb');

const CommentSchema = new Schema({
  owner: { type: String, required: true },
  post: { type: String, required: true },
  content: { type: String, required: true },
}, {
  collection: 'comments',
  timestamps: true,
})

module.exports = blogDb.model('comments', CommentSchema);
