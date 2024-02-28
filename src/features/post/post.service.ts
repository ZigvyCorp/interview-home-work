import { IPost } from "@/common/@types/types";
import HttpService from "@/common/services/http.service";

class Post extends HttpService {
  constructor() {
    super({
      baseURL: "https://jsonplaceholder.typicode.com",
    });
  }

  getPosts() {
    return this.get<IPost[]>(`/posts`);
  }

  getPostById(id: string) {
    return this.get<IPost>(`/posts/${id}`);
  }

  getPostPagination(page: number, limit: number) {
    return this.get<IPost[]>(`/posts?_page=${page}&_limit=${limit}`);
  }
}

const blogApi = new Post();

export default blogApi;
