import httpStatus from "http-status";
import BaseResponse from "./base.response";

export default class NotFoundResponse extends BaseResponse {
  constructor() {
    super(null, httpStatus["404"], httpStatus.NOT_FOUND, null);
  }
}
