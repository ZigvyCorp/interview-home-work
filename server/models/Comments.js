const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentsSchema = new Schema(
  {
    owner: { type: String },
    post: { type: String },
    content: { type: String }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Comments', CommentsSchema, 'Comments');

module.exports.requireField = ['post', 'content'];

module.exports.requireField = ['content'];