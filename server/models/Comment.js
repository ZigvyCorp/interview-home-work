var mongoose = require('mongoose');
var helper = require('helper');

var schema = new mongoose.Schema({
    id: {
        type: String,
        default: helper.generateRandomID(),
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    post: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Number,
        default: Date.now()
    }
});

var Comment = mongoose.model('Comment', schema);

module.exports = Comment;