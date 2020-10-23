import { Comment } from "@/models/comment";
import { FilterRequest } from "@/models/requests/filter-request";
import { injectable } from "inversify";
import { axiosInstance } from "./axios";

@injectable()
export class CommentService {
  private _axios: any = axiosInstance;

  deleteComment(id: string) {
    return this._axios.delete(`/comments/${id}`);
  }

  updateComment(id: string, content: string) {
    return this._axios.patch(`/comments/${id}`, {
      content,
    });
  }

  getComments(postId: string, filter: FilterRequest) {
    return this._axios.get("/comments", {
      postId,
      ...filter,
    });
  }

  comment(postId: string, data: Partial<Comment>) {
    return this._axios.post("/comments", {
      data,
      postId,
    });
  }
}
