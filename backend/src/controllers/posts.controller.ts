import mongoose from "mongoose";
import HTTP_NAME from "../constants/httpName";
import HTTP_STATUS from "../constants/httpStatus";
import { Posts } from "../models/posts.model";
import {
  defaultErrorHandler,
  defaultSuccessHandler,
  wrapRequestHandler,
} from "../utils/errorBoundary";
import { findWithCondition, ICondition } from "../utils/getCondition";
import { IPost } from "../types/post.type";
import { checkIdType } from "../utils/checkId";
import { Comments } from "../models/comments.model";

export const getAllPosts = wrapRequestHandler(async (req, res) => {
  const { page, _limit, title }: ICondition = req.query;
  const posts = await findWithCondition(Posts, { page, _limit, title });
  if (posts?.data?.length) {
    return defaultSuccessHandler(
      res,
      posts.data,
      HTTP_STATUS.OK,
      "Get all posts successfully",
      posts.allData.length
    );
  } else {
    return defaultErrorHandler(
      {
        status: HTTP_STATUS.NOT_FOUND,
        message: "Not found any post",
        name: HTTP_NAME.NOT_FOUND,
      },
      res
    );
  }
});
export const getPostById = wrapRequestHandler(async (req, res) => {
  const postId = req.params.postId;
  const isValidId = checkIdType(postId, res);
  if (isValidId) {
    const post = await findWithCondition(Posts, { id: postId });
    if (post.data) {
      return defaultSuccessHandler(
        res,
        post.data,
        HTTP_STATUS.OK,
        "Get post by id successfully"
      );
    } else {
      return defaultErrorHandler(
        {
          status: HTTP_STATUS.NOT_FOUND,
          message: "Post id is invalid",
          name: HTTP_NAME.NOT_FOUND,
        },
        res
      );
    }
  } else {
    return isValidId;
  }
});
export const createPost = wrapRequestHandler(async (req, res) => {
  const { owner, title, content, tags }: IPost = req.body;
  if (!title) {
    return defaultErrorHandler(
      {
        status: HTTP_STATUS.BAD_REQUEST,
        message: "Title must be filled",
        name: HTTP_NAME.BAD_REQUEST,
      },
      res
    );
  }
  const createdPost = await Posts.create({
    _id: new mongoose.Types.ObjectId(),
    title,
    owner,
    content,
    tags,
    created_at: new Date().getTime(),
  });
  return defaultSuccessHandler(
    res,
    createdPost,
    HTTP_STATUS.CREATED,
    "Created new post successfully"
  );
});
export const updatePostById = wrapRequestHandler(async (req, res) => {
  const postId = req.params.postId;
  const isValidId = checkIdType(postId, res);
  if (isValidId) {
    const updatedPost = await Posts.findByIdAndUpdate(postId, req.body);
    if (updatedPost) {
      const post = await Posts.findById(postId);
      return defaultSuccessHandler(
        res,
        post,
        HTTP_STATUS.OK,
        "Updated post successfully"
      );
    } else {
      return defaultErrorHandler(
        {
          status: HTTP_STATUS.BAD_REQUEST,
          message: "Bad request",
          name: HTTP_NAME.BAD_REQUEST,
        },
        res
      );
    }
  } else {
    return isValidId;
  }
});
export const deletePostById = wrapRequestHandler(async (req, res) => {
  const postId = req.params.postId;
  const isValidId = checkIdType(postId, res);
  if (isValidId) {
    const deletedPost = await Posts.findByIdAndDelete(postId);
    if (deletedPost) {
      await Comments.deleteMany({ post: postId });
      return defaultSuccessHandler(
        res,
        [],
        HTTP_STATUS.OK,
        "Delete post successfully",
        0
      );
    } else {
      return defaultErrorHandler(
        {
          status: HTTP_STATUS.NOT_FOUND,
          message: "Not found any post",
          name: HTTP_NAME.NOT_FOUND,
        },
        res
      );
    }
  } else {
    return isValidId;
  }
});
