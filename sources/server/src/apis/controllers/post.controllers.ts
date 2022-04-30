import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status-codes';
import { postService } from '../services';
import catchAsync from '../../utils/catch-async';

const getPosts = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const posts = await postService.getPosts();
    return res.status(httpStatus.OK).send({ posts });
});

const getCommentsByPost = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const comments = await postService.getCommentsByPost(req.params.postID);
    return res.status(httpStatus.OK).send({ comments });
});

const createPost = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    req.body.owner = req.jwtPayload.id;
    const post = await postService.createPost(req.body);
    return res.status(httpStatus.CREATED).send({ post });
});

const updatePost = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    req.body.owner = req.jwtPayload.id;
    const updatedPost = await postService.updatePost(req.params.postID, req.body);
    return res.status(httpStatus.OK).send({ updatedPost });
});

const deletePost = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const deletedPost = await postService.deletePost(req.params.postID);
    return res.status(httpStatus.OK).send({ deletedPost });
});

export { getPosts, createPost, updatePost, deletePost, getCommentsByPost };
