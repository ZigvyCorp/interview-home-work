import { API_END_POINTS } from "@/constants/api-endpoints.constant";

import { IBlog } from "@/models";

import callApi from "@/utils/service.util";

export const getBlogs = async ({
  pageParam,
  search,
}: {
  pageParam: number;
  search: string;
}) => {
  const response = await callApi<{
    data: IBlog[];
    nextPage: number | null;
    currentPage: number;
    postCount: number;
  }>(`${API_END_POINTS.posts}?search=${search}&page=${pageParam}`);

  return response.result;
};
