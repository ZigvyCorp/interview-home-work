const express = require('express')
const router = express.Router()

const Comment = require('../schemas/Comment');
const Post = require('../schemas/Post');

const { authenticateToken } = require('../tools/jwt');


/** 
 * @swagger 
 * /comments: 
 *   get: 
 *     summary: List comments of a post
 *     tags: [Comment]
 *     description: Get all comments 
 *     parameters:
 *       - in: query
 *         name: postId
 *         schema:
 *           type: string
 *         required: true
 *     responses:  
 *       200: 
 *         description: Success  
 *   
 */
router.get('/comments', async (req, res) => {
  const { postId } = req.query;
  res.send(await Comment.find({ post: postId }).exec());
})


/**
 * @swagger
 * /comments:
 *   post:
 *     summary: Create Comment
 *     tags: [Comment]
 *     security:
 *      - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Comment'
 *     responses:
 *       200:
 *         description: The user logins successfully
 *       500:
 *         description: Some server error
 */

router.post("/comments", authenticateToken, async (req, res) => {
  try {
    const comment = new Comment(req.body);

    // Check Post exits
    const checkPostExits = await Post.findById(req.body.post).exec();
    if (checkPostExits === null) {
      throw Error("Post is not exist");
    }

    // Set Owener
    comment.owener = req.user._id

    // set Create At
    comment.create_at = (new Date()).getTime();

    await comment.save();
    res.send(comment);
  } catch (error) {
    res.status(500).send({
      message: error.message
    });
  }
});


/**
 * @swagger
 * /comments:
 *   put:
 *     summary: Update Comment
 *     tags: [Comment]
 *     security:
 *      - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              type: object
 *              properties:
 *               id:       
 *                 type: string
 *               content:    
 *                 type: string
 *              required:
 *               - id
 *               - content
 *     responses:
 *       200:
 *         description: The user logins successfully
 *       500:
 *         description: Some server error
 */

router.put("/comments", authenticateToken, async (req, res) => {
  try {
    console.log(req.body);
    const comment = await Comment.findById(req.body.id);

    if (comment === null) {
      throw Error("The comment is not exits");
    }

    if (comment.owener !== req.user._id) {
      throw Error("The comment is not yours");
    }

    comment.overwrite({
      post: comment.post,
      owener: comment.owener,
      content: req.body.content,
      create_at: comment.create_at
    });
    await comment.save();
    res.send(comment);
  } catch (error) {
    res.status(500).send({
      message: error.message
    });
  }
});


/**
 * @swagger
 * /comments/{id}:
 *   delete:
 *     summary: Delete Comment
 *     tags: [Comment]
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

router.delete("/comments/:id", authenticateToken, async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (comment === null) {
      throw Error("The comment is not exits");
    }
    
    if (comment.owener !== req.user._id) {
      throw Error("The comment is not yours");
    }

    res.send(await Comment.deleteOne({ _id: comment._id }));
  } catch (error) {
    res.status(500).send({
      message: error.message
    });
  }
});


module.exports = router