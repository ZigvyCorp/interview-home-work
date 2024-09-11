import { API_END_POINTS } from "@/constants/api-endpoints.constant";

import { IBlog } from "@/models";

import callApi from "@/utils/service.util";

export const getBlog = async ({ id }: { id: string }) => {
  const response = await callApi<{
    data: IBlog;
  }>(`${API_END_POINTS.posts}/${id}`);

  console.log("-see");
  console.log(response);

  return response.result;
};
