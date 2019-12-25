var mongoose = require('mongoose');
var comment = new mongoose.Schema(
    {
        id: Number,
        owner: Number,
        post: Number,
        content: String,
        created_at: Number
    },
    { collection: 'Comments' }
);
module.exports = mongoose.model('comment', comment);