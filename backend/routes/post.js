const express = require('express');
const fs = require('fs');
const router = express.Router();
const cors = require('cors');

router.use(cors());
const getAllPosts = async (req, res, next) => {
    try {
        const jsonData = fs.readFileSync('../data/posts.json');
        const posts = JSON.parse(jsonData);
        res.json(posts);
    } catch (err) {
        next(err);
    }
};

router.route("/").get(getAllPosts);

module.exports = router;