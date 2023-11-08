import mongoose from 'mongoose';

const postSchema = mongoose.Schema(
    {
        id: {
            type: String,
        },
        owner: {
            type: Number,
        },
        title: {
            type: String,
        },
        content: {
            type: String,
        },
        created_at: {
            type: String,
        },
        tags: {
            type: String,
        },
    },
    {
        timestamps: true,
    },
);

const Post = mongoose.model('Post', postSchema);
export default Post;
