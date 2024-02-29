const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  id: Number,
  owner: Number,
  post: Number,
  content: String,
  created_at: Number,
});

const CommentModel = mongoose.model("comments", CommentSchema);

module.exports = CommentModel;
