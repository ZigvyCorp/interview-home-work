import mongoose from "mongoose";
import HTTP_NAME from "../constants/httpName";
import HTTP_STATUS from "../constants/httpStatus";
import {
  defaultErrorHandler,
  defaultSuccessHandler,
  wrapRequestHandler,
} from "../utils/errorBoundary";
import { findWithCondition, ICondition } from "../utils/getCondition";
import { IComment } from "../types/comment.type";
import { checkIdType } from "../utils/checkId";
import { Comments } from "../models/comments.model";

export const getAllComments = wrapRequestHandler(async (req, res) => {
  const { page, _limit }: ICondition = req.query;
  const comments = await findWithCondition(Comments, { page, _limit });
  if (comments?.data?.length) {
    return defaultSuccessHandler(
      res,
      comments.data,
      HTTP_STATUS.OK,
      "Get all comments successfully",
      comments.allData.length
    );
  } else {
    return defaultErrorHandler(
      {
        status: HTTP_STATUS.NOT_FOUND,
        message: "Not found any comment",
        name: HTTP_NAME.NOT_FOUND,
      },
      res
    );
  }
});
export const getCommentById = wrapRequestHandler(async (req, res) => {
  const commentId = req.params.commentId;
  const isValidId = checkIdType(commentId, res);
  if (isValidId) {
    const comment = await findWithCondition(Comments, { id: commentId });
    if (comment.data) {
      return defaultSuccessHandler(
        res,
        comment.data,
        HTTP_STATUS.OK,
        "Get comment by id successfully"
      );
    } else {
      return defaultErrorHandler(
        {
          status: HTTP_STATUS.NOT_FOUND,
          message: "Comment id is invalid",
          name: HTTP_NAME.NOT_FOUND,
        },
        res
      );
    }
  } else {
    return isValidId;
  }
});
export const createComment = wrapRequestHandler(async (req, res) => {
  const { owner, post, content }: IComment = req.body;
  const createdComment = await Comments.create({
    _id: new mongoose.Types.ObjectId(),
    owner,
    post,
    content,
  });
  return defaultSuccessHandler(
    res,
    createdComment,
    HTTP_STATUS.CREATED,
    "Created new comment successfully"
  );
});
export const updateCommentById = wrapRequestHandler(async (req, res) => {
  const commentId = req.params.commentId;
  const isValidId = checkIdType(commentId, res);
  if (isValidId) {
    const updatedComment = await Comments.findByIdAndUpdate(
      commentId,
      req.body
    );
    if (updatedComment) {
      const comment = await Comments.findById(commentId);
      return defaultSuccessHandler(
        res,
        comment,
        HTTP_STATUS.OK,
        "Updated comment successfully"
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
export const deleteCommentById = wrapRequestHandler(async (req, res) => {
  const commentId = req.params.commentId;
  const isValidId = checkIdType(commentId, res);
  if (isValidId) {
    const deletedComment = await Comments.findByIdAndDelete(commentId);
    if (deletedComment) {
      return defaultSuccessHandler(
        res,
        [],
        HTTP_STATUS.OK,
        "Delete comment successfully",
        0
      );
    } else {
      return defaultErrorHandler(
        {
          status: HTTP_STATUS.NOT_FOUND,
          message: "Not found any comment",
          name: HTTP_NAME.NOT_FOUND,
        },
        res
      );
    }
  } else {
    return isValidId;
  }
});
