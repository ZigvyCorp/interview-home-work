const axios = require('axios');

const getAllPosts = async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const posts = response.data;
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getPostDetails = async (req, res) => {
    try {
        const {id} = req.params;
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const posts = response.data;
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getPostComments = async (req, res) => {
    try {
        const {id} = req.params;
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        const posts = response.data;
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = {
    getAllPosts,
    getPostDetails,
    getPostComments
}