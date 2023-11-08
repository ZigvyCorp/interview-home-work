import { Router } from 'express';

import { createBlogController, deleteBlogsController, updateBlogController } from '~/controllers/blogs.controllers';
import {
  blogAuthorValidator,
  blogIdValidator,
  createBlogValidator,
  deleteBlogsValidator,
  updateBlogValidator
} from '~/middlewares/blogs.middlewares';
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

export default blogsRouter;
