class Response {
    constructor(errorCode, message, data) {
        this.errorCode = errorCode;
        this.message = message;
        this.data = data;
    }

    static successResponse(message, data) {
        return new Response(0, message, data);
    }

    static requireDataResponse(message, data) {
        return new Response(1, message, data);
    }

    static notFoundResponse(message, data) {
        return new Response(2, message, data);
    }

    static noAuthorizationResponse(message, data) {
        return new Response(3, message, data);
    }

    static invalidAuthorizationResponse(message, data) {
        return new Response(4, message, data);
    }

    static unknowRouter(message, data) {
        return new Response(5, message, data);
    }

    static unknowErrorResponse(message, data) {
        return new Response(99, message, data);
    }
}

module.exports = Response; // doi tuong Object