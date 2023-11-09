const mongoose = require("mongoose");
const User = require("./User");
const Post = require("./Post");

const commentSchema = new mongoose.Schema({
  owner: { type: Number },
  post: { type: Number },
  content: { type: String },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("comments", commentSchema);
