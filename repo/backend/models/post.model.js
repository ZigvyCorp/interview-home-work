const mongoose = require('mongoose')

const PostSchema = mongoose.Schema(
    {
        id : {
            type: Number,
            required: [true, 'id is required'],
        },
        userId: {
            type: Number,
            required: [true, 'UserId is required'],
        },
        title: {
            type: String,
            required: [true, 'title is required'],
        },
        body: {
            type: String,
            required: [true, 'body is required'],
        },
    },
    {
        timestamps: true
    }
)

const Post = mongoose.model('Post', PostSchema)
module.exports = Post
