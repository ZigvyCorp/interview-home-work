import { NextFunction, Response, Request, Router } from "express";
import { listUsers, login, detailUser, register, allMyBlog } from "./user.controller";
import { grantPermission, refreshToken } from "../../middlewares/jwt.middleware";
import { DATA_TYPE, checkDataRequest, getDataRequest } from "../../middlewares/getData.middleware";
import { isEmail, isNotEmpty, isString, passwordRegex } from "../../middlewares/valid.middleware";
import { ICreateUser, ILoginUser } from "./user.model";

export const UserRoute = Router();

UserRoute.get("/list-user", grantPermission, listUsers);

UserRoute.get("/detail-user/:id", grantPermission,
    (req: Request, res: Response, next: NextFunction) =>
        checkDataRequest(req, res, next, DATA_TYPE.PARAM),
    (req: Request, res: Response, next: NextFunction) =>
        isNotEmpty({ key: "id", value: (getDataRequest(req, DATA_TYPE.PARAM))?.id }, res, next),
    (req: Request, res: Response, next: NextFunction) =>
        isString({ key: "id", value: (getDataRequest(req, DATA_TYPE.PARAM))?.id }, res, next),
    detailUser);

UserRoute.get("/refresh-token", grantPermission,
    (req: Request, res: Response, next: NextFunction) =>
        checkDataRequest(req, res, next, DATA_TYPE.BODY),
    (req: Request, res: Response, next: NextFunction) =>
        isNotEmpty({ key: "refreshToken", value: (getDataRequest(req, DATA_TYPE.BODY))?.refreshToken }, res, next),
    (req: Request, res: Response, next: NextFunction) =>
        isString({ key: "refreshToken", value: (getDataRequest(req, DATA_TYPE.BODY))?.refreshToken }, res, next),
    refreshToken);

UserRoute.post("/login",
    (req: Request, res: Response, next: NextFunction) =>
        isNotEmpty({ key: "email", value: (getDataRequest(req, DATA_TYPE.BODY) as ILoginUser)?.email }, res, next),
    (req: Request, res: Response, next: NextFunction) =>
        isEmail({ key: "email", value: (getDataRequest(req, DATA_TYPE.BODY) as ILoginUser)?.email }, res, next),
    (req: Request, res: Response, next: NextFunction) =>
        isNotEmpty({ key: "password", value: (getDataRequest(req, DATA_TYPE.BODY) as ILoginUser)?.password }, res, next),
    (req: Request, res: Response, next: NextFunction) =>
        passwordRegex({ key: "password", value: (getDataRequest(req, DATA_TYPE.BODY) as ILoginUser)?.password }, res, next),
    (req: Request, res: Response, next: NextFunction) =>
        checkDataRequest(req, res, next, DATA_TYPE.BODY), login);

UserRoute.post("/register",
    (req: Request, res: Response, next: NextFunction) =>
        isNotEmpty({ key: "email", value: (getDataRequest(req, DATA_TYPE.BODY) as ICreateUser)?.email }, res, next),
    (req: Request, res: Response, next: NextFunction) =>
        isEmail({ key: "email", value: (getDataRequest(req, DATA_TYPE.BODY) as ICreateUser)?.email }, res, next),
    (req: Request, res: Response, next: NextFunction) =>
        isNotEmpty({ key: "password", value: (getDataRequest(req, DATA_TYPE.BODY) as ICreateUser)?.password }, res, next),
    (req: Request, res: Response, next: NextFunction) =>
        passwordRegex({ key: "password", value: (getDataRequest(req, DATA_TYPE.BODY) as ICreateUser)?.password }, res, next),
    (req: Request, res: Response, next: NextFunction) =>
        isNotEmpty({ key: "name", value: (getDataRequest(req, DATA_TYPE.BODY) as ICreateUser)?.name }, res, next),
    (req: Request, res: Response, next: NextFunction) =>
        isString({ key: "name", value: (getDataRequest(req, DATA_TYPE.BODY) as ICreateUser)?.name }, res, next),
    (req: Request, res: Response, next: NextFunction) =>
        checkDataRequest(req, res, next, DATA_TYPE.BODY), register);

UserRoute.get('/my-blog/:id', grantPermission,
    (req: Request, res: Response, next: NextFunction) =>
        isNotEmpty({ key: "id", value: (getDataRequest(req, DATA_TYPE.PARAM))?.id }, res, next),
    (req: Request, res: Response, next: NextFunction) =>
        isString({ key: "id", value: (getDataRequest(req, DATA_TYPE.PARAM))?.id }, res, next),
    allMyBlog)
