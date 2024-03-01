const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  tags: [String],
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Post", PostSchema);
