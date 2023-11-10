
import express from "express"
import { createComments } from "../controller/commentsController.js"

const commentRoutes = express.Router()
 
commentRoutes.post("/create-comment", createComments)


export default commentRoutes
