/**
 * @file commentModel.js
 * @description This file contains the schema definition for the Comment model using Mongoose.
 * @module models/commentModel
 * @requires mongoose
 */
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Comment', commentSchema);