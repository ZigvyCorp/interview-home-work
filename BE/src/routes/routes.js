import express from "express"
import postRoutes from "./postRoutes.js"
import commentRoutes from "./commentsRoutes.js"

const routes = express.Router()

routes.use("/posts", postRoutes)
routes.use("/comments", commentRoutes)

export default routes
