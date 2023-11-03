import { DEFAULT_PAGING, DEFAULT_TEXT_SEARCH } from '../constants';
import { RequestPaging } from '../interfaces';
import { blogService } from '../services';
import { catchAsync } from '../utils/catchAsync';
import { errorResponse, successResponse } from '../utils/response';

const createBlog = catchAsync(async (req, res) => {
  try {
    const blogs = await blogService.createBlog(req.body);

    successResponse({ res, data: blogs });
  } catch (error: any) {
    errorResponse({ res, message: error });
  }
});

const queryBlogs = catchAsync(async (req, res) => {
  try {
    const { textSearch, paging } = req.body as RequestPaging;

    const searchPattern = {
      title: { $regex: new RegExp(textSearch || DEFAULT_TEXT_SEARCH, 'i') },
    };

    const pagingPattern = paging
      ? {
          limit: paging.limit || 10,
          skip: paging.skip || 0,
        }
      : DEFAULT_PAGING.paging;

    const blogs = await blogService.queryBlogs(searchPattern, null, {
      ...pagingPattern,
      populate: [
        { path: 'author' },
        { path: 'comments' },
        { path: 'comments', populate: { path: 'user' } },
      ],
    });

    successResponse({ res, data: blogs });
  } catch (error: any) {
    errorResponse({ res, message: error });
  }
});

const getById = catchAsync(async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await blogService.getBlogById(id);

    successResponse({ res, data: blog });
  } catch (error) {
    errorResponse({ res });
  }
});

export const blogController = { createBlog, queryBlogs, getById };
