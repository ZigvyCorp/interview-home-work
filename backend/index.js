const express = require('express')
const cors = require("cors");
require("dotenv").config();
const mongoose = require('mongoose')
const PORT = process.env.ENV_PORT || 8000;

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

console.log(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.3w7ewc0.mongodb.net/${process.env.MONGODB_DATABASE}`);
mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.3w7ewc0.mongodb.net/${process.env.MONGODB_DATABASE}`)
    .then(() => {
        console.log('Connect mongoDB successfully')
    })
    .catch(err => {
        console.error('Connect error: ', err)
    })

const { userModel } = require('./app/models/userModel')
const { postModel } = require('./app/models/postModel')
const { commentModel } = require('./app/models/commentModel')

// Router
const userRouter = require('./app/routes/userRoute')
const postRouter = require('./app/routes/postRoute')
const commentRouter = require('./app/routes/commentRoute')

app.use('/users', userRouter)
app.use('/posts', postRouter)
app.use('/comments', commentRouter)


app.listen(PORT, () => {
    console.log("App listening on port:", PORT);
})
