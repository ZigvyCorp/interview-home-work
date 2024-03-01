const mongoose = require("mongoose");

const commentModel = new mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'users'
    },
    post: {
        type: mongoose.Types.ObjectId,
        ref: 'posts'
    },
    content: {
        type: String,
        required: true
    },
    create_at: {
        type: Date,
        default: Date.now()
    }
})


module.exports = mongoose.model('comments', commentModel);
