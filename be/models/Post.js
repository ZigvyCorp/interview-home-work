const mongoose = require("mongoose");
const User = require("./User");

const postSchema = new mongoose.Schema({
  owner: { type: Number },
  title: { type: String },
  content: { type: String },
  created_at: { type: Date, default: Date.now },
  tags: { type: [String] },
});

module.exports = mongoose.model("posts", postSchema);
