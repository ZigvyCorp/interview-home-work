const mongoose = require("mongoose");
const Status = require("../models/Enum/Status");

const commentSchema = new mongoose.Schema(
  {
    user: {
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
    status: {
      type: String,
      enum: [Status.ACTIVE, Status.INACTIVE, Status.DELETED],
      default: Status.ACTIVE,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);
