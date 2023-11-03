const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema(
    {
        commentId: {type: Number,autoIncrement: true, unique: true, primaryKey: true},
        postId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
            required: true,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true,
        },
        comment: { type: String, required: true}
    },
    {
        timestamps: true
    }
);
const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;