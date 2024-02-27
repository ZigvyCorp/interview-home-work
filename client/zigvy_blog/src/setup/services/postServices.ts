
import axios from "../useIntercepter";

export class PostServices {
  getAllServices = async (page: number) => {
    return await axios.get(`/posts?page=${page}`);
  };

  getPostById = async (postId: string) => {
    return await axios.get(`/posts/${postId}`);
  };
  searchPost = async (postTitle: string) => { 
    return await axios.get(`/posts/search?title=${postTitle}`);
  }
}

export const postServices = new PostServices();
