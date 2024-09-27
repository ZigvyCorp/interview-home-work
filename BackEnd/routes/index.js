

import { Router } from "express";

import userRouter from './user.route.js'
import postRouter from './post.route.js'
import commentRouter from './comment.route.js'

const router = Router()

router.use('/api/user' , userRouter)
router.use('/api/post' , postRouter)
router.use('/api/comment' , commentRouter)


export default router