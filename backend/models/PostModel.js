const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    // _id: mongoose.Schema.Types.ObjectId,
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: true,
      maxLenght: 255,
    },
    content: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      required: false,
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

module.exports = mongoose.model("Post", schema);
