const express = require('express')

const router = express.Router()
const postController = require('../controllers/postController')
const checkAuthen = require('../../library/middlewareAuthen')
/**
 * @swagger
 * /api/posts/:
 *  Create:
 *    tags: [Post]
 *    summary: Create new post
 *    description: create new post
 *    responses:
 *      '200':
 *        description: OK
 *      400:
 *        description: Bad request
 *      403:
 *        description: forbidden
 */
 router.post('/posts/',checkAuthen, postController.createPost)


  /**
 * @swagger
 * /api/posts/:
 *  get:
 *    tags: [Post]
 *    description: Get all posts by friends and myself
 *    parameters:
 *      - name: page
 *        in: path
 *        description: pagination for post
 *        required: false
 *        type: string
 *    responses:
 *      '200':
 *        description: OK
 *      400:
 *        description: Bad request
 *      403:
 *        description: forbidden
 */
router.get('/posts/',checkAuthen, postController.getPosts)

/**
 * @swagger
 * /api/posts/{postID}:
 *  delete:
 *    tags: [Post]
 *    summary: Delete a post
 *    description: Delete a post and all its comments
 *    parameters:
 *      - name: postID
 *        in: path
 *        description: post id
 *        required: true
 *        type: string
 *    responses:
 *      '200':
 *        description: OK
 *      400:
 *        description: Bad request
 *      403:
 *        description: forbidden
 */
 router.delete('/posts/:postID', checkAuthen, postController.deletePost)


 /**
 * @swagger
 * /api/posts/{postID}:
 *  put:
 *    tags: [Post]
 *    summary: Update a post
 *    description: Update a post
 *    parameters:
 *      - name: postID
 *        in: path
 *        description: post id
 *        required: true
 *        type: string
 *    requestBody:
 *      content:
 *        required: true
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              postContent:
 *                type: string
 *              postVideo:
 *                type: string
 *              postImages:
 *                type: string
 *                format: binary
 *    responses:
 *      '200':
 *        description: OK
 *      400:
 *        description: Bad request
 *      403:
 *        description: forbidden
 */
router.put('/posts/:postID', checkAuthen, postController.updatePost)
 module.exports = router