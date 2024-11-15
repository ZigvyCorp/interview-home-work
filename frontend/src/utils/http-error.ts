export class HttpError extends Error {
    status: number;
    payload: any;

    constructor(data: HttpError) {
        super();
        this.status = data.status;
        this.payload = data.payload;
    }
}

export class ErrorWithStatus {
    message: string;
    status: number;
    constructor({ message, status }: { message: string; status: number }) {
        this.message = message;
        this.status = status;
    }
}

export class UnauthorizedError {
    message: string;
    status: number;
    constructor({ message, status }: { message: string; status: number }) {
        this.message = message;
        this.status = status;
    }
}
