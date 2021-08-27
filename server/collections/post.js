const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  created_at: {
    type: String,
    required: true,
  },
  tags: {
    type: [],
    required: true,
  },
});

const Post = mongoose.model("post", postSchema);
module.exports = Post;
