import * as commentService from '../services/commentService.js';

export const getAllComment = async (req, res) => {
  try {
    const comments = await commentService.getAllComment();
    return res.json(comments);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const getComment = async (req, res) => {
  try {
    const comment = await commentService.getComment(req.params.id);
    if (!comment) {
      return res.status(404).send({ error: 'Comment not found' });
    }
    return res.json(comment);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const createComment = async (req, res) => {
  try {
    const comment = await commentService.createComment(req.body);
    return res.json(comment);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const updateComment = async (req, res) => {
  try {
    const comment = await commentService.updateComment(req.params.id, req.body);
    if (!comment) {
      return res.status(404).send({ error: 'Comment not found' });
    }
    return res.json(comment);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const deleteComment = async (req, res) => {
  try {
    const comment = await commentService.deleteComment(req.params.id);
    if (!comment) {
      return res.status(404).send({ error: 'Comment not found' });
    }
    res.json({ message: 'Comment is deleted' });
  } catch (error) {
    return res.status(500).send(error);
  }
};
