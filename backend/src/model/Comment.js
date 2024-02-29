const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const commentSchema = new Schema(
  {
    owner: { type: Schema.Types.ObjectId, ref: "users" },
    post: { type: Schema.Types.ObjectId, ref: "posts" },
    content: String,
    created_at: { type: Date, default: Date.now },
  },
  {
    collection: "comment",
  }
);

const Comment = mongoose.model("comments", commentSchema);

module.exports = Comment;
