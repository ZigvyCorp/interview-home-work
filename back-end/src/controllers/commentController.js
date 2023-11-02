const axios = require('axios');

const getAllComments = async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
        const users = response.data;
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getCommentsByPost = async (req, res) => {
    try {
        const postId = parseInt(req.query.postId);
        const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
        const users = response.data;
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = {
    getAllComments,
    getCommentsByPost
}