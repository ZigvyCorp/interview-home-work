import express from 'express';
import dotenv from 'dotenv';
import posts from './data/posts.js';

dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/api/posts', (req, res) => {
  res.json(posts);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
