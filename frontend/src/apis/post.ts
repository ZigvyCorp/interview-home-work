import { API_URL } from "../configs";
import { IGetListPost, IGetListPostResponse, IGetPost, IGetPostResponse } from "../types";
import { IResponseApi, request } from "../utils";

export const fetchPostsApi = (payload: IGetListPost): Promise<IResponseApi<IGetListPostResponse>> => {
  const url = `${API_URL}/post`;
  return request<never, IGetListPostResponse>(url, {
    method: 'get',
    params: payload,
  });
}

export const fetchPostDetailApi = (payload: IGetPost): Promise<IResponseApi<IGetPostResponse>> => {
  const url = `${API_URL}/post/${payload.id}`;
  return request<never, IGetPostResponse>(url, {
    method: 'get',
  });
}