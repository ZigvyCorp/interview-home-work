import express from 'express'
import { getAllPosts, searchPosts } from '../controllers/postControllers.js'

const router = express.Router()

router.get('/', getAllPosts)
router.get('/search', searchPosts)

export default router
