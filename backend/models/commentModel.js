const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    owner: {
      ref: "User",
      type: mongoose.Schema.Types.ObjectId,
    },
    post: {
      ref: "Post",
      type: mongoose.Schema.Types.ObjectId,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Comment", commentSchema);
