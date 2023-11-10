// server.js
const express = require('express');
const bodyParser = require('body-parser');
const postRoutes = require('./app/routes/post.routes');
const userRoutes = require('./app/routes/user.routes');
const commentRoutes = require('./app/routes/comment.routes');

const app = express();
const port = 3000;

const cors = require('cors')

app.use(cors())
app.use(bodyParser.json());


// Use the postRoutes
app.use('/', postRoutes);
app.use('/', userRoutes);
app.use('/', commentRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
