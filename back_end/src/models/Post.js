const mongoose = require("mongoose");
const Status = require("./Enum/Status");

const postSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    tags: [
      {
        type: String,
      },
    ],
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    status: {
        type: String,
        enum: [Status.ACTIVE, Status.INACTIVE, Status.DELETED],
        default: Status.ACTIVE,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
