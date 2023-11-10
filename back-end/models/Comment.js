const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    id:{
        type: Number,
        required:[true, 'Please provide id']
    },

    owner:{
        type: Number,
        ref: 'User',
        required:[true, 'Please provide a user']
    },

    post:{
        type: Number,
        ref: 'Post',
        required:[true, 'Please provide the post']
    },
    
    content:{
        type: String,
        required:[true, 'Please provide the content'],
    },

    created_at:{
        type: Date
    }
})


module.exports= mongoose.model('Comment', CommentSchema)