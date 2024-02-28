import { Request, Response, NextFunction } from "express";
import UserService from "../services/user-service";
import { StatusCodes } from "http-status-codes";


class UserController {
    static createUser = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            let { id, name, username, email, password } = req.body;

            let response = await UserService.createUser({
                id,
                name,
                username,
                email,
                password,
            });

            res.status(StatusCodes.OK).json(response);
        } catch (err) {
            next(err);
        }
    };

    static loginUser = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            let { email, password } = req.body;
            const response = await UserService.loginUser(email, password);
            res.status(StatusCodes.OK).json(response);
        } catch (err) {
            next(err);
        }
    };

    static refreshAccessToken = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            let refreshToken = req.body.refreshToken;
            const response = UserService.verifyRefreshToken(refreshToken);
            if (response) res.status(StatusCodes.OK).json(response);

            res.status(200).json({
                type: "Error",
                code: 404,
                message: "Server error",
            });
        } catch (errr) {
            next(errr);
        }
    };

    static getUserByToken = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const { token } = req.params;
            const response = await UserService.getUserByToken(token);
            res.status(StatusCodes.OK).json(response);
        } catch (err) {
            next(err);
        }
    };
}

export default UserController;
