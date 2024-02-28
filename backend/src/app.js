const express = require('express');
const mongoose = require('mongoose');
const commentsRouter = require('./routes/commentsRoute');
const postsRouter = require('./routes/postsRoute');
const usersRouter = require('./routes/usersRoute');
const cors = require('cors');
const app = express()
const PORT = process.env.PORT || 3001;

// connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/myblog', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB', err);
    });

app.use(cors())
app.use(express.json());

app.use('/posts', postsRouter);
app.use('/comments', commentsRouter);
app.use('/users', usersRouter);


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})