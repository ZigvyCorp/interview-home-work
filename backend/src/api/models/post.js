import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
    {
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
            immutable: true
        },
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        tags: [String],
    },
    { timestamps: true });

const Post = mongoose.model('Post', postSchema, 'posts');

export default Post;