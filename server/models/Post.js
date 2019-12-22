var mongoose = require('mongoose');
var Helper = require('../common/Helper');

var schema = new mongoose.Schema({
    id: {
        type: String,
        default: Helper.generateRandomID(),
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    title: {
        type: String,
        default: '',
        required: true
    },
    content: {
        type: String,
        default: '',
        required: true
    },
    createdAt: {
        type: String,
        default: ''
    },
    tags: {
        type: Array,
        default: []
    }
});

var Post = mongoose.model('Post', schema);

module.exports = Post;