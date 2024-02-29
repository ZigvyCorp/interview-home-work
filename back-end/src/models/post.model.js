'use strict';
const mongoose = require('mongoose');
const DOCUMENT_NAME = 'post';
const COLLECTION_NAME = 'posts';

// Declare the Schema of the Mongo model
var postSchema = new mongoose.Schema(
  {
    userId: {
      type: Number,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

postSchema.index({title: "text", body: "text"});

//Export the model
module.exports = mongoose.model(DOCUMENT_NAME, postSchema);
