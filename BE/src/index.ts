import cors from 'cors'
import express from 'express'
import { defaultErrorHandler } from './middlewares/errors.middlewares'
import commentsRouter from './routes/comments.routes'
import postsRouter from './routes/posts.routes'
import usersRouter from './routes/users.routes'
import dataBaseService from './services/database.services'

dataBaseService.connect()
const app = express()
const port = 3000

const corsOptions = {
  origin: `http://localhost:3001`,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true
}
app.use(cors(corsOptions))
app.use(express.json())
app.use('/users', usersRouter)
app.use('/posts', postsRouter)
app.use('/comments', commentsRouter)
app.use(defaultErrorHandler)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
