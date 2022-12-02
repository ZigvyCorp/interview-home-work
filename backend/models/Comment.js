const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
    content: {
        type: String,
        require: true,
    },
    owner: { type: mongoose.Schema.ObjectId, ref: 'User', require: true },
    post: { type: mongoose.Schema.ObjectId, ref: 'Post' },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    deletedAt: {
        type: Date,
        default: null,
    },
});

module.exports = mongoose.model('Comment', CommentSchema);
