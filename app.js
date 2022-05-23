const express = require('express'); // Import Express
const app = express(); // Tạo 
const port = 8000; // Tạo cổng port
const mongoose = require('mongoose'); // import mongoose

app.use(express.json()); // Cấu hình api đọc được body Json
app.use(express.urlencoded({ extended: true })); // Cấu hình api đọc body có tiếng việt

// Xử lí việc bảo mật 
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// Import Router User
const UserRouter = require('./app/routers/UserRouter');
// Import Router Post
const PostRouter = require('./app/routers/PostRouter');
// Import Router Comment
const CommentRouter = require('./app/routers/CommentRouter');

// Sử dụng app router
app.use('/', UserRouter);
app.use('/', PostRouter);
app.use('/', CommentRouter);

// Kết nối MongoDb Compass, URI
mongoose.connect('mongodb://localhost:27017/CRUD_Blog', (error) => {
    if (error)
        throw error;
    console.log('Successfully Connected MongoDb Compass');
});

// Listen Port
app.listen(port, () => {
    console.log(`App listenning on ${port}`);
});

