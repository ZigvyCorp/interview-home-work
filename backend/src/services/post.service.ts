import { injectable } from "inversify";
import { Post } from "../DAO/post";

@injectable()
export class PostService {
  async createPost(data: any, author: any) {
    const post = new Post({
      ...data,
      author: author._id,
    });
    await post.save();
    return post.toObject();
  }
}
