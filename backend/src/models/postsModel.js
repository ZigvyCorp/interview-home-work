const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    id: {
        type: Number,
        require: true
    },
    owner: {
        type: Number,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        ref: 'Users',
        require: true
    },
    created_at: {
        type: Date,
        ref: 'Users',
        require: true
    },
    tags: {
        type: Array,
        require: true
    },
});

const Posts = mongoose.model('Posts', postSchema);
module.exports = Posts;