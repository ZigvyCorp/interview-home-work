const mongoose = require('mongoose')


const commentSchema = mongoose.Schema({
    post_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Post',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
}, { timestamps: true })


const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment