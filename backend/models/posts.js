const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const post = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    title: String,
    content: String,
    created_at: {
        type: Date,
        default: Date.now(),
    },
    tags: Array,
});

module.exports = mongoose.model('post', post);
