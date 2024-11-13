/**
 * @fileoverview Entry point for the backend server.
 * Initializes and configures the Express application.
 * 
 * @requires express
 */
const express = require('express');
const mongoose = require('mongoose');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/yourdbname', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);
app.use('/users', userRoutes);

app.listen(3000, () => console.log('Server Started on port 3000'));

//to run the server, use the command: node src/index.js.