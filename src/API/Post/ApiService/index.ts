import { Posts } from "../Interface";
import Endpoint from "../Endpoint";
import { getService } from "../../BaseApi";

export const fetchPostsService = async () => {
  try {
    const apiService = await getService();
    const result: Posts.FetchPostsResponse = await apiService.get(
      Endpoint.fetchPosts
    );
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchPostsDetailService = async (idPost: string) => {
  try {
    const apiService = await getService();
    const result: Posts.Post = await apiService.get(`posts/${idPost}`);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
