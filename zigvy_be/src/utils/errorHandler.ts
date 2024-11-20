const httpStatus = require("http-status");

/**
 * @extends Error
 */
class ExtendableError extends Error {
  [key: string]: any;
  constructor(message: string, status: number, isPublic: any) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.status = status;
    this.isPublic = isPublic;
    this.isOperational = true; // This is required since bluebird 4 doesn't append it anymore.
    // Error.captureStackTrace(this, this.constructor.name);
  }
}
/**
 * Class representing an API error.
 * @extends ExtendableError
 */

export class ErrorHandler extends ExtendableError {
  /**
   * Creates an API error.
   * @param {string} message - Error message.
   * @param {number} status - HTTP status code of error.
   * @param {boolean} isPublic - Whether the message should be visible to user or not.
   */
  constructor(message: any, status = 500, isPublic = false) {
    super(message, status, isPublic);

    Error.captureStackTrace(this, this.constructor);
  }
}

//  export ErrorHandler;
