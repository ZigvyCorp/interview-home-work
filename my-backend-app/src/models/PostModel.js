const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Liên kết đến User
  created_at: { type: Date, default: Date.now },
  tags: { type: [String], default: [] },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }], // Liên kết đến Comment
});

module.exports = mongoose.model("Post", PostSchema);
