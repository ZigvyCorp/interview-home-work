import httpStatus from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import { CustomError } from '../utils/custom-error';

//  Catch 404
export const catchErrorNotFound = (req: Request, res: Response, next: NextFunction) => {
    const err = new CustomError(httpStatus.NOT_FOUND, 'Raw', 'API URI Not Found ');
    next(err);
};

// Convert Error Unknown to CustomError
const errorConverter = (err: Error, req: Request, res: Response, next: NextFunction) => {
    let error = err;
    if (!(error instanceof CustomError)) {
        const statusCode = error instanceof mongoose.Error ? httpStatus.BAD_REQUEST : httpStatus.INTERNAL_SERVER_ERROR;
        const errorType = error.name;
        const message = error.message || httpStatus.getStatusText(statusCode);
        error = new CustomError(statusCode, errorType, message);
    }
    next(error);
};

const errorHandler = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
    res.status(err.HttpStatusCode).json(err.JSON);
};

export { errorConverter, errorHandler };
