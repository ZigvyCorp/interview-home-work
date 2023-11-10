import { Router } from 'express';

import {
  createCommentController,
  deleteCommentController,
  getCommentsByBlogIdController,
  updateCommentController
} from '~/controllers/comments.controllers';
import { blogIdValidator } from '~/middlewares/blogs.middlewares';
import {
  commentAuthorValidator,
  commentIdValidator,
  createCommentValidator,
  updateCommentValidator
} from '~/middlewares/comments.middlewares';
import { accessTokenValidator } from '~/middlewares/users.middlewares';
import { wrapRequestHandler } from '~/utils/handlers';

const commentsRouter = Router();

// Tạo bình luận
commentsRouter.post(
  '/blog/:blog_id',
  accessTokenValidator,
  blogIdValidator,
  createCommentValidator,
  wrapRequestHandler(createCommentController)
);

// Cập nhật bình luận
commentsRouter.put(
  '/:comment_id',
  accessTokenValidator,
  commentIdValidator,
  commentAuthorValidator,
  updateCommentValidator,
  wrapRequestHandler(updateCommentController)
);

// Cập nhật bình luận
commentsRouter.delete(
  '/:comment_id',
  accessTokenValidator,
  commentIdValidator,
  commentAuthorValidator,
  wrapRequestHandler(deleteCommentController)
);

// Lấy danh sách bình luận theo blog
commentsRouter.get('/blog/:blog_id', blogIdValidator, wrapRequestHandler(getCommentsByBlogIdController));

export default commentsRouter;
