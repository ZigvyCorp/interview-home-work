const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  id: Number,
  owner: Number,
  title: String,
  content: String,
  created_at: Number,
  tags: [String],
});

const PostModel = mongoose.model("posts", PostSchema);

module.exports = PostModel;
