const mongoose = require('mongoose')

const CommentSchema = mongoose.Schema(
    {
        postId: {
            type: Number,
            required: [ true, 'postId is required' ],
        },
        id: {
            type: Number,
            required: [ true, 'id is required' ],
        },
        name: {
            type: String,
            required: [ true, 'name is required' ],
        },
        email: {
            type: String,
            required: [ true, 'email is required' ],
        },
        body: {
            type: String,
            required: [ true, 'body is required' ],
        },
    },
    {
        timestamps: true
    }
)

const Comment = mongoose.model('Comment', CommentSchema)
module.exports = Comment
