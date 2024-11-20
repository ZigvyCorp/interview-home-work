import { AxiosResponse } from "axios";
import { EXTERNAL_BASE_URL } from "src/constants/common";
import { IPaginationList } from "src/interfaces/common";
import { IPost, IPostWithRelations } from "src/interfaces/post";
import api from "src/api";

export async function paginatePost(
  titleSearch: string,
  start: number,
  limit: number
): Promise<IPaginationList<IPostWithRelations>> {
  try {
    const queryParams = `title_like=${titleSearch}&_start=${start}&_limit=${limit}&_expand=user&_embed=comments`;
    const response: AxiosResponse = await api.get(`/posts?${queryParams}`);
    const paginatedPostList: IPostWithRelations[] = response.data;
    const totalCount: number = Number(response.headers["x-total-count"]);

    return {
      list: paginatedPostList,
      totalCount: totalCount || 0,
    };
  } catch (error) {
    throw error;
  }
}

export async function getPostDetail(
  id: number
): Promise<IPostWithRelations | null> {
  try {
    const url = `/posts/${id}?_expand=user&_embed=comments`;
    const response: AxiosResponse = await api.get(url);

    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function createPost(post: Omit<IPost, "id">): Promise<IPost> {
  try {
    const response: AxiosResponse = await api.post("/posts", post);

    return response.data;
  } catch (error) {
    throw error;
  }
}
