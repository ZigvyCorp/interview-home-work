const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    images: {
      type: String,
      require: true,
    },
    username: {
      type: String,
      require: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    dob: {
      type: Date,
      require: false,
    },
    isDelete: {
      type: Boolean,
      require: true,
    }
  },
  {
    timestamps: true,
  }
);

userSchema.index({ 'name': 'text', 'username': 'text' });

module.exports = mongoose.model('user', userSchema);
