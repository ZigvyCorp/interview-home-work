import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status-codes';
import jwt from 'jsonwebtoken';

import { JwtPayload } from '../types/jwt-payload.type';
import { env } from '../configs/env';
import { CustomError } from '../utils/custom-error';

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.get('Authorization');
    if (!authHeader) {
        throw new CustomError(httpStatus.UNAUTHORIZED, 'Authentication', 'Authentication header not provided');
    }
    const token = authHeader.split(' ')[1];
    let jwtPayload: { [key: string]: any };
    try {
        jwtPayload = jwt.verify(token, env.passport.jwtToken) as {
            [key: string]: any;
        };
        ['iat', 'exp'].forEach((keyToRemove) => delete jwtPayload[keyToRemove]);
        req.jwtPayload = jwtPayload as JwtPayload;
        next();
    } catch (err) {
        next(err);
    }
};
