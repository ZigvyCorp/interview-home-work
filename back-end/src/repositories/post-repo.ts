import { CreatePostDto } from "@/models/dtos/create-post-dto";
import Post, { IPopulatedPost, IPost } from "@/models/post";
import { slugify } from "@/utils";
import { toPostDto } from "@/utils/to-post-dto";
import { Types } from "mongoose";
import populatePost from "@/utils/populate-post";

export const getPosts = async ({ page, limit }: { page: number; limit: number }) => {
  const skip = (page - 1) * limit;
  const posts = await populatePost(Post.find({})
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)
  ).lean<IPopulatedPost[]>();
  return posts.map(toPostDto);
};
export const countPosts = async () => {
  const count = await Post.countDocuments();
  return count;
}
export const getPostByIdOrSlug = async (idOrSlug: string) => {
  let post;
  if (Types.ObjectId.isValid(idOrSlug)) {
    post = await populatePost(Post.findById(idOrSlug))
      .lean<IPopulatedPost>();
  } else {
    post = await populatePost(Post.findOne({ slug: idOrSlug })).lean<IPopulatedPost>();
  }
  if (!post) return null;
  return toPostDto(post);
};

export const createPost = async (createData: CreatePostDto) => {
  const post = await Post.create({ ...createData, slug: slugify(createData.title) });
  return getPostByIdOrSlug(post._id.toString());
};

export const updatePost = async (id: string, updateData: any) => {
  const post = await populatePost(Post.findByIdAndUpdate(id, {
    ...updateData,
    slug: slugify(updateData.title)
  }, {
    new: true, // return new data
    runValidators: true
  })).lean<IPopulatedPost>();
  if (!post) return null;
  return toPostDto(post);
};

export const deletePost = async (id: string) => {
  return Post.findByIdAndDelete(id);
};