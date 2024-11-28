const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  owner: { type: Number, ref: "User", required: true },
  post: { type: Number, ref: "Post", required: true },
  content: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Comment", CommentSchema);
