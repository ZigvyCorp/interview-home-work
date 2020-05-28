const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  _idOwner: mongoose.Schema.Types.ObjectId,
  _idPost: mongoose.Schema.Types.ObjectId,
  content: {
    type: String,
    require: true
  },
  isDelete: {
    type: Boolean,
    require: true
  }
}, {
  timestamps: true,
});

commentSchema.index({'content': 'text' });

module.exports = mongoose.model('comment', commentSchema);
