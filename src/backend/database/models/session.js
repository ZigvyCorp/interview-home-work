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

SessionSchema.methods.logout = async function () {
  let session = this;
  session.isLogout = true;
  session.save();
}

SessionSchema.methods.login = async function (username, password) {
  return new Promise(async (resolve, reject) => {
    let token = '';
    // Query user by username
    const userSchema = new UserSchema();
    const userArray = await userSchema.findUserByUsername(username);
    if (typeof userArray === 'undefined' || userArray.length !== 1) {
      return resolve(token);
    }

    const user = userArray[0];
    // Compare password
    userSchema.comparePassword(password, user.password).then(isMatch => {
      if (!isMatch) {
        return resolve(token);
      }

      // Generate token
      const payload = {
        username: user.username,
        issue_at: Date.now()
      };

      jwt.sign(payload, SECRET_KEY, { algorithm: 'HS256' }, (err, token) => {
        if (err) {
          return reject(err);
        }

        // Save new session to db
        this.model('Session').create({
          token: token
        }).then(newSession => {
          if (newSession) resolve(token);
        }).catch(err => {
          // throw new Error(err);
          reject(err);
        });
      });
    })
  })
}

module.exports = mongoose.model('Session', SessionSchema);