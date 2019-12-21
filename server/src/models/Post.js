const mongoose = require('mongoose')



const postSchema = mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true
    },
    tag: {
        type: Array,
        required: true
    }
}, { timestamps: true })


const Post = mongoose.model('Post', postSchema)

module.exports = Post