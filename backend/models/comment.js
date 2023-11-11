const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CommentSchema = new Schema({
    owner: Number,
    post: Number, 
    content: String,
    create_At: { type: Date, default: Date.now},
})

module.exports = mongoose.model('comments', CommentSchema)