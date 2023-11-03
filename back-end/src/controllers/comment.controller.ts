import { DEFAULT_PAGING } from '../constants';
import { RequestPaging } from '../interfaces';
import { commentService } from '../services';
import { catchAsync } from '../utils/catchAsync';
import { errorResponse, successResponse } from '../utils/response';

const createComment = catchAsync(async (req, res) => {
  try {
    const comments = await commentService.createComment(req.body);

    successResponse({ res, data: comments });
  } catch (error: any) {
    errorResponse({ res, message: error });
  }
});

const queryCommentByBlog = catchAsync(async (req, res) => {
  try {
    const { blogId } = req.params;
    const { paging } = req.body as RequestPaging;

    const searchPattern = {
      blog: blogId,
    };

    const pagingPattern = paging
      ? {
          limit: paging.limit || 10,
          skip: paging.skip || 0,
        }
      : DEFAULT_PAGING.paging;

    const comments = await commentService.queryByBlogId(searchPattern, null, {
      ...pagingPattern,
      populate: ['user'],
    });

    successResponse({ res, data: comments });
  } catch (error: any) {
    errorResponse({ res, message: error });
  }
});

const getById = catchAsync(async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await commentService.getCommentById(id);

    successResponse({ res, data: comment });
  } catch (error) {
    errorResponse({ res });
  }
});

export const commentController = { queryCommentByBlog, getById, createComment };
