const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      require: true,
      unique: true,
    },
    ownerId: {
      type: Number,
      ref: 'User',
      require: [true, 'Comment must belong to a user'],
    },
    postId: {
      type: Number,
      ref: 'Post',
      require: [true, 'Post must belong to a user'],
    },
    content: {
      type: String,
      require: [true, 'comment can not be empty'],
    },
    created_at: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

commentSchema.index({ ownerId: 1 }, { unique: false });

commentSchema.virtual('author', {
  ref: 'User',
  localField: 'ownerId',
  foreignField: 'id',
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
