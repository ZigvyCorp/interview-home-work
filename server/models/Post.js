const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  tag: {
    type: Array,
  },
})

module.exports = mongoose.model('posts', PostSchema)
