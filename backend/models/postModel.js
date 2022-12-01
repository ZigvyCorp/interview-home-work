const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    owner: {
      ref: "User",
      type: mongoose.Schema.Types.ObjectId,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    countComment: {
      type: Number,
      default: 0,
    },
    comments: {
      type: [
        {
          ref: "Comment",
          type: mongoose.Schema.Types.ObjectId,
        },
      ],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);
