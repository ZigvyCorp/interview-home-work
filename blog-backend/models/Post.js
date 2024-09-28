const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  tags: { type: [String], required: false },
});

module.exports = mongoose.model('Post', PostSchema);
