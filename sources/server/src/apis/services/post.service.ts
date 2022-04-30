import httpStatus from 'http-status-codes';
import { IPost } from '../types';
import { Post, User } from '../models';
import { CustomError } from '../../utils/custom-error';
import { commentService } from '.';
import { IComment } from '../types/comment.type';

const getPosts = async (): Promise<Array<IPost>> => Post.find({}).populate('owner');

const getCommentsByPost = async (postID: string): Promise<Array<IComment>> => {
    const foundPost = await Post.findById(postID).populate({
        path: 'comments',
        populate: ['owner', 'post'],
    });
    if (!foundPost) {
        throw new CustomError(httpStatus.BAD_REQUEST, 'mongoose', 'Post not found');
    }
    return <Array<IComment>>foundPost.comments;
};

const createPost = async (postBody: IPost): Promise<IPost> => {
    const user = await User.findById(postBody.owner);
    if (!user) {
        throw new CustomError(httpStatus.NOT_FOUND, 'mongoose', 'User not found');
    }
    const post = await Post.create(postBody);

    // push new post to user
    user.posts.unshift(post.id);
    user.save();

    return post;
};

const updatePost = async (postID: string, postBody: IPost): Promise<IPost> => {
    // Todo check post
    const foundPost = await Post.findById(postID);
    if (!foundPost) throw new CustomError(httpStatus.NOT_FOUND, 'mongoose', 'Post not found');

    return Post.findByIdAndUpdate(postID, postBody, {
        new: true,
    });
};

const deletePost = async (postID: string): Promise<IPost> => {
    // Todo check post
    const foundPost = await Post.findById(postID);
    if (!foundPost) throw new CustomError(httpStatus.NOT_FOUND, 'mongoose', 'Post not found');

    // Todo delete comments belong posts
    foundPost.comments.forEach((comment) => {
        commentService.deleteComment(comment);
    });

    // Todo delete post in user
    const user = await User.findById(foundPost.owner);
    user.posts = (<Array<string>>user.posts).filter((post) => post.toString() !== foundPost.id);
    user.save();

    return Post.findByIdAndDelete(postID);
};

export { getPosts, createPost, updatePost, deletePost, getCommentsByPost };
