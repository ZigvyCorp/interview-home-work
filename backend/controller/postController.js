import Post from "../models/postModel.js";
import Comment from "../models/commentModel.js";

const findAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving posts', error: error.message });
    }
};
const getPostById = async (req, res) => {
    const postId = req.params.id;
    try {
        const post = await Post.findOne({ id: postId });
        if (post) {
            res.json(post);
        } else {
            res.status(404).json({ message: 'Post not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: err });
    }
};
const deletePostById = async (req, res) => {
    const postId = req.params.id;
    
    try {
        const deletedPost = await Post.findOneAndDelete({ id: postId }); 
        if (deletedPost) {
            res.json({ message: 'Post deleted successfully', post: deletedPost }); 
        } else {
            res.status(404).json({ message: 'Post not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
};

const updatePostById = async (req, res) => {
    const postId = req.params.id;
    const updatedData = req.body;

    try {
        const updatedPost = await Post.findOneAndUpdate({ id: postId }, updatedData, { new: true, runValidators: true });
        if (updatedPost) {
            res.json({ message: 'Post updated successfully', post: updatedPost });
        } else {
            res.status(404).json({ message: 'Post not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }

};



const getCommentByPosst = async (req, res) => {
    const postId = req.params.id;
    try {
        const comments = await Comment.find({ postId: postId });
        if (comments.length > 0) {
            res.json(comments);
        } else {
            res.status(404).json({ message: 'No comments found for this post' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
};

export {
    findAllPosts,
    getPostById,
    getCommentByPosst,
    deletePostById,
    updatePostById
};