import { NextFunction, Request, Response, Router } from "express";
import { DATA_TYPE, getDataRequest } from "../../middlewares/getData.middleware";
import { grantPermission } from "../../middlewares/jwt.middleware";
import { isNotEmpty, isString } from "../../middlewares/valid.middleware";
import { allBlog, createBlog, detailBlog } from "./blog.controller";
import { ICreateBlog } from "./blog.model";

export const BlogRoute = Router();

BlogRoute.get('/', allBlog)

BlogRoute.post('/', grantPermission,
    (req: Request, res: Response, next: NextFunction) =>
        isNotEmpty({ key: "author", value: (getDataRequest(req, DATA_TYPE.BODY) as ICreateBlog)?.author }, res, next),
    (req: Request, res: Response, next: NextFunction) =>
        isString({ key: "author", value: (getDataRequest(req, DATA_TYPE.BODY) as ICreateBlog)?.author }, res, next),
    (req: Request, res: Response, next: NextFunction) =>
        isNotEmpty({ key: "content", value: (getDataRequest(req, DATA_TYPE.BODY) as ICreateBlog)?.content }, res, next),
    (req: Request, res: Response, next: NextFunction) =>
        isString({ key: "content", value: (getDataRequest(req, DATA_TYPE.BODY) as ICreateBlog)?.content }, res, next),
    (req: Request, res: Response, next: NextFunction) =>
        isNotEmpty({ key: "title", value: (getDataRequest(req, DATA_TYPE.BODY) as ICreateBlog)?.title }, res, next),
    (req: Request, res: Response, next: NextFunction) =>
        isString({ key: "title", value: (getDataRequest(req, DATA_TYPE.BODY) as ICreateBlog)?.title }, res, next),
    createBlog)

BlogRoute.get('/detail-blog/:id', grantPermission,
    (req: Request, res: Response, next: NextFunction) =>
        isNotEmpty({ key: "id", value: (getDataRequest(req, DATA_TYPE.PARAM))?.id }, res, next),
    (req: Request, res: Response, next: NextFunction) =>
        isString({ key: "id", value: (getDataRequest(req, DATA_TYPE.PARAM))?.id }, res, next),
    detailBlog)