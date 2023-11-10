import httpStatus from 'http-status';
import { Request, Response } from 'express';
import { catchAsync, pick } from '../utils';
import * as commentService from './comment.service';
import { IOptions } from '../paginate/paginate';
import { ApiError } from '../errors';
import mongoose from 'mongoose';

export const createComment = catchAsync(async (req: Request, res: Response) => {
  const comment = await commentService.createComment(req.body);
  res.status(httpStatus.CREATED).send(comment);
});

export const getComments = catchAsync(async (req: Request, res: Response) => {
  const filter = pick(req.query, ['postId']);
  const options: IOptions = pick(req.query, ['sortBy', 'limit', 'page', 'projectBy']);
  const result = await commentService.queryComments(filter, options);

  res.send(result);
});

export const getCommentByPostId = catchAsync(async (req: Request, res: Response) => {
  if (typeof req.params['postId'] === 'string') {
    const user = await commentService.getCommentByPostIds(new mongoose.Types.ObjectId(req.params['postId']));
    if (!user) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Comment not found');
    }
    res.send(user);
  }
});
