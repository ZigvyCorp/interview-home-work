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
    comments: [{ type: mongoose.Types.ObjectId, ref: 'Comment' }],
    author: {
        type: mongoose.Types.ObjectId, ref: 'User'
    },
    tag: [{ type: String }]
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);