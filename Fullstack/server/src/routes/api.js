import userRouter from "./user"
import blogRouter from "./blog"

import { notFound, errHandler } from '../middlewares/errorHandler'

const initRoutes = (app) => {
    app.use("/api/user", userRouter)

    app.use("/api/blog", blogRouter)


    app.use(notFound)
    app.use(errHandler)
}

module.exports = initRoutes