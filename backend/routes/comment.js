const express = require('express');
const fs = require('fs');
const router = express.Router();
const cors = require('cors');

router.use(cors());
const getAllComments = async (req, res, next) => {
    try {
        const jsonData = fs.readFileSync('../data/comments.json');
        const comments = JSON.parse(jsonData);
        res.json(comments);
    } catch (err) {
        next(err);
    }
};

router.route("/").get(getAllComments);

module.exports = router;