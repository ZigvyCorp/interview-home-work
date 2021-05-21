require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8080;
const connectDB = require('./config/connectDB');

const userRouter = require('./routers/users');
const postRouter = require('./routers/posts');
const commentRouter = require('./routers/comments');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ket noi toi mongodb
connectDB();

//cors
app.use(cors());

userRouter(app);
postRouter(app);
commentRouter(app);

app.get('/', (req, res) => {
    res.send('Welcome to my backend');
});

app.listen(port, () => console.log(`server running on port ${port}`));
