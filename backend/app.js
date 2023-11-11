const express = require('express');
const connectDB = require('./db');
const cors = require('cors');
require('dotenv').config();

const homepage = require('./routes/homepage.route')
const user = require('./routes/user.route')
const comment = require('./routes/comment.route')

const app = express();

app.use(cors());
app.use(express.json());

app.use('/blog', homepage)
app.use('/user', user)
app.use('/comment', comment)

connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));