import { injectable } from "inversify";
import { Post } from "../DAO/post";
import { FilterRequest } from "../models/requests/filter-request";

@injectable()
export class PostService {
  private async _authorize(id: string, author: any) {
    const post = await Post.findById(id);
    if (!post) throw new Error("Post not found");
    if (post.toObject().author.toString() !== author._id.toString())
      throw new Error("Forbidden");
  }

  async deletePost(id: string, author: any) {
    this._authorize(id, author);
    await Post.findByIdAndDelete(id);
  }

  async updatePost(id: string, data: any = {}, author: any) {
    this._authorize(id, author);
    const updated = await Post.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
    return updated?.toObject();
  }

  async getPostDetails(id: string, withAuthor: boolean = false) {
    let post;
    if (withAuthor) {
      post = await Post.findById(id).populate("author", "-username -password");
    } else {
      post = await Post.findById(id);
    }
    return post;
  }

  async getPosts(filter: FilterRequest = new FilterRequest()) {
    let findCondition;
    if (filter.key) {
      findCondition = {
        $or: [
          {
            title: { $regex: ".*" + filter.key + ".*", $options: "i" },
          },
          {
            tags: { $regex: ".*" + filter.key + ".*", $options: "i" },
          },
        ],
      };
    }
    const posts = await Post.find(findCondition || {})
      .skip(filter.page * filter.pageSize)
      .limit(filter.pageSize)
      .populate("author", "-password -username")
      .sort({
        updatedAt: "desc",
        createdAt: "desc",
      });
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
