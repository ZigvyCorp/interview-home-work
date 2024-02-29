const { mongoose, Schema } = require('mongoose')

const DOCUMENT_NAME = 'Comment'
const COLLECTION_NAME = 'Comments'

const commentSchema = new Schema(
  {
    _id: Number,
    name: { type: String },
    postId: { type: Number },
    email: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  {
    _id: false,
    collection: COLLECTION_NAME,
    timestamps: true,
  },
)

const comment = mongoose.model(DOCUMENT_NAME, commentSchema)

module.exports = comment
