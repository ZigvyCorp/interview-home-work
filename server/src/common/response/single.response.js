import BaseResponse from "./base.response.js";

export default class SingleResponse extends BaseResponse {
  /**
   * @param {object} data - Data Object.
   * @param {string} message - Response message.
   */
  constructor(data = {}, message = "") {
    super(data, message);
  }

  setData(data) {
    this.data = { ...this.data, ...data };
  }
}
