const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { SALT_ROUND } = require('../../config');

const User = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  dob: {
    type: String
  },
  created_at: {
    type: Date, default: Date.now
  }
});

User.pre('save', function (next) {
  let user = this;

  bcrypt.hash(user.password, SALT_ROUND)
    .then(hashedPassword => {
      user.password = hashedPassword;
      next();
    })
    .catch(err => {
      next(err);
      throw new Error(err);
    });
});

User.method.comparePassword = function (candidatePassword) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
      if (err) reject(err);
      resolve(isMatch);
    })
  })
}

module.exports = mongoose.model("user", User);
