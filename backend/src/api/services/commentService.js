import { Comment, User, Post } from '../models';
import httpStatus from 'http-status-codes';
import HTTPError from '../helpers/classes/httpErrors';
import mongoose from 'mongoose';
import { VALIDATION_ERROR } from '../helpers/constants/Errors';

export default {
    getComments: async (postId) => {
        let query = null;
        if (postId != undefined) {
            if (!mongoose.isValidObjectId(postId)) {
                throw new HTTPError(httpStatus.NOT_FOUND, {
                    title: 'Not Found',
                    detail: 'Post does not exists'
                });
            }
            query = { post: postId };
        }
        return await Comment.find(query, (err) => {
            if (err) throw err;
        })
            .select([
                '-updatedAt',
                '-__v'
            ]);
    },

    addComment: async (data) => {
        // Check if post exists
        if (!mongoose.isValidObjectId(data.post)) {
            throw new HTTPError(httpStatus.NOT_FOUND, {
                title: 'Not Found',
                detail: 'User does not exists'
            });
        }
        let post = await Post.findById(data.post);
        if (post === null) {
            throw new HTTPError(httpStatus.NOT_FOUND, {
                title: 'Not Found',
                detail: 'Post does not exist'
            });
        }

        // Check if user exists
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
            let newComment = new Comment(data);
            return await newComment.save();
        } catch (error) {
            if (error.name === VALIDATION_ERROR) {
                throw new HTTPError(httpStatus.UNPROCESSABLE_ENTITY, {
                    title: 'Unable to process',
                    detail: 'Validating body failed'
                });
            }
        }
    },
};
