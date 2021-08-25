import { Comment, User, Post } from '../models';
import httpStatus from 'http-status-codes';
import HTTPError from '../helpers/class/httpErrors';

export default {
    getComments: async (postId) => {
        let query = null;
        if (postId != undefined) {
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
        let post = await Post.findById(data.post);
        if (post === null) {
            throw new HTTPError(httpStatus.NOT_FOUND, {
                title: 'Not Found',
                detail: 'Post does not exist'
            });
        }

        // Check if user exists
        let user = await User.findById(data.owner);
        if (user === null) {
            throw new HTTPError(httpStatus.NOT_FOUND, {
                title: 'Not Found',
                detail: 'User does not exist'
            });
        }

        let newComment = new Comment(data);
        return await newComment.save();
    },
};
