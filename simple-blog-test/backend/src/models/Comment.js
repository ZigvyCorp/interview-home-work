import mongoose, { mongo } from "mongoose";

const CommentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    postId: {
        type: mongoose.Types.ObjectId,
        ref: "Post"
    },
    body: String
}, { timestamps: true });

const CommentModel = mongoose.model("Comment", CommentSchema);
export default CommentModel;