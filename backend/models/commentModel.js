const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
      required: [true, 'Comment can not be empty!']
    },
    post: {
      type: mongoose.Schema.ObjectId,
      ref: 'Post',
      required: [true, 'Comment must belong to a post.']
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Comment must belong to a user.']
    },
    active: {
      type: Boolean,
      default: true,
      select: false
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true
  }
);

commentSchema.index({ post: 1, user: 1 });

commentSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'user',
    select: 'name photo'
  });
  this.find({ active: { $ne: false } }); // Remove in-active
  next()
})

commentSchema.methods.isAuthor = function(userID) {
  return this.user._id.equals(userID)
}

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;