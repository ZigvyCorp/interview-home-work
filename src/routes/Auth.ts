import { Request, Response, Router } from 'express';
import { BAD_REQUEST, OK, UNAUTHORIZED } from 'http-status-codes';

import UserDao from '@daos/User/UserDao';
import { JwtService } from '@shared/JwtService';
import { paramMissingError, loginFailedErr, cookieProps } from '@shared/constants';
import logger from '@shared/Logger';


const router = Router();
const userDao = new UserDao();
const jwtService = new JwtService();


/******************************************************************************
 *                      Login User - "POST /api/auth/login"
 ******************************************************************************/

router.post('/login', async (req: Request, res: Response) => {
    // Check username and password present
    const { userName, password } = req.body;
    if (!(userName && password)) {
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }
    // Fetch user
    const user = await userDao.getOne(userName);
    if (!user) {
        return res.status(UNAUTHORIZED).json({
            error: loginFailedErr,
        });
    }
    // Check password
    if (password !== user.password) {
        return res.status(UNAUTHORIZED).json({
            error: loginFailedErr,
        });
    }
    // Setup Cookie
    const jwt = await jwtService.getJwt({
        id: user.id,
    });
    const { key, options } = cookieProps;
    res.cookie(key, jwt, options);
    // Return
    return res.status(OK).end();
});


/******************************************************************************
 *                      Logout - "GET /api/auth/logout"
 ******************************************************************************/

router.get('/logout', async (req: Request, res: Response) => {
    const { key, options } = cookieProps;
    res.clearCookie(key, options);
    return res.status(OK).end();
});

export default router;
