import Post from '../models/postModel.js';

class PostController {
    // Get all posts 
    static async getPosts(req, res) {
        try {
            const posts = await Post.getAllPosts();
            if (!posts.length) {
                return res.status(404).json({ message: 'No posts found' });
            }

            return res.json(posts);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Server error' });
        }
    }

    // Get post by ID 
    static async getPost(req, res) {
        try {
            const post = await Post.getPostById(req.params.id);
            if (!post) {
                return res.status(404).json({ message: 'Post not found' });
            }

            return res.json(post);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Server error' });
        }
    }

    // Create a new post 
    static async createPost(req, res) {
        try {
            const newPost = await Post.createPost(req.body);
            return res.status(201).json(newPost);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Server error' });
        }
    }

    // Update an existing post 
    static async updatePost(req, res) {
        try {
            const updatedPost = await Post.updatePost(req.params.id, req.body);
            if (!updatedPost) {
                return res.status(404).json({ message: 'Post not found' });
            }

            return res.json(updatedPost);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Server error' });
        }
    }

    // Delete a post 
    static async deletePost(req, res) {
        try {
            const deletedPost = await Post.deletePost(req.params.id);
            if (!deletedPost) {
                return res.status(404).json({ message: 'Post not found' });
            }

            return res.json(deletedPost);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Server error' });
        }
    }
}

export default PostController;