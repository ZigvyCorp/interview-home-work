import express from "express"
import { createPost, getPosts, searchPost } from "../controller/postController.js"

const postRoutes = express.Router()


postRoutes.get("/all", getPosts)
postRoutes.get("/search", searchPost)
postRoutes.post("/create-post", createPost)

export default postRoutes
