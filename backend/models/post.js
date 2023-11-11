const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PostSchema = new Schema({
    id: Number,
    owner: Number,
    title: String,
    content: String,
    create_At: { type: Date, default: Date.now},
    tags: [String]
})
PostSchema.index({ title: 'text' })
module.exports = mongoose.model('posts', PostSchema)