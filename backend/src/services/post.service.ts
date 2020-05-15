import { injectable } from "inversify";
import { Post } from "../DAO/post";
import { FilterRequest } from "../models/requests/filter-request";

@injectable()
export class PostService {
  async getPost(filter: FilterRequest = new FilterRequest()) {
    let findCondition;
    if (filter.key) {
      findCondition = {
        $or: [
          {
            name: { $regex: ".*" + filter.key + ".*" },
          },
          {
            tags: { $regex: ".*" + filter.key + ".*" },
          },
        ],
      };
    }
    const posts = await Post.find(findCondition || {})
      .skip(filter.page * filter.pageSize)
      .limit(filter.pageSize)
      .populate("author", "-password -username");
    const count = await Post.count(findCondition || {});
    return [posts.map((p) => p.toObject()), count];
  }

  async createPost(data: any, author: any) {
    const post = new Post({
      ...data,
      author: author._id,
    });
    await post.save();
    return post.toObject();
  }
}
