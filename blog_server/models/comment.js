import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      require: true,
    },
    content: {
      type: String,
      require: true,
    },
  },

  { timestamps: true }
);
const CommentModel = mongoose.model("Comment", commentSchema);

export default CommentModel;
