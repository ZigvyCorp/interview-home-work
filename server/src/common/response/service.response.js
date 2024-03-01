export default class ServiceResponse {
  /**
   * @param {boolean} status - Status success or fail.
   * @param {string} message - Response message.
   * @param {object|array} data - Data or errors.
   */
  constructor(status, message = "", data = null, logError = null) {
    if (!logError && typeof message === "object") {
      logError = message;
      message = logError.message;
    }

    this.message = message;
    this.status = status;
    this.logError = logError;
    this.logStack = (logError && logError.stack) || "";
    if (status) {
      this.data = data;
    } else {
      this.errors = data;
    }
  }

  getStatus() {
    return this.status;
  }

  isSuccess() {
    return this.status ? true : false;
  }

  isFailed() {
    return this.status ? false : true;
  }

  getMessage() {
    return this.message;
  }

  getData() {
    return this.data;
  }

  getErrors() {
    return this.errors;
  }

  getLogError() {
    return this.logError;
  }

  getLogStack() {
    return this.logStack;
  }
}
