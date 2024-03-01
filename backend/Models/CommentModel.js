const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema(
  {
    post: {
      type: String,
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const CommentModel = mongoose.model('Comments', CommentSchema);

module.exports = CommentModel;
