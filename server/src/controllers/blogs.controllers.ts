import { Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';

import { BLOGS_MESSAGES } from '~/constants/messages';
import {
  BlogIdReqParams,
  CreateBlogReqBody,
  DeleteBlogsReqBody,
  UpdateBlogReqBody
} from '~/models/requests/Blog.requests';
import { TokenPayload } from '~/models/requests/User.requests';
import blogsServices from '~/services/blogs.services';

// Tạo blog
export const createBlogController = async (req: Request<ParamsDictionary, any, CreateBlogReqBody>, res: Response) => {
  const { user_id } = req.decoded_authorization as TokenPayload;
  const { blog } = await blogsServices.createBlog({
    body: req.body,
    user_id
  });
  return res.json({
    messasge: BLOGS_MESSAGES.CREATE_BLOG_SUCCESSFUL,
    data: {
      blog
    }
  });
};

// Cập nhật blog
export const updateBlogController = async (req: Request<BlogIdReqParams, any, UpdateBlogReqBody>, res: Response) => {
  const { blog_id } = req.params;
  const { blog } = await blogsServices.updateBlog({
    blog_id,
    body: req.body
  });
  return res.json({
    messasge: BLOGS_MESSAGES.UPDATE_BLOG_SUCCESSFUL,
    data: {
      blog
    }
  });
};

// Xoá blog (một hoặc nhiều)
export const deleteBlogsController = async (req: Request<ParamsDictionary, any, DeleteBlogsReqBody>, res: Response) => {
  const { blog_ids } = req.body;
  const { deletedCount } = await blogsServices.deleteBlogs(blog_ids);
  return res.json({
    messasge: `Đã xoá ${deletedCount} blog`
  });
};
