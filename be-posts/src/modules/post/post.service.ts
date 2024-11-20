import mongoose from 'mongoose';
import Comment from '../comment/comment.model';
import { IOptions, QueryResult } from '../paginate/paginate';
import { IPostDoc, NewCreatePost } from './post.interfaces';
import Post from './post.model';

export const createPost = async (postBody: NewCreatePost): Promise<IPostDoc> => {
  return Post.create(postBody);
};

export const queryPosts = async (filter: Record<string, any>, options: IOptions): Promise<QueryResult | any> => {
  const _filter = FilterBuild(filter);
  const signalPost = await Post.paginate(_filter, options);

  const idArray: Array<mongoose.Types.ObjectId> = signalPost.results.map((item) => item.id);

  const signalComment = await Comment.aggregate([
    {
      $match: {
        postId: {
          $in: idArray,
        },
      },
    },
    { $group: { _id: '$postId', count: { $sum: 1 } } },
  ]);

  const results = signalPost.results.map((post) => {
    const commentCount =
      signalComment.find((postGroup) => {
        return postGroup._id === post.id;
      })?.count || 0;

    const postClone = JSON.parse(JSON.stringify(post));
    return {
      ...postClone,
      comments: {
        count: commentCount,
      },
    };
  });

  const result = { ...signalPost, results };
  return result;
};

export const getPostById = async (id: mongoose.Types.ObjectId): Promise<IPostDoc | any | null> => {
  const signalPost = await Post.findById(id);

  const idArray = [id.toString()];
  const signalComment = await Comment.aggregate([
    {
      $match: {
        postId: {
          $in: idArray,
        },
      },
    },
    { $group: { _id: '$postId', count: { $sum: 1 } } },
  ]);

  const postClone = JSON.parse(JSON.stringify(signalPost));

  const result = {
    ...postClone,
    comments: {
      count: signalComment?.[0]?.count || 0,
    },
  };
  return result;
};

const FilterBuild = (filter: Record<string, any>) => {
  return Object.entries(filter).reduce((total: any, [key, value]: any) => {
    if (value === '') return {};

    const obj = { [key]: { $regex: filter[key], $options: 'i' } };
    return { ...total, ...obj };
  }, {});
};
