import express from 'express'
import * as postController from '../controllers/postController'

const router = express.Router()

router.get('/', postController.getPosts)
router.get('/:id', postController.getPostDetail)
router.get('/:id/comments', postController.getPostComments)

export default router