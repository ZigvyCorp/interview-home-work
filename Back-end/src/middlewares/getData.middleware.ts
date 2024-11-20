import { NextFunction, Request, Response } from "express";

export enum DATA_TYPE {
    BODY = 'body',
    HEADER = 'header',
    PARAM = 'param',
    QUERY = 'query',
}
export const getDataRequest = (req: Request, type: DATA_TYPE) => {
    switch (type) {
        case DATA_TYPE.BODY:
            return req.body;
        case DATA_TYPE.HEADER:
            return req.headers;
        case DATA_TYPE.PARAM:
            return req.params;
        case DATA_TYPE.QUERY:
            return req.query;
        default:
            return null;
    }

}
export const checkDataRequest = (req: Request, res: Response, next: NextFunction, type: DATA_TYPE): any => {
    return Boolean(getDataRequest(req, type)) ? next() : res.status(400).send({ message: `${type} is required` });
}
