// authUtils.js
const jwt = require("jsonwebtoken");
const secretKey = "your-secret-key";

exports.generateToken = (payload) => {
  return jwt.sign(payload, secretKey);
};

exports.verifyToken = (token) => {
  return jwt.verify(token, secretKey);
};
