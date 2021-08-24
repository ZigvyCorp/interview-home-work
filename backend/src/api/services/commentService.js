import { Comment } from '../models';

export default {
    getComments: async (postId) => {
        return await Comment.find({
            post: postId
        }, (err) => {
            if (err) {
                throw err;
            }
        })
            .select([
                '-_id',
                '-updatedAt',
                '-__v'
            ]);
    },

    addComment: async (data) => {
        let newComment = new Comment(data);
        return await newComment.save();
    },
};
