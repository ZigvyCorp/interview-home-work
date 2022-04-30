import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status-codes';
import catchAsync from '../../utils/catch-async';
import { commentService } from '../services';

const createComment = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    req.body.owner = req.jwtPayload.id;
    const comment = await commentService.createComment(req.body);
    return res.status(httpStatus.CREATED).send({ comment });
});

const updateComment = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    req.body.owner = req.jwtPayload.id;
    const updatedComment = await commentService.updateComment(req.params.commentID, req.body);
    return res.status(httpStatus.OK).send({ updatedComment });
});

const deleteComment = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const deletedComment = await commentService.deleteComment(req.params.commentID);
    return res.status(httpStatus.OK).send({ deletedComment });
});

export { createComment, updateComment, deleteComment };
