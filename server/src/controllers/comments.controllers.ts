import { Request, Response } from 'express';

import { COMMENTS_MESSAGES } from '~/constants/messages';
import { BlogIdReqParams } from '~/models/requests/Blog.requests';
import { CommentIdReqParams, CreateCommentReqBody, UpdateCommentReqBody } from '~/models/requests/Comment.request';
import { PaginationReqQuery } from '~/models/requests/Common.requests';
import { TokenPayload } from '~/models/requests/User.requests';
import commentsService from '~/services/comments.services';

// Thêm bình luận
export const createCommentController = async (
  req: Request<BlogIdReqParams, any, CreateCommentReqBody>,
  res: Response
) => {
  const { user_id } = req.decoded_authorization as TokenPayload;
  const { blog_id } = req.params;
  const { content } = req.body;
  const { comment } = await commentsService.createComment({ user_id, blog_id, content });
  return res.json({
    message: COMMENTS_MESSAGES.CREATE_COMMENT_SUCCESSFUL,
    data: {
      comment
    }
  });
};

// Cập nhật bình luận
export const updateCommentController = async (
  req: Request<CommentIdReqParams, any, UpdateCommentReqBody>,
  res: Response
) => {
  const { comment_id } = req.params;
  const { content } = req.body;
  const { comment } = await commentsService.updateComment({ comment_id, content });
  return res.json({
    message: COMMENTS_MESSAGES.UPDATE_COMMENT_SUCCESSFUL,
    data: {
      comment
    }
  });
};

// Xóa bình luận
export const deleteCommentController = async (req: Request<CommentIdReqParams>, res: Response) => {
  const { comment_id } = req.params;
  await commentsService.deleteComment(comment_id);
  return res.json({
    message: COMMENTS_MESSAGES.DELETE_COMMENT_SUCCESSFUL
  });
};

// Lấy danh sách bình luận theo blog
export const getCommentsByBlogIdController = async (
  req: Request<BlogIdReqParams, any, any, PaginationReqQuery>,
  res: Response
) => {
  const { blog_id } = req.params;
  const { comments, ...pagination } = await commentsService.getCommentsByBlogId({ blog_id, query: req.query });
  return res.json({
    message: COMMENTS_MESSAGES.GET_COMMENTS_SUCCESSFUL,
    data: {
      comments,
      pagination
    }
  });
};
