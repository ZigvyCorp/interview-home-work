import { StatusCodes } from 'http-status-codes';
import { Response } from 'express';

const responseHandler = (res: Response, status: any, message: any, data: any) => {
    if (status !== StatusCodes.OK
        && status !== StatusCodes.CREATED) {
        console.log('ERROR :', message);
    }
    res.status(status).json({
        data: data || {},
        message: message || '',
    })
}

export default responseHandler;