import { Post } from '../models';

export default {
    getPosts: async () => {
        return await Post.find({}, (err) => {
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

    addPost: (data) => {
        let newPost = new Post(data);
        return newPost.save((err) => {
            if (err) {
                throw err;
            }
        });
    },

    getPost: async () => { },
    updatePost: async () => { },
    deletePost: async () => { },
    getCommentsByPost: async () => { },
    addCommentToPost: async () => { },
};
