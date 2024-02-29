'use strict';
const mongoose = require('mongoose');
const DOCUMENT_NAME = 'user';
const COLLECTION_NAME = 'users';

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      default: '',
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      default: null,
    },
    address: {
      type: Object,
      required: true,
    },
    phone: {
      type: String,
      default: '',
    },
    website: {
      type: String,
      default: '',
    },
    company: {
      type: Object,
      required: true,
      default: null,
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

//Export the model
module.exports = mongoose.model(DOCUMENT_NAME, userSchema);
