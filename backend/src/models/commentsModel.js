const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    id: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    body: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },

    postId: {
        type: Number,
        ref: 'Posts',
        require: true
    },
});

const Comments = mongoose.model('Comments', commentSchema);
module.exports = Comments;