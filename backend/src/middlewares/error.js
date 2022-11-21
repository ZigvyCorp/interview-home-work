const mongoose = require("mongoose");
const httpStatus = require("http-status");
const ApiError = require("./../utils/ApiError");
const logger = require("./../config/logger");

const errorConverter = (err, req, res, next) => {
  let error = err;
  if (!(error instanceof ApiError)) {
    const statusCode =
      error.statusCode || error instanceof mongoose.Error
        ? httpStatus.BAD_REQUEST
        : httpStatus.INTERNAL_SERVER_ERROR;
    const message = error.message || httpStatus[statusCode];
    error = new ApiError(statusCode, message, false, err.stack);
  }
  next(error);
};

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  let { statusCode, message } = err;

  res.locals.errorMessage = err.message;

  const response = {
    code: statusCode,
    message,
  };

  logger.error(err);

  res.status(statusCode).send(response);
};

module.exports = {
  errorConverter,
  errorHandler,
};
