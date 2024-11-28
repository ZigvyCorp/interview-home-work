require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()

// Configures the database and open a global connection
require('./config/database.js')
const corsOptions = {
    origin: "*",
};
const albumRoute = require('./routes/album.route.js')
const commentRoute = require('./routes/comment.route.js')
const photoRoute = require('./routes/photo.route.js')
const postRoute = require('./routes/post.route.js')
const todoRoute = require('./routes/todo.route.js')
const userRoute = require('./routes/user.route.js')


// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Allows application to make HTTP requests to Express application
app.use(cors(corsOptions));

// routes
app.get('/', (req, res) => {
    res.send('Welcome to the backend server');
})
app.use('/api/albums', albumRoute)
app.use('/api/comments', commentRoute)
app.use('/api/photos', photoRoute)
app.use('/api/posts', postRoute)
app.use('/api/todos', todoRoute)
app.use('/api/users', userRoute)

app.listen(3001, () => {
    console.log('Server is running on port 3001')
})