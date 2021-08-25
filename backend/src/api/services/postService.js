import { Post } from '../models';

export default {
    getPosts: async () => {
        return await Post.find({}, (err) => {
            if (err) throw err;
        })
            .select([
                '-_id',
                '-updatedAt',
                '-__v'
            ]);
    },

    addPost: (data) => {
        let newPost = new Post(data);
        return newPost.save((err) => {
            if (err) throw err;
        });
    },

    getPost: async (postId) => {
        return await Post.findById(postId, (err) => {
            if (err) throw err;
        })
            .select([
                '-_id',
                '-updatedAt',
                '-__v'
            ]);
    },

    updatePost: async (postId, data) => {
        return await Post.findByIdAndUpdate(postId, data, (err) => {
            if (err) throw err;
        });
    },

    deletePost: async () => { },
    getCommentsByPost: async () => { },
    addCommentToPost: async () => { },
};
