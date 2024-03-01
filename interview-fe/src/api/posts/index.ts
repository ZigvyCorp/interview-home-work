import { Post, PostDetail } from "@/types/post";
import { apiDelete, apiGet, apiPatch, apiPost } from "@/utils/api-request";

export class PostsApi {
  static async postPost(request: FormData): Promise<string> {
    return await apiPost("/post", request);
  }

  static async getPosts(request: FormData): Promise<Post[]> {
    const response = await apiGet("/posts", request);
    return response.data;
  }
}
