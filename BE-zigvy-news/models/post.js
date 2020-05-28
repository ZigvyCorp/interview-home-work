const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  _idOwner: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    require: true
  },
  images: {
    type: String,
    require: true
  },
  content: {
    type: String,
    require: true
  },
  tags :{
    type: Array,
    require: false,
  },
  isDelete: {
    type: Boolean,
    require: true
  }
}, {
  timestamps: true,
});

postSchema.index({ 'content': 'text', 'title': 'text', 'tags': 'text' });

module.exports = mongoose.model('post', postSchema);
