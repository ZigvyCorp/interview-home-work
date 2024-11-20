const ErrorResponse = require('../utils/errorResponse');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) return next(new ErrorResponse('You must Log In...', 401));

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next();
  } catch (error) {
    return next(new ErrorResponse('You must Log In', 401));
  }
};

exports.isAdmin = (req, res, next) => {
  if (req.user.role === 'user') return next(new ErrorResponse('Access denied, you must an admin', 401));
  next();
};
