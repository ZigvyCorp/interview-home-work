import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import posts from './data/posts.js';

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/api/posts', (req, res) => {
  res.json(posts);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow.bold));
