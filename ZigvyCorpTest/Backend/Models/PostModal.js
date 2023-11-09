import mongoose from 'mongoose';

const postSchema = mongoose.Schema(
    {
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        title: {
            type: String,
        },
        content: {
            type: String,
        },
        created_at: {
            type: Number,
        },
        numberReplies: {
            type: Number,
        },
        tags: {
            type: [String],
        },
    },
    {
        timestamps: true,
    },
);

const Post = mongoose.model('Post', postSchema);
export default Post;
