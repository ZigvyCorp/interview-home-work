const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const comment = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'post',
    },
    content: String,
    created_at: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model('comment', comment);
