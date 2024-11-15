import { Response, Request } from "express";
import { createPost, deletePost, getPostByIdOrSlug, getPosts, updatePost } from "@/repositories/post-repo";
import { AuthenticatedRequest } from "@/types";
import User, { IUser } from "@/models/user";


export const getPostsRequest = async (req: Request, res: Response) => {
  const posts = await getPosts();
  res.status(200).json(posts);
};

export const getPostByIdOrSlugRequest = async (req: Request, res: Response) => {
  const postIdOrSlug = req.params.idOrSlug;
  const post = await getPostByIdOrSlug(postIdOrSlug);
  if (post === null) {
    res.status(400).json("Post not found");
    return;
  }
  res.status(200).json(post);
};

export const createPostRequest = async (req: AuthenticatedRequest, res: Response) => {
  const { title, content, tags } = req.body;
  const user = req.user as IUser;
  const post = await createPost({
    title,
    content,
    tags: tags || [],
    owner: user._id
  });
  res.status(201).json(post);
};
export const updatePostRequest = async (req: AuthenticatedRequest, res: Response) => {
  const id = req.params.id;
  const { title, content, tags } = req.body;
  const user = req.user as IUser;
  const post = await updatePost(id, {
    title,
    content,
    tags: tags || []
  });
  res.status(200).json(post);
};
export const deletePostRequest = async (req: AuthenticatedRequest, res: Response) => {
  const id = req.params.id;
  await deletePost(id);
  res.status(204).json({ message: "Post deleted" });
};
