const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const postSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    title: { type: String, required: true },
    content: String,
    created_at: { type: Date, default: Date.now },
    tags: [String],
  },
  { collection: "post" }
);

const Post = model("posts", postSchema);

module.exports = Post;
