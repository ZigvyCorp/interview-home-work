const mongoose = require('mongoose');
const slugify = require('slugify');

//!create Post Schema
const postSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'post must belong to a user'],
    },
    title: {
      type: String,
      required: [true, 'bai viet can co title'],
    },
    content: String,
    tags: [String],
  },
  { timestamps: true }
);

// postSchema.virtual("owner", {
//     ref:"User",
//     foreignField:""
// })

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
