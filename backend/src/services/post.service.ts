import { injectable } from "inversify";
import { Post } from "../models/post";
import { FilterRequest } from "../models/requests/filter-request";

@injectable()
export class PostService {
  private async _authorize(id: string, currentUser: any) {
    const post = await Post.findById(id);
    if (!post) throw new Error("Post not found");
    if (post.toObject().author.toString() !== currentUser._id.toString())
      throw new Error("Forbidden");
  }

  async unlikePost(id: string, user: any) {
    const post = await Post.findById(id).populate(
      "author",
      "-username -password"
    );
    if (!post) throw new Error("Post not found");
    if (
      !post.toObject().likes &&
      !!!post
        .toObject()
        .likes.find((like: any) => like.toString() === user._id.toString())
    )
      return post;
    const updated = await Post.findByIdAndUpdate(
      id,
      {
        $pull: {
          likes: user._id,
        },
      },
      {
        new: true,
      }
    ).populate("author", "-username -password");
    return updated?.toObject();
  }

  async likePost(id: string, user: any) {
    const post = await Post.findById(id).populate(
      "author",
      "-username -password"
    );
    if (!post) throw new Error("Post not found");
    if (
      post.toObject().likes &&
      !!post
        .toObject()
        .likes.find((like: any) => like.toString() === user._id.toString())
    )
      return post;
    const updated = await Post.findByIdAndUpdate(
      id,
      {
        $push: {
          likes: user._id,
        },
      },
      {
        new: true,
      }
    ).populate("author", "-username -password");
    return updated?.toObject();
  }

  async deletePost(id: string, currentUser: any) {
    await this._authorize(id, currentUser);
    await Post.findByIdAndDelete(id);
  }

  async updatePost(id: string, data: any = {}, currentUser: any) {
    await this._authorize(id, currentUser);
    delete data["comments"];
    delete data["likes"];
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
      .sort({
        updatedAt: "desc",
        createdAt: "desc",
      })
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
      likes: [],
      comments: [],
    });
    await post.save();
    return post.toObject();
  }
}
