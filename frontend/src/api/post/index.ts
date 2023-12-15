import { IPaginationList } from "interfaces/common";
import { IPost, IPostWithRelations } from "interfaces/post";
import { AxiosResponse } from "axios";
import api from "src/api";
import { POST_BASE_URL } from "./constants";
import { IPostPaginationQuery } from "src/store/types/post";

export async function paginatePost(
  query: IPostPaginationQuery
): Promise<IPaginationList<IPostWithRelations>> {
  try {
    const { titleSearch, start, limit } = query;
    const url: string = `${POST_BASE_URL}?titleSearch=${titleSearch}&start=${start}&limit=${limit}`;
    const response: AxiosResponse<IPaginationList<IPostWithRelations>> =
      await api.get(url);

    return response.data;
  } catch (error) {
    throw new Error(JSON.stringify(error));
  }
}

export async function getPostDetail(
  id: number
): Promise<IPostWithRelations | null> {
  try {
    const url = `${POST_BASE_URL}/${id}`;
    const response: AxiosResponse<IPostWithRelations> = await api.get(url);

    return response.data;
  } catch (error) {
    throw new Error(JSON.stringify(error));
  }
}

export async function createPost(post: Omit<IPost, "id">): Promise<IPost> {
  try {
    const response: AxiosResponse<IPost> = await api.post(POST_BASE_URL, post);

    return response.data;
  } catch (error) {
    throw new Error(JSON.stringify(error));
  }
}
