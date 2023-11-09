const mongoose = require('mongoose');

const User = require('./user.model')
const Post = require('./post.model')

const schema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
    content: String,
    created_at: Date
})

module.exports = mongoose.model('Comment', schema)