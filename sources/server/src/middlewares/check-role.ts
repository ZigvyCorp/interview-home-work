import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status-codes';

import { CustomError } from '../utils/custom-error';
import { Role } from '../apis/types';

/**
 * @param roles: list role authorization
 * @param isSelfAllowed: Check self action
 * @returns next() | next(error)
 */

export const checkRole =
    (roles: Role[], isSelfAllowed = false) =>
    async (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.jwtPayload;
        const { userID } = req.params;

        if (isSelfAllowed) {
            if (id === userID) {
                return next();
            }
            const error = new CustomError(httpStatus.BAD_REQUEST, 'Authorization', 'Self allowed action');
            return next(error);
        }

        // if (roles.indexOf(role) === -1) {
        //     const error = new CustomError(
        //         httpStatus.UNAUTHORIZED,
        //         'Authorization',
        //         `Unauthorized - Insufficient user rights. Current role: ${role}. Required role: ${roles.toString()}`,
        //     );
        //     return next(error);
        // }

        return next();
    };
