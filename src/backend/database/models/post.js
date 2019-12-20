const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  owner: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String
  },
  created_at: {
    type: Date,
    default: Date.now()
  },
  tags: {
    type: Array,
    default: []
  }
});

module.exports = mongoose.model('Post', PostSchema);