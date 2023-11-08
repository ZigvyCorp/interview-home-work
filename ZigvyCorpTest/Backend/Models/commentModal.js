import mongoose from 'mongoose';

const commentSchema = mongoose.Schema(
    {
        id: {
            type: String,
        },
        owner: {
            type: Number,
        },
        post: {
            type: String,
        },
        content: {
            type: Number,
        },
        created_at: {
            type: Number,
        },
    },
    {
        timestamps: true,
    },
);

const Comment = mongoose.model('Comment', commentSchema);
export default Comment;
