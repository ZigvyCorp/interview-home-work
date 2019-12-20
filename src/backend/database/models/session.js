const mongoose = require('mongoose');
const UserSchema = require('./user');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../../config');

const SessionSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true
  },
  isLogout: {
    type: Boolean,
    default: false
  }
});

SessionSchema.methods.logout = function () {
  let session = this;
  session.isLogout = true;
  session.save();
}

SessionSchema.methods.login = async function (username, password) {
  let token = '';
  // Query user by username
  const user = await UserSchema.findUserByUsername(username);
  if (typeof user === 'undefined') return token;

  // Compare password
  if (!user.comparePassword(password)) return token;

  // Generate token
  const payload = {
    username: user.username
  };

  jwt.sign(payload, SECRET_KEY, { algorithm: 'HS256' }, (err, token) => {
    if (err) {
      // TODO
    }

    // Save new session to db
    this.model('Session').create({
      token: token
    }).then(newSession => {
      if (newSession) return token;
    }).catch(err => {
      // TODO
    })
  });
}

module.exports = mongoose.model('Session', SessionSchema);