const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  owner: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  tags: {
    type: Array,
    required: true,
    default: [],
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
