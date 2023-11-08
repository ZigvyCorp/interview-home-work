import UserTest from '../Models/ModelTest.js';
import Post from '../Models/post.js';

const getListPosts = async (req, res) => {
    const post = await Post.find({});
    res.json(post);
};
const getPost = async (req, res) => {
    const users = await UserTest.find({});
    res.json(users);
};
const getAllPost = async (req, res) => {
    const users = await UserTest.find({});
    res.json(users);
};
const postController = {
    getListPosts,
    getPost,
    getAllPost,
};
export default postController;
