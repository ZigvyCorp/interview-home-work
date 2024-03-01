import express from 'express'
require('dotenv').config()
import cors from 'cors'
import initRoutes from './src/routes'
import connectDB from './src/config/connectDatabase'

const app = express()
app.use(cors({
    origin: process.env.CLIENT_URL,
    method: ["POST", "GET", "PUT", "DELETE"]
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

initRoutes(app)
connectDB()
const port = process.env.PORT || 8081
const listener = app.listen(port, () => {
    console.log(`Server is running on port ${listener.address().port}`);
})