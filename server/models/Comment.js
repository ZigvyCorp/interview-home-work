const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: 'posts',
  },
  content: { type: String },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('comments', CommentSchema)
