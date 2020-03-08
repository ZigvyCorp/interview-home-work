import { Router } from 'express'

import endpoints from '../endpoints'
import { validation } from '../middlewares'

const router = Router()

router.post('/', validation, endpoints.comment.createComment)

export default router
