import { UserModel } from '../models';
import { FilterQuery, ProjectionType, QueryOptions } from 'mongoose';
import { IUser, ResponseListPayload } from '../interfaces';
import { getQueryPaging } from '../utils/getQueryPaging';

const queryUsers = async (
  filter: FilterQuery<IUser> = {},
  projection?: ProjectionType<IUser> | null | undefined,
  options?: QueryOptions<IUser>
): Promise<ResponseListPayload<any>> => {
  const blogs = await UserModel.find(filter, projection, options);

  const total = await UserModel.countDocuments(filter);

  return {
    list: blogs,
    paging: getQueryPaging(total, options?.limit, options?.skip),
  };
};

const getUserById = async (id: any) => {
  return await UserModel.findById(id);
};

export const userService = { queryUsers, getUserById };
