const jwt = require('jsonwebtoken');
const config = require('../config/config');
const jwtSecret = config.JWT_SECRET;
const jwtExpires = config.JWT_EXPIRES;


module.exports = {
  verifyToken: (token) => {
    try {
      return jwt.verify(token, jwtSecret);
    } catch (e) {
      console.log(e);
      throw new (e.message, 403);
    }
  },
  generateToken: (data) => {
    try {
      return jwt.sign(data, jwtSecret, { expiresIn: jwtExpires });
    } catch (e) {
      throw new (e.message, 400);
    }
  }
};
