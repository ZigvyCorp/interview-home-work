const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    // comments: [{ type: mongoose.Types.ObjectId, ref: 'Comment' }],
    owner: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    tags: [{ type: String }],
    created_at: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);