const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  owner: { type: Number, ref: "User", required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  tags: [{ type: String }],
});
module.exports = mongoose.model("Post", PostSchema);
