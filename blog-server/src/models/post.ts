const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    numberReplies: {
      type: Number,
    },
    tags: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Post", postSchema);
