const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    id:{
        type: Number,
        required:[true, 'Please provide id']
    },

    owner:{
        type: Number,
        ref: 'User',
        required:[true, 'Please provide a user']
    },

    title:{
        type: String
    },

    content:{
        type: String,
        required:[true, 'Please provide the content']
    },

    created_at:{
        type: Date
    },

    tags:{
        type: Array
    }
})

module.exports= mongoose.model('Post', PostSchema)