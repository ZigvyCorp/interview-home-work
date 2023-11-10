
import express from "express"
import { createComments, getComments } from "../controller/commentsController.js"

const commentRoutes = express.Router()

commentRoutes.get("/get-comments/:postId", getComments)
commentRoutes.post("/create-comment", createComments)


export default commentRoutes
