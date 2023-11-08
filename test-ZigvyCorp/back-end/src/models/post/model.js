const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  owner: Number,
  title: String,
  content: String,
  created_at: Number,
  tags: [String],
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
