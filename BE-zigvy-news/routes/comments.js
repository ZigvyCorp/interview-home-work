const router = require('express').Router();
const modelGenerator = require('../utils/model-generator');

let Comment = require('../models/comment');

// Get Comments
router.get('/:idPost/post', async (req, res) => {
  const { idPost } = req.params;
  try {
    const comments = await Comment.aggregate([
      { $match: { _idPost: idPost }},
      { $lookup: {
        from: 'users',
        localField: '_idOwner',
        foreignField: '_id',
        as: 'owner'
      }},
      { $lookup: {
        from: 'posts',
        localField: '_idPost',
        foreignField: '_id',
        as: 'post'
      }},
      { $unwind: '$owner' },
      { $unwind: '$post' }
    ]);

    res.json(comments);
  } catch(e) {
    res.json({ error: e.message });
  }
});

// Create Comment
router.put('/create', async (req, res) => {
  let { _idPost, _idOwner, content } = req.body;
  try {
    const comment = await modelGenerator.createComment(_idOwner, _idPost, content);
    res.json(comment);
  } catch(e) {
    res.json({ error: e.message });
  }
});

// Update Comment
router.post("/update", async (req, res) => {
  const { _id } = req.body;
  try {
    const comment = await Comment.findOne({ _id });

    if (comment) {
      for (let key in req.body) {
        if (key === "tags") {
          let tagsArray = req.body[key] ? req.body[key].toLowerCase().split(",") : [];
          comment[key] = tagsArray;
        } else {
          comment[key] = req.body[key];
        }
      }
      const result = await comment.save();
      res.json(result);
    } else {
      res.json({ error: "Comment not found."});
    }
  } catch (e) {
    res.json({ error: e.message });
  }
});

// Delete Comment
router.delete('/delete', async (req, res) => {
  const { id } = req.query;
  try {
    const comment = await Comment.findById({ _id: id });

    if (comment) {
      comment.isDelete = true;
      const result = await comment.save();
      res.json(result);
    } else {
      res.json({ error: "Comment not found."});
    }
  } catch (e) {
    res.json({ error: e.message });
  }
});

module.exports = router;
