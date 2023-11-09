const { StatusCode, ReasonPhrases } = require("../utils/httpStatusCode");

class SuccessResponse {
    constructor({
        message,
        statusCode = StatusCode.OK,
        reasonStatusCode = ReasonPhrases.OK,
        metadata = {},
    }) {
        this.message = !message ? reasonStatusCode : message;
        this.status = statusCode;
        this.metadata = metadata;
    }

    send(res) {
        return res.status(this.status).json(this);
    }
}

module.exports = {
    SuccessResponse,
};
