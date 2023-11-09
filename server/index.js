const env = require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const postRouter = require('./routes/post')
const commentRouter = require('./routes/comment')
const userRouter = require('./routes/user')

const connectDB = async () => {
  try {
    mongoose.connect(process.env.DB_CONNECT)
    console.log('MongoDB connected')
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

connectDB()
const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/posts', postRouter)
app.use('/api/comments', commentRouter)
app.use('/api/users', userRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
