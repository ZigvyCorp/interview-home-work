import httpStatus from "http-status";
import BaseResponse from "./base.response.js";

export default class ErrorResponse extends BaseResponse {
  /**
   * @param {number} status - HTTP status code.
   * @param {object} errors - Error messages.
   * @param {string} message - Error descriptive message.
   */
  constructor(status, errors = {}, message = "") {
    if (!status) {
      status = httpStatus.BAD_REQUEST;
    }
    super(null, message, status, errors);
  }
}
