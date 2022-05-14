const express = require('express')
const router = express.Router()

const Post = require('../schemas/Post');
const Comment = require('../schemas/Comment');

const { authenticateToken } = require('../tools/jwt')

/** 
 * @swagger 
 * /posts: 
 *   get: 
 *     summary: List of posts
 *     tags: [Post]
 *     description: Get all Posts 
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 3
 *         required: true
 *       - in: query
 *         name: offset
 *         schema:
 *           type: integer
 *           default: 0
 *         required: true
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         required: false
 *     responses:  
 *       200: 
 *         description: Success  
 *   
 */
router.get('/posts', async (req, res) => {
  const { limit, offset, search } = req.query;
  const result = {
    limit,
    offset,
    search,
    data: await Post.find({ title: new RegExp(search, "i") }).limit(limit).skip(offset).exec(),
    length: 10
  };

  // Join Comments
  for (let i = 0; i < result.data.length; ++i) {
    result.data[i] = { ...result.data[i]._doc, comments: await Comment.find({post: result.data[i]._id}).exec() };
  };
  
  res.send(result);
})

/** 
 * @swagger 
 * /posts/{id}: 
 *   get: 
 *     summary: Get post by id
 *     tags: [Post]
 *     description: Get post by id
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true    
 *         description: ID of the post
 *     responses:  
 *       200: 
 *         description: Success  
 *   
 */
router.get('/posts/:id', async (req, res) => {
  res.send(await Post.findById(req.params.id));
})


/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Create Post
 *     tags: [Post]
 *     security:
 *      - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *     responses:
 *       200:
 *         description: The user logins successfully
 *       500:
 *         description: Some server error
 */

router.post("/posts", authenticateToken, async (req, res) => {
  try {
    const post = new Post(req.body);

    // Set Owener
    post.owener = req.user._id

    // set Create At
    post.create_at = (new Date()).getTime();

    await post.save();
    res.send(post);
  } catch (error) {
    res.status(500).send({
      message: error.message
    });
  }
});


/**
 * @swagger
 * /posts:
 *   put:
 *     summary: Update Post
 *     tags: [Post]
 *     security:
 *      - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              type: object
 *              properties:
 *               _id:       
 *                 type: string
 *               title:       
 *                 type: string
 *               content:    
 *                 type: string
 *               tags:    
 *                 type: string
 *                 default: []
 *              required:
 *               - title
 *               - content
 *               - tags
 *     responses:
 *       200:
 *         description: The user logins successfully
 *       500:
 *         description: Some server error
 */
router.put("/posts", authenticateToken, async (req, res) => {
  try {
    const post = await Post.findById(req.body._id);

    if (post === null) {
      throw Error("The post is not exits");
    }

    if (post.owener !== req.user._id) {
      throw Error("Unauthorized");
    }

    post.overwrite({ ...req.body, owener: post.owener });
    await post.save();
    res.send(post);
  } catch (error) {
    res.status(500).send({
      message: error.message
    });
  }
});


/**
 * @swagger
 * /posts/{id}:
 *   delete:
 *     summary: Delete Post
 *     tags: [Post]
 *     security:
 *      - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true    
 *         description: ID of the post
 *     responses:
 *       200:
 *         description: The user logins successfully
 *       500:
 *         description: Some server error
 */
router.delete("/posts/:id", authenticateToken, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post === null) {
      throw Error("The post is not exits");
    }

    if (post.owener !== req.user._id) {
      throw Error("Unauthorized");
    }

    res.send(await Post.deleteOne({ _id: post._id }));
  } catch (error) {
    res.status(500).send({
      message: error.message
    });
  }
});

module.exports = router