import { Comment } from '../../models/comment.js';

export const getComment = async (req, res) => {
  try {
    const allComments = await Comment.find()
      .populate('owner', 'name username created_at')
      .populate('post', '_id');

    if (!allComments.length > 0)
      return res.json({ message: 'There is no comment!!' });
    return res.json(allComments);
  } catch (error) {
    console.error(error);
    res.status(400).send('Bad Request');
  }
};

export const createComment = () => {};
export const updateComment = () => {};
export const deleteComment = () => {};
