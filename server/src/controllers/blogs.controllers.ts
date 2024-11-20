import { Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';

import { BLOGS_MESSAGES } from '~/constants/messages';
import {
  BlogIdReqParams,
  CreateBlogReqBody,
  DeleteBlogsReqBody,
  GetBlogsQuery,
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

// Lấy danh sách blog
export const getBlogsController = async (req: Request<ParamsDictionary, any, any, GetBlogsQuery>, res: Response) => {
  const { blogs, ...pagination } = await blogsServices.getBlogs(req.query);
  return res.json({
    messasge: BLOGS_MESSAGES.GET_BLOGS_SUCCESSFUL,
    data: {
      blogs,
      pagination
    }
  });
};

// Lấy blog theo ID
export const getBlogController = async (req: Request<BlogIdReqParams>, res: Response) => {
  const { blog_id } = req.params;
  const { blog } = await blogsServices.getBlogById(blog_id);
  return res.json({
    messasge: BLOGS_MESSAGES.GET_BLOG_DETAIL_SUCCESSFUL,
    data: {
      blog
    }
  });
};

// Lấy danh sách blog theo user ID
export const getBlogsByUserIdController = async (
  req: Request<ParamsDictionary, any, any, GetBlogsQuery>,
  res: Response
) => {
  const { user_id } = req.decoded_authorization as TokenPayload;
  const { blogs, ...pagination } = await blogsServices.getBlogsByUserId({ user_id, query: req.query });
  return res.json({
    messasge: BLOGS_MESSAGES.GET_BLOGS_SUCCESSFUL,
    data: {
      blogs,
      pagination
    }
  });
};
