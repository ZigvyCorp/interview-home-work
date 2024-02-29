const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    id: {
        type: Number,
        require: true
    },
    owner: {
        type: Number,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    post: {
        type: Number,
        require: true
    },

    created_at: {
        type: Date,
        ref: 'Posts',
        require: true
    },
});

const Comments = mongoose.model('Comments', commentSchema);
module.exports = Comments;