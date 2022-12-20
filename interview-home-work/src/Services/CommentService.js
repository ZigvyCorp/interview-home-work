import { baseService } from "./baseService";

class CommentServices extends baseService {
  getComment = () => this.get('comments')
}

export const commentServices = new CommentServices()