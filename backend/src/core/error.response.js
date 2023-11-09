const { ReasonPhrases, StatusCode } = require("../utils/httpStatusCode");
const reasonPharse = require("../utils/reasonPharse");
const statusCodes = require("../utils/statusCodes");

class ErrorMessage extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}

class ConflictRequestError extends ErrorMessage {
    constructor(
        message = ReasonPhrases.CONFLICT,
        statusCode = StatusCode.CONFLICT
    ) {
        super(message, statusCode);
    }
}

class BadRequestError extends ErrorMessage {
    constructor(
        message = ReasonPhrases.CONFLICT,
        statusCode = StatusCode.CONFLICT
    ) {
        super(message, statusCode);
    }
}

class AuthFailureError extends ErrorMessage {
    constructor(
        message = reasonPharse.UNAUTHORIZED,
        statusCode = statusCodes.UNAUTHORIZED
    ) {
        super(message, statusCode);
    }
}

class NotFoundError extends ErrorMessage {
    constructor(
        message = reasonPharse.NOT_FOUND,
        statusCode = statusCodes.NOT_FOUND
    ) {
        super(message, statusCode);
    }
}

class ForbidenError extends ErrorMessage {
    constructor(
        message = reasonPharse.FORBIDDEN,
        statusCode = statusCodes.FORBIDDEN
    ) {
        super(message, statusCode);
    }
}

module.exports = {
    ConflictRequestError,
    BadRequestError,
    AuthFailureError,
    NotFoundError,
    ForbidenError,
};
