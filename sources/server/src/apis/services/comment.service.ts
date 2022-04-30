import httpStatus from 'http-status-codes';
import { Schema } from 'mongoose';
import { CustomError } from '../../utils/custom-error';
import { Post, User } from '../models';
import { Comment } from '../models/comment.model';
import { IComment } from '../types/comment.type';

const createComment = async (commentBody: IComment): Promise<IComment> => {
    // Todo check user
    const foundUser = await User.findById(commentBody.owner);
    if (!foundUser) {
        throw new CustomError(httpStatus.NOT_FOUND, 'mongoose', 'User not found');
    }

    // Todo check post
    const foundPost = await Post.findById(commentBody.post);
    if (!foundPost) {
        throw new CustomError(httpStatus.NOT_FOUND, 'mongoose', 'Post not found');
    }

    const comment = await Comment.create(commentBody);

    foundPost.comments.push(comment.id);
    foundPost.save();

    return comment;
};

const updateComment = async (commentID: string, commentBody: IComment): Promise<IComment> => {
    const foundComment = await Comment.findById(commentID);
    if (!foundComment) throw new CustomError(httpStatus.NOT_FOUND, 'mongoose', 'Comment not found');

    return Comment.findByIdAndUpdate(commentID, commentBody, { new: true });
};

const deleteComment = async (commentID: string): Promise<IComment> => {
    // Todo check post
    const foundComment = await Comment.findById(commentID);
    if (!foundComment) throw new CustomError(httpStatus.NOT_FOUND, 'mongoose', 'Comment not found');

    // Todo remove comment in the post
    const post = await Post.findById(foundComment.post);
    post.comments = (<Array<string>>post.comments).filter((comment) => comment.toString() !== foundComment.id);
    post.save();

    return Comment.findByIdAndDelete(commentID);
};

export { createComment, deleteComment, updateComment };
