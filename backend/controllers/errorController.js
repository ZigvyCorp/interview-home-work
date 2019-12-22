const AppError = require('./../utils/appError');

const handleCastErrorDB = err => {
  const message = `Invalid ${err.path}: ${err.value}.`;
  return new AppError(message, 400);
};

const handleDuplicateFieldsDB = err => {
  const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
  const message = `Duplicate field value: ${value}. Please use another value!`;
  return new AppError(message, 400);
};

const handleValidationErrorDB = err => {
  const errors = Object.values(err.errors).map(el => el.message);
  const message = `Invalid input data. ${errors.join('. ')}`;
  return new AppError(message, 400);
};

const handleJWTError = err =>
  new AppError('Invalid token. Please log in again!', 401);

const handleJWTExpired = err => new AppError('Your token is expired.', 401);

const sendErrorDev = (err, req, res) => {
  if (req.originalUrl.startsWith('/api')) {
    //API
    res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack
    });
  }
};

const sendErrorProd = (err, req, res) => {
  // API Error send back JSON
  if (req.originalUrl.startsWith('/api')) {
    // Operational, trusted error: send message to client
    if (err.isOperational) {
      return res.status(err.statusCode).json({
        status: err.status,
        message: err.message
      });
    }
    // Programming or other unknown error: don't leak error details
    // 1) Log error
    console.error('ERROR', err);
    // 2) Send generic message
    return res.status(500).json({
      status: 'error',
      message: 'Someting went very wrong!'
    });
  }
  // Webpage Error send back Error Page
  if (err.isOperational) {
    return res.status(err.statusCode).render('error', {
      title: 'Something went wrong!',
      msg: err.message
    });
  }
  console.error('ERROR', err);
  return res.status(500).render('error', {
    title: 'Something went wrong!',
    msg: 'Please try again later.'
  });
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, req, res);
  } else if (process.env.NODE_ENV === 'production') {
    let prodErr = { ...err };
    prodErr.message = err.message;
    if (err.name === 'CastError') prodErr = handleCastErrorDB(prodErr);
    if (err.code === 11000) prodErr = handleDuplicateFieldsDB(prodErr);
    if (err.name === 'ValidationError')
      prodErr = handleValidationErrorDB(prodErr);
    if (err.name === 'JsonWebTokenError') prodErr = handleJWTError(prodErr);
    if (err.name === 'TokenExpiredError') prodErr = handleJWTExpired(prodErr);
    sendErrorProd(prodErr, req, res);
  }
};
