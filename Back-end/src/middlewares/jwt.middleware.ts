import { NextFunction, Request, Response } from 'express';
import { JwtPayload, sign, verify } from 'jsonwebtoken';
import { DATA_TYPE, getDataRequest } from './getData.middleware';

interface UserJwt extends JwtPayload {
    id: string;
    name: string;
    email: string;
    active: boolean;
}

export enum TOKEN_TYPE {
    ACCESS_TOKEN = "ACCESS_TOKEN",
    REFRESH_TOKEN = "REFRESH_TOKEN"
}

export class JwtMiddleware {
    private SECRET_KEY: string;
    private SECRET_REFRESH_KEY: string;
    private REGISTER_KEY: string;

    constructor(SECRET_KEY: string, SECRET_REFRESH_KEY: string, REGISTER_KEY: string) {
        this.SECRET_KEY = SECRET_KEY;
        this.SECRET_REFRESH_KEY = SECRET_REFRESH_KEY;
        this.REGISTER_KEY = REGISTER_KEY;
    }

    public accessToken(User: UserJwt) {
        return sign(User, this.SECRET_KEY, { expiresIn: "1d" })
    }

    public refreshToken(User: UserJwt) {
        return sign(User, this.SECRET_REFRESH_KEY, { expiresIn: "30d" })
    }

    public verifyToken(token: string, type: TOKEN_TYPE): UserJwt {
        return verify(token, type === TOKEN_TYPE.ACCESS_TOKEN ? this.SECRET_KEY : this.SECRET_REFRESH_KEY) as UserJwt;
    }

    public isTokenExpired(token: string, type: TOKEN_TYPE): boolean {
        const User = this.verifyToken(token, type)
        if (User?.id && User?.exp as number < new Date().getTime()) return false;
        return true;
    }

    public newToken(refreshToken: string, type: TOKEN_TYPE): string | null {
        const verify = this.verifyToken(refreshToken, type)
        if (!verify?.id) return null;
        switch (type) {
            case TOKEN_TYPE.ACCESS_TOKEN:
                return this.refreshToken({ ...verify })

            case TOKEN_TYPE.REFRESH_TOKEN:
                return this.accessToken({ ...verify })

            default:
                return null;
        }
    }

    public registerToken(User: UserJwt) {
        return sign(User, this.REGISTER_KEY, { expiresIn: "5m" })
    }
}


const middleware = new JwtMiddleware(
    process.env.SECRET_KEY as string,
    process.env.SECRET_REFRESH_KEY as string,
    process.env.SECRET_REGISTER_KEY as string,
);


export function grantPermission(req: Request, res: Response, next: NextFunction) {
    const token = getDataRequest(req, DATA_TYPE.HEADER)?.authorization?.replace('Bearer ', "")
    if (!token) return res.status(403).send({ message: "Unauthorized" }).end();
    if (middleware.isTokenExpired(token as string, TOKEN_TYPE.ACCESS_TOKEN))
        return res.status(400).send({ message: "Token expired" }).end();
    next()
}

export function refreshToken(req: Request, res: Response) {
    const token = req.body.refreshToken;
    return res.status(200).send(middleware.newToken(token, TOKEN_TYPE.REFRESH_TOKEN)).end();
}