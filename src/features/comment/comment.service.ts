import { IComment } from "@/common/@types/types";
import HttpService from "@/common/services/http.service";

class Comment extends HttpService {
  constructor() {
    super({
      baseURL: "https://jsonplaceholder.typicode.com",
    });
  }

  getCommentsByPostId(postId: string) {
    return this.get<IComment[]>(`comments?postId=${postId}`);
  }
}

const commentApi = new Comment();

export default commentApi;
