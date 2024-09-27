import mongoose from "mongoose";

const Comment = mongoose.Schema({
  postId: {
    type: Number,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  body : {
    type : String,
    require : true
  }
} , { timestamps: true });

export default mongoose.model("comments", Comment);

