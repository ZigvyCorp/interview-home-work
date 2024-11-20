import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      require: true,
    },
    tags: {
      type: Array,
      require: true,
    },
  },

  { timestamps: true }
);
const PostModel = mongoose.model("Post", postSchema);

export default PostModel;
