const mongoose = require('mongoose');
// const Post = require('./postModel');
// const User = require('./userModel');
//! create Schema

const commentSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Comment must belong to a User.'],
    },
    post: {
      type: mongoose.Schema.ObjectId,
      ref: 'Post',
      required: [true, 'Comment must belong to a Post.'],
    },
    content: String,
  },
  {
    timestamps: true,
  }
);

//todo Create model
const Comment = mongoose.model('Comment', commentSchema);
//todo export
module.exports = Comment;
