export class CustomError extends Error {
  statusCode;
  message;

  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

export const errorHandler = (statusCode, message) =>
  new CustomError(statusCode, message);
