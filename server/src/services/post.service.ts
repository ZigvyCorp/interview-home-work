import { UserModel } from "../models/user.model";
import { IPostsModel, PostModel } from "../models/post.model";
import { NotFoundError } from "../errors/NotFoundError";
import { DatabaseError } from "../errors/DatabaseError";
import { CommentModel } from "../models/comment.model";

async function getAll(query?: any) {
  let posts;
  if (query && query.populate == "owner") {
    posts = await PostModel.find()
      .populate({
        path: "owner",
        model: UserModel,
        foreignField: "id",
        select: "-_id",
      })
      .select("-_id -updateAt");
  } else if (query && query.populate == "comments") {
    posts = await PostModel.find()
      .populate({
        path: "comments",
        model: CommentModel,
      })
      .select("-_id -updateAt");
  } else {
    posts = await PostModel.find().select(
      "-_id id owner title content created_at tags"
    );
  }

  return posts;
}

async function getById(id: string, query?: any) {
  let post;
  if (query && query == "comments") {
    post = await PostModel.findOne(
      { id },
      { _id: false, updatedAt: false }
    ).populate({ path: query, model: CommentModel, justOne: false });
  } else {
    post = await PostModel.findOne(
      { id },
      { _id: false, updatedAt: false, comments: false }
    );
  }

  if (!post) throw new NotFoundError(`id: ${id} is not exist`);
  return post;
}

async function create(post: IPostsModel) {
  const check = await UserModel.findOne({ id: post.owner });
  if (!check) throw new NotFoundError(`owner: ${post.owner} is not exist`);
  const total = await PostModel.countDocuments();
  post.id = total + 1;
  const newPost = await new PostModel(post).save();
  if (!newPost) throw new DatabaseError();
  await UserModel.findOneAndUpdate(
    { id: newPost.owner },
    {
      $push: {
        posts: {
          _id: newPost._id,
        },
      },
    }
  );
  return newPost;
}

async function findAndUpdate(id: string, post: IPostsModel) {
  const newPost: IPostsModel = {
    id: parseInt(id),
    owner: post.owner,
    title: post.title,
    content: post.content,
    tags: post.tags,
    comments: post.comments,
  };
  const updatePost = await PostModel.findOneAndUpdate({ id }, newPost);
  if (newPost.owner && newPost.owner != updatePost.owner) {
    await UserModel.findOneAndUpdate(
      { id: updatePost.owner },
      {
        $pull: {
          posts: updatePost._id,
        },
      }
    );
    await UserModel.findOneAndUpdate(
      { id: newPost.owner },
      {
        $addToSet: {
          posts: {
            _id: updatePost._id,
          },
        },
      }
    );
  }
  return updatePost;
}

async function findAndUpdatePatch(id: string, post: IPostsModel) {
  const oldPost = await PostModel.findOne({ id });
  if (!oldPost) throw new NotFoundError(`id: ${id} is not exist`);
  let newValues = { oldPost, ...post };
  const newPost = await PostModel.findOneAndUpdate({ id }, newValues, {
    new: true,
  });
  return newPost;
}
async function deletePostById(id: string) {
  const post = await PostModel.findOne({ id });
  if (!post) throw new NotFoundError(`id: ${id} is not exist`);
  await UserModel.findOneAndUpdate(
    { id: post.owner },
    {
      $pull: {
        posts: post._id,
      },
    }
  );
  const deletePost = await PostModel.deleteOne({ id });
  return deletePost;
}

export {
  getAll,
  getById,
  create,
  findAndUpdate,
  findAndUpdatePatch,
  deletePostById,
};
