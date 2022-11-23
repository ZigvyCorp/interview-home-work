const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

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

commentSchema.plugin(mongoosePaginate);

/**
 * @typedef comment
 */
module.exports = mongoose.model("Comment", commentSchema);
