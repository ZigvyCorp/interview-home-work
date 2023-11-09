class ErrorStatus extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
    }
}

class BadRequest extends ErrorStatus {
    constructor(message) {
        super(400, message);
    }
}

class Unauthorized extends ErrorStatus {
    constructor(message) {
        super(401, message);
    }
}

class Forbidden extends ErrorStatus {
    constructor(message) {
        super(403, message);
    }
}

class NotFound extends ErrorStatus {
    constructor(message) {
        super(404, message);
    }
}

class MethodNotAllowed extends ErrorStatus {
    constructor(message) {
        super(405, message);
    }
}

class NotAcceptable extends ErrorStatus {
    constructor(message) {
        super(406, message);
    }
}

class Conflict extends ErrorStatus {
    constructor(message) {
        super(409, message);
    }
}

exports.BadRequest = BadRequest;
exports.Unauthorized = Unauthorized;
exports.Forbidden = Forbidden;
exports.NotFound = NotFound;
exports.MethodNotAllowed = MethodNotAllowed;
exports.NotAcceptable = NotAcceptable;
exports.Conflict = Conflict;
