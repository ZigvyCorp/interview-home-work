import { Post, User } from '../models';

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
        // Check if user exists
        let user = await User.findById(data.owner);
        if (user === null) {
            throw new Error('Error'); // TODO: Error handling
        }

        let newPost = new Post(data);
        return newPost.save();
    },

    getPost: async (postId) => {
        return await Post.findById(postId, (err) => {
            if (err) throw err;
        })
            .select([
                '-updatedAt',
                '-__v'
            ]);
    },

    updatePost: async (postId, data) => {
        let post = await Post.findByIdAndUpdate(postId, data, { new: true });
        if (post === null) {
            throw new Error('Error'); // TODO: Error handling
        }
        return post;
    },

    deletePost: async (postId) => {
        let post = await Post.findByIdAndDelete(postId);
        if (post === null) {
            throw new Error('Error'); // TODO: Error handling
        }
        return post;
    },

    getCommentsByPost: async () => { },
    addCommentToPost: async () => { },
};
