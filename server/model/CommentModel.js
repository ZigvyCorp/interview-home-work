import mongoose from "mongoose";
const { Schema } = mongoose;

const commentSchema = new Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        },
        content: {
            type: String,
            require: true,
        },
    },
    {
        timestamps: true,
    }
);
export const Comment = mongoose.model("Comment", commentSchema);