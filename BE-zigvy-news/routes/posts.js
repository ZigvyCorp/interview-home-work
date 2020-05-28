const router = require('express').Router();
const modelGenerator = require('../utils/model-generator');
const mongoose = require('mongoose');
const constant = require('../utils/constant');

let Post = require('../models/post');

// Get Posts
router.post('/', async (req, res) => {
  const { search, limit, offset, tag} = req.body;
  // console.log(search, limit, offset);
  try {
    const pipelines = [];
    if (search && search.length !== 0) {
      pipelines.push(
        { $match: { $text: { $search: search }, isDelete: false }},
        { $sort: { score: { $meta: "textScore" }}});
    } else {
      pipelines.push(
        { $match: { isDelete: false }},
        { $sort: { createdAt: -1 }});
    }

    Post.aggregate([
      ...pipelines,
      { $lookup: {
        from: 'comments',
        localField: '_id',
        foreignField: '_idPost',
        as: 'comments'
      }},
      { $lookup: {
        from: 'users',
        localField: '_idOwner',
        foreignField: '_id',
        as: 'owner'
      }},
      { $unwind: '$owner' },
      { $limit: limit && offset ? parseInt(limit) + parseInt(offset) : 5},
      { $skip: offset ? parseInt(offset) : 0 }
    ]).exec((err, result) => {
      if (err) {
        console.log(err);
        res.json({ error: err.message });
      }
      res.json(result);
    })
  } catch(e) {
    console.log(e);
    res.json({ error: e.message });
  }
});

router.post('/count', async (req, res) => {
  const { search, tag} = req.body;
  try {
    const pipelines = [];
    if (search && search.length !== 0) {
      pipelines.push(
        { $match: { $text: { $search: search }, isDelete: false }},
        { $sort: { score: { $meta: "textScore" }}});
    } else {
      pipelines.push({ $match: { isDelete: false }})
    }

    Post.aggregate([
      ...pipelines,
      { $lookup: {
        from: 'comments',
        localField: '_id',
        foreignField: '_idPost',
        as: 'comments'
      }},
      { $lookup: {
        from: 'users',
        localField: '_idOwner',
        foreignField: '_id',
        as: 'owner'
      }},
      { $unwind: '$owner' }
    ]).exec((err, result) => {
      if (err) {
        console.log(err);
        res.json({ error: err. message });
      }
      res.json(result.length);
    })
  } catch(e) {
    console.log(e);
    res.json({ error: e.message });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    Post.aggregate([
      { $match: { _id: mongoose.Types.ObjectId(id) }},
      { $lookup: {
        from: 'comments',
        localField: '_id',
        foreignField: '_idPost',
        as: 'comments'
      }},
      { $lookup: {
        from: 'users',
        localField: '_idOwner',
        foreignField: '_id',
        as: 'owner'
      }},
      { $unwind: '$owner' }
    ]).exec((err, result) => {
      if (err) {
        console.log(err);
        res.json({ error: err.message });
      }
      res.json(result[0]);
    })
  } catch(e) {
    console.log(e);
    res.json({ error: e.message });
  }
});

// Create Post
router.put('/create', async (req, res) => {
  let { _idOwner, title, content, images, tags } = req.body;
  const image = images ? images : `${req.protocol}://${req.get("host")}/images/no-avatar.png`;

  try {
    const post = await modelGenerator.createPost(_idOwner, title, content, image, tags);
    res.json(post);
  } catch(e) {
    res.json({ error: e.message });
  }
});

// Update Post
router.post("/update", async (req, res) => {
  const { _id } = req.body;
  try {
    const post = await Post.findOne({ _id });

    if (post) {
      for (let key in req.body) {
        post[key] = req.body[key];
      }
      const result = await post.save();
      res.json(result);
    } else {
      res.json({ error: "Post not found."});
    }
  } catch (e) {
    res.json({ error: e.message });
  }
});

// Delete Post
router.delete('/delete', async (req, res) => {
  const { id } = req.query;
  console.log(id);
  try {
    const post = await Post.findById({ _id: id });

    if (post) {
      post.isDelete = true;
      const result = await post.save();
      res.json(result);
    } else {
      res.json({ error: "Post not found."});
    }
  } catch (e) {
    res.json({ error: e.message });
  }
});

module.exports = router;
