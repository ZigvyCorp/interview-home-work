"use strict";

const { StatusCodes, ReasonPhrases } = require("../utils/httpStatusCode");

class SuccessResponse {
  constructor(
    message,
    statusCode = StatusCodes.OK,
    reasonStatusCode = ReasonPhrases.OK,
    data = {}
  ) {
    this.message = message ? message : reasonStatusCode;
    this.statusCode = statusCode;
    this.data = data;
  }
  send(res, headers = {}) {
    return res.status(this.statusCode).json(this);
  }
}

class OK extends SuccessResponse {
  constructor({
    message,
    statusCode = StatusCodes.OK,
    reasonStatusCode = ReasonPhrases.OK,
    data,
  }) {
    super(message, statusCode, reasonStatusCode, data);
  }
}
class Created extends SuccessResponse {
  constructor({
    options = {},
    message,
    statusCode = StatusCodes.CREATED,
    reasonStatusCode = ReasonPhrases.CREATED,
    data,
  }) {
    super(message, statusCode, reasonStatusCode, data);
    this.options = options;
  }
}
class Accepted extends SuccessResponse {
  constructor({
    message,
    statusCode = StatusCodes.ACCEPTED,
    reasonStatusCode = ReasonPhrases.ACCEPTED,
    data,
  }) {
    super(message, statusCode, reasonStatusCode, data);
  }
}
class Updated extends SuccessResponse {
  constructor({
    message,
    statusCode = StatusCodes.OK,
    reasonStatusCode = ReasonPhrases.OK,
    data,
  }) {
    super(message, statusCode, reasonStatusCode, data);
  }
}

module.exports = {
  OK,
  Created,
  Accepted,
  Updated,
};