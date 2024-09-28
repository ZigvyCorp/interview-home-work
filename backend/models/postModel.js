// E:\ZigvyInterviewBlog\backend\models\postModel.js
const mongoose = require('mongoose');

const postSchema = mongoose.Schema(
    {
        id: {
            type: Number,
            required: true,
            unique: true,
        },
        owner: {
            type: Number,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        created_at: {
            type: Number,
            required: true,
        },
        tags: {
            type: [String],
            required: false,
        }
    },
    {
        timestamps: false,
    }
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
