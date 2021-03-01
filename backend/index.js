import express from 'express'
import dotenv from 'dotenv'
import postRoutes from './routes/postRoutes.js'

dotenv.config()

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Welcome to Zigvy!!!!')
})

app.use('/api/post', postRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () =>
  console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`))
