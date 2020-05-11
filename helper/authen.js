const jwt = require('jsonwebtoken');
const config = require('../config/config');
const jwtSecret = config.JWT_SECRET;
const jwtExpires = config.JWT_EXPIRES;


module.exports = {
  verifyToken: (token) => {
    return jwt.verify(token, jwtSecret);
  },
  generateToken: (data) => {
    return jwt.sign(data, jwtSecret, { expiresIn: jwtExpires });
  }
};
