const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      require: true,
      unique: true,
    },
    ownerId: {
      type: Number,
      ref: 'User',
      require: [true, 'Post must belong to a user'],
    },
    title: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
    created_at: {
      type: Date,
      default: Date.now(),
    },
    tags: [String],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Virtual populate
postSchema.virtual('comments', {
  ref: 'Comment',
  localField: 'id',
  foreignField: 'postId',
  // count: true,
});

postSchema.virtual('author', {
  ref: 'User',
  localField: 'ownerId',
  foreignField: 'id',
});

postSchema.index({ ownerId: 1 }, { unique: false });

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
