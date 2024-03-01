const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema(
    {
        title: { type: String },
        content: { type: String },
        tags: [{ type: String }],
        owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Post', Post)
