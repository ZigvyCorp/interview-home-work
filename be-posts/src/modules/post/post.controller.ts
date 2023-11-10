import httpStatus from 'http-status';
import { Request, Response } from 'express';
import { catchAsync, pick } from '../utils';
import * as postService from './post.service';
import { IOptions } from '../paginate/paginate';
import { ApiError } from '../errors';
import mongoose from 'mongoose';

export const createPost = catchAsync(async (req: Request, res: Response) => {
  const post = await postService.createPost(req.body);
  res.status(httpStatus.CREATED).send(post);
});

export const getPosts = catchAsync(async (req: Request, res: Response) => {
  const filter = pick(req.query, ['title']);
  const options: IOptions = pick(req.query, ['sortBy', 'limit', 'page', 'projectBy']);
  const result = await postService.queryPosts(filter, options);

  res.send(result);
});

export const getPostById = catchAsync(async (req: Request, res: Response) => {
  if (typeof req.params['id'] === 'string') {
    const user = await postService.getPostById(new mongoose.Types.ObjectId(req.params['id']));
    if (!user) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Post not found');
    }
    res.send(user);
  }
});
