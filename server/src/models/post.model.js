const mongoose = require('mongoose');
const User = require('./user.model')

const schema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title: String,
    content: String,
    tags: [String],
    created_at: Date
})

module.exports = mongoose.model('Post', schema)