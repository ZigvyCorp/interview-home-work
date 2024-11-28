import Comment from "../models/comment.model.js";

// Get all Comments
export const getAllComments = async (req, res, next) => {
  try {
    const { limit, skip } = req.query;
    const data = await Comment.find(
      {},
      {},
      {
        limit: limit && limit < 100 ? limit : 100,
        skip: skip ? skip : 0,
        lean: true,
      }
    );
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

// Get a single Comment by ID
export const getCommentById = async (req, res, next) => {
  try {
    const item = await Comment.findOne({ id: req.params.id }).lean();
    if (!item) {
      return res.status(404).json({ message: "Comment not found" });
    }
    res.status(200).json(item);
  } catch (error) {
    next(error);
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
    const updatedItem = await Comment.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true }
    );
    if (!updatedItem) {
      return res.status(404).json({ message: "Comment not found" });
    }
    res.status(200).json(updatedItem);
  } catch (error) {
    next(error);
  }
};

// Partially update a Comment by ID (PATCH)
export const patchCommentById = async (req, res, next) => {
  try {
    const updatedItem = await Comment.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true }
    );
    if (!updatedItem) {
      return res.status(404).json({ message: "Comment not found" });
    }
    res.status(200).json(updatedItem);
  } catch (error) {
    next(error);
  }
};

// Delete a Comment by ID
export const deleteCommentById = async (req, res, next) => {
  try {
    const deletedItem = await Comment.findOneAndDelete({ id: req.params.id });
    if (!deletedItem) {
      return res.status(404).json({ message: "Comment not found" });
    }
    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    next(error);
  }
};
