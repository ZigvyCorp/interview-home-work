const mongoose = require('mongoose');

const commentSchema = mongoose.Schema(
    {
        owner: {
            type: Number,
            required: true,
        },
        post: {
            type: Number,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        created_at: {
            type: Number,
            required: true,
        }
    },
    {
        timestamps: false,
    }
);

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
