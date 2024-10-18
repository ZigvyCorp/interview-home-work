import Post, { IPost } from "../models/postModel";

interface GetAllPostsParams {
    limit: number;
    skip: number;
    query: string;
  }

export class PostService {
  static async getAllPosts({ limit, skip, query }: GetAllPostsParams) {
    const filter = query ? { title: { $regex: query, $options: 'i' } } : {};
    const totalPosts = await Post.countDocuments(filter)
    const posts = await Post.find(filter).skip(skip).limit(limit);
    return {posts, totalPosts}
  }

  static async getPostById(id: string) {
    return await Post.findById(id);
  }

  static async createPost(postData: IPost) {
    const post = new Post(postData);
    return await post.save();
  }

  static async updatePost(id: string, postData: Partial<IPost>) {
    return await Post.findByIdAndUpdate(id, postData, { new: true });
  }

  static async deletePost(id: string) {
    return await Post.findByIdAndDelete(id);
  }
}
