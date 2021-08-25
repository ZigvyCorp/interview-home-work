import { Post, User } from '../models';
import httpStatus from 'http-status-codes';
import HTTPError from '../helpers/class/httpErrors';

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
        let post = await Post.findByIdAndDelete(postId);
        if (post === null) {
            throw new HTTPError(httpStatus.NOT_FOUND, {
                title: 'Not Found',
                detail: 'Post does not exists'
            });
        }
    },
};
