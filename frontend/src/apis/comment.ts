import { API_URL } from "../configs";
import { IGetListComment, IGetListCommentResponse } from "../types";
import { IResponseApi, request } from "../utils";

export const fetchCommentsApi = (payload: IGetListComment): Promise<IResponseApi<IGetListCommentResponse>> => {
  const url = `${API_URL}/comment`;
  return request<never, IGetListCommentResponse>(url, {
    method: 'get',
    params: payload,
  });
}