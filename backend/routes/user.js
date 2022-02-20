const express = require('express');
const fs = require('fs');
const router = express.Router();
const cors = require('cors');

router.use(cors());
const getUsers = async (req, res, next) => {
    try {
        const jsonData = fs.readFileSync('../data/users.json');
        const userJson = JSON.parse(jsonData);
        const user = userJson.find((uID) => uID.id === Number(req.params.id));
        if (!user) {
            const error = new Error('No user available!');
            error.status = 404;
            throw error;
        }
        res.json(user);
    } catch (e) {
        next(e);
    }
};

const getAllUsers = async (req, res, next) => {
    try {
        const jsonData = fs.readFileSync('../data/users.json');
        const users = JSON.parse(jsonData);
        res.json(users);
    } catch (e) {
        next(e);
    }
};

router.route("/").get(getAllUsers);

module.exports = router;

