import mongoose from 'mongoose';
import { IOptions, QueryResult } from '../paginate/paginate';
import { ICommentDoc, NewCreateComment } from './comment.interfaces';
import Comment from './comment.model';

export const createComment = async (commentBody: NewCreateComment): Promise<ICommentDoc> => {
  return Comment.create(commentBody);
};

export const queryComments = async (filter: Record<string, any>, options: IOptions): Promise<QueryResult> => {
  const comments = await Comment.paginate(filter, options);
  return comments;
};

// export const getCommentByPostIds = async (ids: Array<mongoose.Types.ObjectId>): Promise<ICommentDoc | null> => {
// const comments = await Comment.find({postId: {$in: ids}})
// return comments;
export const getCommentByPostIds = async (id: mongoose.Types.ObjectId): Promise<ICommentDoc | null> => {
  return Comment.findById(id);
};
