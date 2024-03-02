const { StatusCodes, ReasonPhrases } = require('../utils/httpStatusCode');

class SuccessResponse {
    constructor({message, statusCode = StatusCodes.OK, reasonStatusCode = ReasonPhrases.OK, metadata = {}}) {
        this.message = message;
        this.statusCode = statusCode;
        this.reasonStatusCode = reasonStatusCode;
        this.metadata = metadata;
    }

    send(res, headers = {}) {
        return res.status(this.statusCode).json(this)
    }
}

class OkResponse extends SuccessResponse {
    constructor({message, statusCode = StatusCodes.OK, reasonStatusCode = ReasonPhrases.OK, metadata}) {
        super({message, statusCode, reasonStatusCode, metadata});
    }
}

class CreatedResponse extends SuccessResponse {
    constructor({message, statusCode = StatusCodes.CREATED, reasonStatusCode = ReasonPhrases.CREATED, metadata}) {
        super({message, statusCode, reasonStatusCode, metadata});
    }
}

module.exports = {
    OkResponse,
    CreatedResponse,
}