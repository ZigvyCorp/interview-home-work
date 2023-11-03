import { FilterQuery, ProjectionType, QueryOptions, Schema } from 'mongoose';
import { IBlog, ResponseListPayload } from '../interfaces';
import { BlogModel } from '../models';
import { getQueryPaging } from '../utils/getQueryPaging';
import { userService } from './user.service';

type ICreatePayload = {
  user: Schema.Types.ObjectId;
  title: string;
  content: string;
  postedAt: Date;
};

const createBlog = async (payload: ICreatePayload): Promise<any> => {
  const user = userService.getUserById(payload.user);
  if (!user) throw new Error('User not found');

  const postedAt = new Date();

  return BlogModel.create<ICreatePayload>({ ...payload, postedAt });
};

const queryBlogs = async (
  filter: FilterQuery<IBlog> = {},
  projection?: ProjectionType<IBlog> | null | undefined,
  options?: QueryOptions<IBlog>
): Promise<ResponseListPayload<any>> => {
  const blogs = await BlogModel.find(filter, projection, options);

  const total = await BlogModel.countDocuments(filter);

  return {
    list: blogs,
    paging: getQueryPaging(total, options?.limit, options?.skip),
  };
};

/**
 * Get blog by id
 * @param {ObjectId} id
 * @returns {Promise<Blog>}
 */
const getBlogById = async (id: any) => {
  return await BlogModel.findById(id).populate([
    { path: 'author' },
    { path: 'comments' },
    { path: 'comments', populate: { path: 'user' } },
  ]);
};

export const blogService = { createBlog, queryBlogs, getBlogById };
