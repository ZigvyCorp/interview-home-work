import Post from '../models/post.model.js';

// Get all Posts
export const getAllPosts = async (req, res, next) => {
    try {
        const data = await Post.find();
        res.status(200).json(data);
    } catch (error) {
        next(error)
    }
};

// Get a single Post by ID
export const getPostById = async (req, res, next) => {
    try {
        const item = await Post.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json(item);
    } catch (error) {
        next(error)
    }
};

// Create a new Post
export const createPost = async (req, res, next) => {
    try {
        const newItem = new Post(req.body);
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        next(error);
    }
};

// Update a Post by ID (PUT)
export const updatePostById = async (req, res, next) => {
    try {
        const updatedItem = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json(updatedItem);
    } catch (error) {
        next(error)
    }
};

// Partially update a Post by ID (PATCH)
export const patchPostById = async (req, res, next) => {
    try {
        const updatedItem = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json(updatedItem);
    } catch (error) {
        next(error)
    }
};

// Delete a Post by ID
export const deletePostById = async (req, res, next) => {
    try {
        const deletedItem = await Post.findByIdAndDelete(req.params.id);
        if (!deletedItem) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        next(error)
    }
};
