import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        required: true,
    },
    author: {
        type: String,
        ref: "User",
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
