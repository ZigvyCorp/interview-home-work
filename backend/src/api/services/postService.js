import { Post, User } from '../models';
import httpStatus from 'http-status-codes';
import HTTPError from '../helpers/classes/httpErrors';
import mongoose from 'mongoose';

export default {
    getPosts: async () => {
        return await Post.find({}, (err) => {
            if (err) throw err;
        })
            .select([
                '-updatedAt',
                '-__v'
            ]);
    },

    addPost: async (data) => {
        if (!mongoose.isValidObjectId(data.owner)) {
            throw new HTTPError(httpStatus.UNPROCESSABLE_ENTITY, {
                title: 'Unprocessable entity',
                detail: 'Invalid user id'
            });
        }
        let user = await User.findById(data.owner);
        if (user === null) {
            throw new HTTPError(httpStatus.NOT_FOUND, {
                title: 'Not Found',
                detail: 'User does not exist'
            });
        }

        let newPost = new Post(data);
        return newPost.save();
    },

    getPost: async (postId) => {
        if (!mongoose.isValidObjectId(postId)) {
            throw new HTTPError(httpStatus.UNPROCESSABLE_ENTITY, {
                title: 'Unprocessable entity',
                detail: 'Invalid post id'
            });
        }
        let post = await Post.findById(postId, (err) => {
            if (err) throw err;
        })
            .select([
                '-updatedAt',
                '-__v'
            ]);

        if (post === null) {
            throw new HTTPError(httpStatus.NOT_FOUND, {
                title: 'Not Found',
                detail: 'Post does not exists'
            });
        }
        return post;
    },

    updatePost: async (postId, data) => {
        if (!mongoose.isValidObjectId(postId)) {
            throw new HTTPError(httpStatus.UNPROCESSABLE_ENTITY, {
                title: 'Unprocessable entity',
                detail: 'Invalid post id'
            });
        }
        let post = await Post.findByIdAndUpdate(postId, data, { new: true });
        if (post === null) {
            throw new HTTPError(httpStatus.NOT_FOUND, {
                title: 'Not Found',
                detail: 'Post does not exists'
            });
        }
        return post;
    },

    deletePost: async (postId) => {
        if (!mongoose.isValidObjectId(postId)) {
            throw new HTTPError(httpStatus.UNPROCESSABLE_ENTITY, {
                title: 'Unprocessable entity',
                detail: 'Invalid post id'
            });
        }
        let post = await Post.findByIdAndDelete(postId);
        if (post === null) {
            throw new HTTPError(httpStatus.NOT_FOUND, {
                title: 'Not Found',
                detail: 'Post does not exists'
            });
        }
    },
};
