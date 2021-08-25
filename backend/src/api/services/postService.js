import { Post, User } from '../models';
import httpStatus from 'http-status-codes';
import HTTPError from '../helpers/classes/httpErrors';
import mongoose from 'mongoose';
import { VALIDATION_ERROR } from '../helpers/constants/Errors';

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
            throw new HTTPError(httpStatus.NOT_FOUND, {
                title: 'Not Found',
                detail: 'User does not exists'
            });
        }
        let user = await User.findById(data.owner);
        if (user === null) {
            throw new HTTPError(httpStatus.NOT_FOUND, {
                title: 'Not Found',
                detail: 'User does not exist'
            });
        }
        try {
            let newPost = new Post(data);
            return newPost.save();
        } catch (error) {
            if (error.name === VALIDATION_ERROR) {
                throw new HTTPError(httpStatus.UNPROCESSABLE_ENTITY, {
                    title: 'Unable to process',
                    detail: 'Validating body failed'
                });
            }
        }
    },

    getPost: async (postId) => {
        if (!mongoose.isValidObjectId(postId)) {
            throw new HTTPError(httpStatus.NOT_FOUND, {
                title: 'Not Found',
                detail: 'Post does not exists'
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
            throw new HTTPError(httpStatus.NOT_FOUND, {
                title: 'Unprocessable Entity',
                detail: 'Post does not exists'
            });
        }
        try {
            let post = await Post.findByIdAndUpdate(postId, data, { new: true });
            if (post === null) {
                throw new HTTPError(httpStatus.NOT_FOUND, {
                    title: 'Not Found',
                    detail: 'Post does not exists'
                });
            }
            return post;
        } catch (error) {
            if (error.name === VALIDATION_ERROR) {
                throw new HTTPError(httpStatus.UNPROCESSABLE_ENTITY, {
                    title: 'Unable to process',
                    detail: 'Validating body failed'
                });
            }
        }
    },

    deletePost: async (postId) => {
        if (!mongoose.isValidObjectId(postId)) {
            throw new HTTPError(httpStatus.NOT_FOUND, {
                title: 'Unprocessable Entity',
                detail: 'Post does not exists'
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
