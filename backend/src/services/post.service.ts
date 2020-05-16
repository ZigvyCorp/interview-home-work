import { injectable } from "inversify";
import { Post } from "../DAO/post";
import { FilterRequest } from "../models/requests/filter-request";

@injectable()
export class PostService {
  async updatePost(id: string, data: any = {}, author: any) {
    const post = await Post.findById(id);
    if (!post) throw new Error("Post not found");
    if (post.toObject().author.toString() !== author._id.toString())
      throw new Error("Forbidden");
    const updated = await Post.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
    return updated?.toObject();
  }

  async getPostDetails(id: string) {
    const post = await Post.findById(id);
    return post;
  }

  async getPosts(filter: FilterRequest = new FilterRequest()) {
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
