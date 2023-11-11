const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
    content: {
        type: String,
        require: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    created_at: {
        type: Date,
        default: Date.now
    }

}, { timestamps: true });

module.exports = mongoose.model('Comment', commentSchema);