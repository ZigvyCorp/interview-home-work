import { NextFunction, Request, Response, Router } from "express";
import { DATA_TYPE, checkDataRequest, getDataRequest } from "../../middlewares/getData.middleware";
import { grantPermission } from "../../middlewares/jwt.middleware";
import { isNotEmpty, isString } from "../../middlewares/valid.middleware";
import { commentBlog, getBlogCommentsById } from "./comment.controller";
import { IBlogCommentCreate } from "./comment.model";

export const CommentRoute = Router();

CommentRoute.post("/", grantPermission,
    (req: Request, res: Response, next: NextFunction) =>
        isNotEmpty({ key: "comment", value: (getDataRequest(req, DATA_TYPE.BODY) as IBlogCommentCreate)?.comment }, res, next),
    (req: Request, res: Response, next: NextFunction) =>
        isString({ key: "comment", value: (getDataRequest(req, DATA_TYPE.BODY) as IBlogCommentCreate)?.comment }, res, next),
    (req: Request, res: Response, next: NextFunction) =>
        isNotEmpty({ key: "userComment", value: (getDataRequest(req, DATA_TYPE.BODY) as IBlogCommentCreate)?.userComment }, res, next),
    (req: Request, res: Response, next: NextFunction) =>
        isString({ key: "userComment", value: (getDataRequest(req, DATA_TYPE.BODY) as IBlogCommentCreate)?.userComment }, res, next),
    (req: Request, res: Response, next: NextFunction) =>
        isNotEmpty({ key: "blog", value: (getDataRequest(req, DATA_TYPE.BODY) as IBlogCommentCreate)?.blog }, res, next),
    (req: Request, res: Response, next: NextFunction) =>
        isString({ key: "blog", value: (getDataRequest(req, DATA_TYPE.BODY) as IBlogCommentCreate)?.blog }, res, next),
    commentBlog)

CommentRoute.get("/list-comment/:id", grantPermission,
    (req: Request, res: Response, next: NextFunction) =>
        checkDataRequest(req, res, next, DATA_TYPE.PARAM),
    (req: Request, res: Response, next: NextFunction) =>
        isNotEmpty({ key: "id", value: (getDataRequest(req, DATA_TYPE.PARAM))?.id }, res, next),
    (req: Request, res: Response, next: NextFunction) =>
        isString({ key: "id", value: (getDataRequest(req, DATA_TYPE.PARAM))?.id }, res, next),
    getBlogCommentsById);