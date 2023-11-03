import { FilterQuery, ProjectionType, QueryOptions, Schema } from 'mongoose';
import { IComment, ResponseListPayload } from '../interfaces';
import { CommentModel } from '../models';
import { getQueryPaging } from '../utils/getQueryPaging';
import { blogService, userService } from './';

type ICreatePayload = {
  user: Schema.Types.ObjectId;
  blog: Schema.Types.ObjectId;
  content: string;
  commentedAt: Date;
};

const createComment = async (payload: ICreatePayload): Promise<any> => {
  const user = userService.getUserById(payload.user);
  if (!user) throw new Error('User not found');
  const blog = blogService.getBlogById(payload.blog);
  if (!blog) throw new Error('Blog not found');

  const commentedAt = new Date();

  return CommentModel.create<ICreatePayload>({ ...payload, commentedAt });
};

const queryByBlogId = async (
  filter: FilterQuery<IComment> = {},
  projection?: ProjectionType<IComment> | null | undefined,
  options?: QueryOptions<IComment>
): Promise<ResponseListPayload<any>> => {
  const comments = await CommentModel.find(filter, projection, options);

  const total = await CommentModel.countDocuments(filter);

  return {
    list: comments,
    paging: getQueryPaging(total, options?.limit, options?.skip),
  };
};

const getCommentById = async (id: any) => {
  return await CommentModel.findById(id);
};

export const commentService = { createComment, queryByBlogId, getCommentById };
