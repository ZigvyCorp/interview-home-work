import { NextFunction, Request, Response } from "express";
import {
  create,
  deletePostById,
  findAndUpdate,
  findAndUpdatePatch,
  getAll,
  getById,
} from "../services/post.service";
import { IPostsModel } from "models/post.model";

export const getAllPosts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const posts = await getAll(req.query);
    return res.status(200).json(posts).end();
  } catch (e) {
    next(e);
  }
};

export const getPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const post = await getById(req.params.id);
    return res.status(200).json(post);
  } catch (e) {
    next(e);
  }
};

export const createPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const post: IPostsModel = req.body;
    const newPost = await create(post);
    return res.status(200).json(newPost).end();
  } catch (e) {
    next(e);
  }
};

export const updatePost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const post: IPostsModel = req.body;
    const updatePost = await findAndUpdate(req.params.id, post);
    return res.status(200).json(updatePost).end();
  } catch (e) {
    next(e);
  }
};

export const updatePostPatch = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const post: IPostsModel = req.body;
    const updatePost = await findAndUpdatePatch(req.params.id, post);
    return res.status(200).json(updatePost).end();
  } catch (e) {
    next(e);
  }
};

export const getComments = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const lastPath = req.path.slice(
      -req.path.lastIndexOf("/"),
      req.path.length
    );
    const post = await getById(req.params.id, lastPath);
    return res.status(200).json(post.comments).end();
  } catch (e) {
    next(e);
  }
};

export const deletePost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await deletePostById(req.params.id);
    return res.status(204).end();
  } catch (e) {
    next(e);
  }
};
