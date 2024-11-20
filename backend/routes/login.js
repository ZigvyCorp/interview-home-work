const express = require('express');
const fs = require('fs');
const router = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');

router.use(cors());
const checkLogin = async (req, res, next) => {
    const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ success: false, message: 'Missing username or password' })

        }
        try {
            // Check for existing username
            const jsonData = fs.readFileSync('../data/users.json');
            const users = JSON.parse(jsonData);
            const checkUser = users.find(user => user.username === String(req.params.username));
            if (!checkUser) {
                return res.status(400).json({ success: false, message: 'incorrect username or password' })
            }
            // user name founded 
            const checkPass = users.find(user => user.password === String(req.params.password));
            if (!checkPass) {
                return res.status(400).json({ success: false, message: 'incorrect username or password'})
            }
            const token = jwt.sign(
                { userID: newUser._id },
                process.env.SECRET_TOKEN
            )
            res.json({
                success: true,
                message: 'Login success',
                token: token
            })
        } catch (err) {
            next(err);
        }
};

router.route("/").post(checkLogin);

module.exports = router;