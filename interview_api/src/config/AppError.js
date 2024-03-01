import { ERROR_CODE } from "../constants/error";

export class AppError extends Error {
  statusCode;
  detail;

  constructor(statusCode, message, detail) {
    super(message);
    this.statusCode = statusCode;
    this.detail = detail;

    // This line is needed to correctly capture the stack trace
    Error.captureStackTrace(this, this.constructor);
  }
}

export class CustomError extends Error {
  statusCode;

  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;

    // This line is needed to correctly capture the stack trace
    Error.captureStackTrace(this, this.constructor);
  }
}
