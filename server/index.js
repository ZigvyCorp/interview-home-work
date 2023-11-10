const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const userRouter = require('./routes/users')
const postRouter = require('./routes/posts')
const commentRouter = require('./routes/comments')

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/ma_van_trung_zigvy_blog')

    console.log('MongoDB connected')
  } catch (error) {
    console.log(error.message)
    process.exit(1)
  }
}

connectDB()

const app = express()
app.use(express.json())
app.use(cors())

app.use('/api', userRouter)
app.use('/api', postRouter)
app.use('/api', commentRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
