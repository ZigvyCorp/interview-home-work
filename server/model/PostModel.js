import mongoose from "mongoose";
const { Schema } = mongoose;

const postSchema = new Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        title: {
            type: String,
            require: true,
        },
        content: {
            type: String,
            require: true,
        },
        tags: [String],
        comment: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }]
    },
    {
        timestamps: true,
    }
);
export const Post = mongoose.model("Post", postSchema);