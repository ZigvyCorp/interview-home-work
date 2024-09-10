import { API_END_POINTS } from "@/constants/api-endpoints.constant";

import { IPost, IUser } from "@/models";

import callApi from "@/utils/service.util";

export const getBlogs = async ({ pageParam }: { pageParam: number }) => {
  const response = await callApi<{
    data: (IPost & { user: IUser })[];
    nextPage: number | null;
    currentPage: number;
    postCount: number;
  }>(`${API_END_POINTS.posts}?page=${pageParam}`);

  return response.result;
};
