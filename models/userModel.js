const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      require: true,
      unique: true,
    },
    username: {
      type: String,
      required: [true, 'Please provide your username'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
    },
    name: {
      type: String,
      required: [true, 'A user must have a name'],
    },
    dob: String,
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

userSchema.index({ id: 1 });

// Virtual populate
userSchema.virtual('comments', {
  ref: 'Comment',
  localField: 'id',
  foreignField: 'ownerId',
});

const User = mongoose.model('User', userSchema);
module.exports = User;
