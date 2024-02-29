const { mongoose, Schema } = require('mongoose')
const Comment = require('./comment.model')

const DOCUMENT_NAME = 'Post'
const COLLECTION_NAME = 'Posts'

var postSchema = new Schema(
  {
    _id: Number,
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    user: {
      type: Number,
      required: true,
      ref: 'User',
    },
  },
  {
    _id: false,
    collection: COLLECTION_NAME,
    timestamps: true,
  },
)

var post = mongoose.model(DOCUMENT_NAME, postSchema)
// let newPost = post.create({ 
//   _id: 94,
//   title: 'qui qui voluptates illo iste minima',
//   body: 'aspernatur expedita soluta quo ab ut similique\nexpedita dolores amet\nsed temporibus distinctio magnam saepe deleniti\nomnis facilis nam ipsum natus sint similique omnis'
// });

module.exports = post
