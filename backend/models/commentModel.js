import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    owner: {
        type: Number,
        required: true,
        ref: "User",
    },
    post: {
        type: Number,
        required: true,
        ref: "Post",
    },
    content: String,
    created_at: Number,
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
