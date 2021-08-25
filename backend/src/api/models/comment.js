import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema(
    {
        post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post',
            required: true,
            immutable: true
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
            immutable: true
        },
        content: {
            type: String,
            required: true,
        },
    },
    { timestamps: true });

const Comment = mongoose.model('Comment', commentSchema, 'comments');

export default Comment;