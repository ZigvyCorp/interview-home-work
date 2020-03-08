import { Router } from 'express'

import endpoints from '../endpoints'
import { validation } from '../middlewares'

const router = Router()

router.get('/', validation, endpoints.post.getPosts)

router.get('/:postId', endpoints.post.getPostById)

export default router
