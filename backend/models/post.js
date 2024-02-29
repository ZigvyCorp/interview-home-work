const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  tags: [{ type: String }],
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
