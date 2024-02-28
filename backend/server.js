require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8888;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});

//routes
app.use('/api/v1', require('./routes/post.route'));
app.use('/api/v1', require('./routes/user.route'));
app.use('/api/v1', require('./routes/comment.route'));

// handle errors
app.use((req, res, next) => {
    const error = new Error('URL Not Found!');
    error.statusCode = 404;
    next(error);
});

app.use((error, req, res, next) => {
    return res.status(error.statusCode).json({
        code: error.statusCode || 500,
        message: error.message || 'Internal Server Error!',
        ...(process.env.NODE_ENV === 'dev') && {
            stack: error.stack
        }
    });
});