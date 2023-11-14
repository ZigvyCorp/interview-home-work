import { Post } from '../../models/post.js';
import '../../models/user.js';
import '../../models/comment.js';
export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('owner', 'name dob created_at');

    if (!posts.length > 0) return res.json({ message: 'There is no post!!' });
    return res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(400).send('Bad Request');
  }
};

export const createPost = () => {};
export const updatePost = () => {};
export const deletePost = () => {};
