var mongoose = require('mongoose');
var post = new mongoose.Schema(
    {
        id: Number,
        owner: Number,
        title: String,
        content: String,
        created_at: Date,
        tags: Array
    },
    { collection: 'Posts' }
);
module.exports = mongoose.model('post', post);