import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  postId: {
    type: mongoose.Schema.ObjectId,
    ref: "Post",
  },
  creator: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  body: {
    type: String,
    require: [true, "Body comment is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Comment = new mongoose.model("Comment", commentSchema);

export default Comment;
