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

    addComment: (data) => {
        let newComment = new Comment(data);
        return newComment.save((err) => {
            if (err) {
                throw err;
            }
        });
    },
};
