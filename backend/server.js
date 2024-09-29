const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/api/posts', async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching posts:", error);
        res.status(500).send('Error fetching posts');
    }
});

app.get('/api/posts/:id', async (req, res) => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching post:", error);
        res.status(500).send('Error fetching post');
    }
});

app.get('/api/posts/:id/comments', async (req, res) => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${req.params.id}/comments`);
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching comments:", error);
        res.status(500).send('Error fetching comments');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
