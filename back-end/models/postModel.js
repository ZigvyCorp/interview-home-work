const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  userId: Number,
  id: Number,
  title: String,
  body: String,
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
