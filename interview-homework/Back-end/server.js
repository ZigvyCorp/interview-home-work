const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 5000;

const BASE_URL = 'https://jsonplaceholder.typicode.com';

app.use(cors());
app.use(express.json());

app.get('/api/posts', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/posts`);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/api/comments', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/comments`);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/api/users', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
