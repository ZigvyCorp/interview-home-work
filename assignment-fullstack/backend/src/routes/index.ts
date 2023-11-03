import express from 'express'
import postRoutes from './post';
import commentRoutes from './comment'
import userRoutes from './user'
const router = express.Router();

router.use('/posts', postRoutes)
router.use('/comments', commentRoutes)
router.use('/users', userRoutes)

export default router;