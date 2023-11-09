import { API_URL } from "../configs";
import { IGetListPost, IGetListPostResponse } from "../types";
import { IResponseApi, request } from "../utils";

export const fetchPostsApi = (payload: IGetListPost): Promise<IResponseApi<IGetListPostResponse>> => {
  const url = `${API_URL}/post`;
  return request<never, IGetListPostResponse>(url, {
    method: 'get',
    params: payload,
  });
}