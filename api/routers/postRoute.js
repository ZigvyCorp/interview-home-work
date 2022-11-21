const express = require('express')

const router = express.Router()
const postController = require('../controllers/postController')

/**
 * @swagger
 * /api/post/:
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
 router.post('/post/',checkAuthen, postController.getPosts)


 module.exports = router