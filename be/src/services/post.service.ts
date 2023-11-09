import { CreatePostDto } from "../dto/create-post-dto";
import { PaginationParams } from "../dto/pagination.dto";
import { UpdatePostDto } from "../dto/update-post.dto";
import { BadRequest } from "../helpers/error";
import { PostModel } from "../models/post.model";
import { UserDocument } from "../models/user.model";
import { CommentService } from "./comment.service";

export class PostService {
  async getAllPost({ perPage, page }: PaginationParams, key: string) {
    const skip = perPage * page - perPage;
    const condition =
      key !== "undefined" ? { title: { $regex: new RegExp(key, "i") } } : {};

    const posts: Array<any> = await PostModel.find(condition, { __v: 0 })
      .skip(skip || 0)
      .limit(perPage || 10);
    const count = await PostModel.countDocuments();

    const result: Array<Partial<UserDocument>> = [];
    for (let i = 0; i < posts.length; i++) {
      const comments = await CommentService.getAllCommentByPost(posts[i]._id);
      result.push({ ...posts[i].toObject(), comments });
    }

    return { total: count, data: result };
  }

  async getPostDetailById(id: string) {
    const post = await PostModel.findOne({ _id: +id }, { __v: 0 });
    if (!post) {
      throw new BadRequest("Post not found");
    }
    const comments = await CommentService.getAllCommentByPost(id);
    return { ...post.toObject(), comments };
  }

  async getAllCommentOfPost(postId: string) {
    return CommentService.getAllCommentByPost(postId);
  }

  async createPost(payload: CreatePostDto) {
    const id = await PostModel.count({});

    return await PostModel.create({
      ...payload,
      _id: id + 1,
    });
  }

  async updatePost(payload: UpdatePostDto) {
    const post = await PostModel.findOne({ _id: payload.id });
    if (!post) {
      throw new BadRequest("Post not found");
    }

    post.title = payload.title;
    post.content = payload.content;
    post.tags = payload.tag;
    await post.save();

    return true;
  }

  async removePostById(id: string) {
    const post = await PostModel.findOne({ _id: +id });
    if (!post) {
      throw new BadRequest("Post not found");
    }
    await PostModel.deleteOne({ _id: +id });
    return true;
  }
}
