'use strict';
const mongoose = require('mongoose');
const DOCUMENT_NAME = 'comment';
const COLLECTION_NAME = 'comments';

// Declare the Schema of the Mongo model
var commentSchema = new mongoose.Schema(
  {
    postId: {
      type: Number,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      default: '',
    },
    comment_left: {type: Number, default: 0},
    comment_right: {type: Number, default: 0},
    parentId: {type: Number, default: null},
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

//Export the model
module.exports = mongoose.model(DOCUMENT_NAME, commentSchema);
