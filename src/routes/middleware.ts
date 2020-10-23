import { Request, Response, NextFunction } from 'express';
import { UNAUTHORIZED } from 'http-status-codes';
import { cookieProps } from '@shared/constants';
import { JwtService } from '@shared/JwtService';

const jwtService = new JwtService();
export const acceptedUserMW = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const jwt = req.signedCookies[ cookieProps.key ];
        if (!jwt) {
            throw Error('JWT not present in signed cookie.');
        }
        const clientData = await jwtService.decodeJwt(jwt);
        res.locals.userId = clientData.id;
        next();
    } catch (err) {
        return res.status(UNAUTHORIZED).json({
            error: err.message,
        });
    }
};
