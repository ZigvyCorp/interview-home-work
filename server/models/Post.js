const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    content: {
      type: String,
      require: true,
    },
    tags: [
      {
        type: String,
      },
    ],
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'users',
    },
  },
  {
    timestamps: true,
  }
)

// Virtual property for reverse populate
PostSchema.virtual('comments', {
  ref: 'comments',
  localField: '_id',
  foreignField: 'post',
})

module.exports = mongoose.model('posts', PostSchema)
