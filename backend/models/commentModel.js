const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    postId: {
        type: mongoose.Types.ObjectId
    },
    content: {
        type: String,
        require: true
    },
    owner: {
        type: mongoose.Types.ObjectId, ref: 'User'
    },
    created_at: {
        type: Date,
        default: Date.now
    }

}, { timestamps: true });

module.exports = mongoose.model('Comment', commentSchema);