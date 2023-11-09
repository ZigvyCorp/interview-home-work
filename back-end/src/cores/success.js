class Success {
    constructor(status, data, message) {
        this.data = data;
        this.message = message;
        this.status = status;
    }

    send(res) {
        res.status(this.status).json({
            status: this.status,
            message: this.message,
            data: this.data,
        })
    }
}

class Ok extends Success {
    constructor(data, message = "OK") {
        super(200, data, message);
    }
}

class Created extends Success {
    constructor(data, message="Created") {
        super(201, data, message);
    }
}

class Accepted extends Success {
    constructor(data, message="Accepted") {
        super(202, data, message);
    }
}

class NoContent extends Success {
    constructor(data, message="No Content") {
        super(204, data, message);
    }
}

exports.Ok = Ok;
exports.Created = Created;
exports.Accepted = Accepted;
exports.NoContent = NoContent;
