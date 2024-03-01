import httpStatus from "http-status";

class BaseResponse {
  /**
   * @param {object} data - Data Object.
   * @param {string} message - Response message.
   * @param {number} status - HTTP status code.
   * @param {object} errors - Errors.
   */
  constructor(data = null, message = "", status = httpStatus.OK, errors = null) {
    this.data = data;
    this.message = message;
    this.status = status;
    this.errors = errors;
  }
}

export default BaseResponse;
