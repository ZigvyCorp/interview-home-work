const mongoose = require('mongoose')
const paginatePlugin = require('./plugins/paginatePlugin')

const postSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: { type: String, required: true },
    content: { type: String, required: true },
    tags: { type: [String] },
    comments: {
      type: [
        {
          owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
          content: { type: String, required: true },
          createdAt: { type: Date, default: new Date() },
        },
      ],
    },
  },
  {
    timestamps: true,
  },
)

postSchema.plugin(paginatePlugin)

const Post = mongoose.model('Post', postSchema)

module.exports = Post
