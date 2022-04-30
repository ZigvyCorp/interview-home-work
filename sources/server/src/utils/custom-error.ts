import { env } from '../configs/env';
import { ErrorResponse } from '../types/error';

export class CustomError extends Error {
    private statusCode: number;

    private errorType: string;

    private isOperational: boolean;

    constructor(
        statusCode: number,
        errorType: string,
        message: string,
        isOperational: boolean = true,
        stack: string = '',
    ) {
        super(message);
        this.statusCode = statusCode;
        this.errorType = errorType;
        this.isOperational = isOperational;

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }

    get HttpStatusCode() {
        return this.statusCode;
    }

    get JSON(): ErrorResponse {
        return {
            errorType: this.errorType,
            errorMessage: this.message,
            ...(env.isDevelopment && { stack: this.stack }),
        };
    }
}
