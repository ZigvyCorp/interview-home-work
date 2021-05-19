const express = require("express");
const path = require("path");
const router = express.Router();
const fs = require("fs");


const getAllUsers = async(req, res, next) => {
    try {
        const user = fs.readFileSync(
            path.join(__dirname, "../data/users.json")
        );
        const users = JSON.parse(user);

        res.json(users);
    } catch (e) {
        next(e);
    }
};
router.route("/").get(getAllUsers);

module.exports = router;