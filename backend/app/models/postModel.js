const mongoose = require("mongoose");

const postModel = new mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'users'
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        default: ''
    },
    tags: [{
        type: String
    }],
    create_at: {
        type: Date,
        default: Date.now()
    }
})


module.exports = mongoose.model('posts', postModel);
