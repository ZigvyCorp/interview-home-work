const express = require("express")
const app = express()
const cors = require("cors")
const PORT  = process.env.PORT || 5000
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const posts = require("./routers/posts")
const comments = require("./routers/comments")
const users = require("./routers/users")

const URI = 'mongodb+srv://admin:8nhT7t1GJx0qbM8R@cluster0.kjjlog4.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('connect to DB')
    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`)
    })
})
.catch((err) =>{
    console.log('Error, could not connect', err)
})



app.use(bodyParser.json({limit: '30mb'}))
app.use(bodyParser.urlencoded({extended: true, t: '30mb'}))
app.use(cors())




// posts
app.use('/posts', posts)

// comments

app.use('/comments', comments)

//users

app.use('/users', users)

exports.module = app