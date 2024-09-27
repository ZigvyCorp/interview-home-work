import mongoose from "mongoose";

const Post = new mongoose.Schema(
  {
    postId : {
        type : Number
    },
    title: {
      type: String,
      required: true,
    },
    tag: [
      {
        type: String,
      },
    ],
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    body : {
        type : String,
        require : true
    },
    createdAt : {
        type : String,
    }
  },
  { timestamps: true }
);

export default mongoose.model("posts", Post);
