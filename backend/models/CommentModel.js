const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    // _id: mongoose.Schema.Types.ObjectId,
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "created_at",
      currentTime: () => Math.floor(Date.now() / 1000),
    },
  }
);

module.exports = mongoose.model("Comment", schema);
