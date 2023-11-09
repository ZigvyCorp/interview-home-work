const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        require: true
    },
    user: {
        type: mongoose.Types.ObjectId, ref: 'User'
    },
    postId: {
        type: mongoose.Types.ObjectId
    }

}, { timestamps: true });

module.exports = mongoose.model('Comment', commentSchema);