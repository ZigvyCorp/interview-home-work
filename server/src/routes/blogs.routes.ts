import { Router } from 'express';

import {
  createBlogController,
  deleteBlogsController,
  getBlogController,
  getBlogsByUserIdController,
  getBlogsController,
  updateBlogController
} from '~/controllers/blogs.controllers';
import {
  blogAuthorValidator,
  blogIdValidator,
  createBlogValidator,
  deleteBlogsValidator,
  getBlogsValidator,
  updateBlogValidator
} from '~/middlewares/blogs.middlewares';
import { paginationValidator } from '~/middlewares/common.middlewares';
import { accessTokenValidator } from '~/middlewares/users.middlewares';
import { CreateBlogReqBody, UpdateBlogReqBody } from '~/models/requests/Blog.requests';
import { filterReqBodyMiddleware, wrapRequestHandler } from '~/utils/handlers';

const blogsRouter = Router();

// Tạo blog
blogsRouter.post(
  '/',
  accessTokenValidator,
  createBlogValidator,
  filterReqBodyMiddleware<CreateBlogReqBody>(['title', 'content', 'audience']),
  wrapRequestHandler(createBlogController)
);

// Cập nhật blog
blogsRouter.patch(
  '/:blog_id',
  accessTokenValidator,
  blogIdValidator,
  blogAuthorValidator,
  updateBlogValidator,
  filterReqBodyMiddleware<UpdateBlogReqBody>(['title', 'content', 'audience']),
  wrapRequestHandler(updateBlogController)
);

// Xoá blog (một hoặc nhiều)
blogsRouter.delete('/', accessTokenValidator, deleteBlogsValidator, wrapRequestHandler(deleteBlogsController));

// Lấy danh sách blog
blogsRouter.get('/', paginationValidator, getBlogsValidator, wrapRequestHandler(getBlogsController));

// Lấy danh sách blog theo user ID
blogsRouter.get(
  '/logged-in-user',
  accessTokenValidator,
  paginationValidator,
  getBlogsValidator,
  wrapRequestHandler(getBlogsByUserIdController)
);

// Lấy blog theo ID
blogsRouter.get('/:blog_id', blogIdValidator, wrapRequestHandler(getBlogController));

export default blogsRouter;
