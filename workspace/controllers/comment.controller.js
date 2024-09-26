import Comment from '../models/comment.model.js';

// Get all Comments
export const getAllComments = async (req, res, next) => {
    try {
        const data = await Comment.find();
        res.status(200).json(data);
    } catch (error) {
        next(error)
    }
};

// Get a single Comment by ID
export const getCommentById = async (req, res, next) => {
    try {
        const item = await Comment.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        res.status(200).json(item);
    } catch (error) {
        next(error)
    }
};

// Create a new Comment
export const createComment = async (req, res, next) => {
    try {
        const newItem = new Comment(req.body);
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        next(error);
    }
};

// Update a Comment by ID (PUT)
export const updateCommentById = async (req, res, next) => {
    try {
        const updatedItem = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        res.status(200).json(updatedItem);
    } catch (error) {
        next(error)
    }
};

// Partially update a Comment by ID (PATCH)
export const patchCommentById = async (req, res, next) => {
    try {
        const updatedItem = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        res.status(200).json(updatedItem);
    } catch (error) {
        next(error)
    }
};

// Delete a Comment by ID
export const deleteCommentById = async (req, res, next) => {
    try {
        const deletedItem = await Comment.findByIdAndDelete(req.params.id);
        if (!deletedItem) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        res.status(200).json({ message: 'Comment deleted successfully' });
    } catch (error) {
        next(error)
    }
};
