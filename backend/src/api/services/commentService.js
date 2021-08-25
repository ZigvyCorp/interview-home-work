import { Comment, User, Post } from '../models';

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
            throw new Error('Error'); // TODO: Error handling
        }

        // Check if user exists
        let user = await User.findById(data.owner);
        if (user === null) {
            throw new Error('Error'); // TODO: Error handling
        }

        let newComment = new Comment(data);
        return await newComment.save();
    },
};
