import express from "express"
const postRouter = require('./PostRouter')

const router = express.Router()

router.get('/posts', postRouter)

module.exports = router