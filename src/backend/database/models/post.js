const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  owner: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: ''
  },
  content: {
    type: String,
    default: ''
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