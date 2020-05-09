let User = require("../../models/UserSchema");
let jwt = require("jsonwebtoken");
let bcrypt = require("bcrypt");
require("dotenv/config");

const { verifyJWT } = require('../../middleware/checkToken');
// get all users
exports.getAllUsers = async (req, res) => {
    await User.find({}, function (err, users) {
        if (err) throw err;
        if (users.length > 0) {
            var jsonResponse = { users: users };
            res.json(jsonResponse);
        } else {
            res.json({ message: "Users not exist in database.", });
        }
    });
};

// register
exports.register = async (req, res) => {
    // get user
    var user = new User(req.body);
    user.password = bcrypt.hashSync(req.body.password, 10);

    await User.find({ username: req.body.username }, (err, userExist) => {
        if (err) {
            res.send({ message: "Error to find user", error: err });
        }
        if (userExist.length > 0) {
            res.send({ message: "User exist!" });
        } else {
            // save
            user.save(function (err, newUser) {
                if (err) {
                    res.json({ message: "Error to save", error: err });
                    return;
                }
                //not show password
                newUser.password = undefined;
                res.json({ message: "Save ok", data: newUser });
            });
        }
    });

};

// login
exports.login = async (req, res) => {
    let { username, password } = req.body;
    // find
    await User.findOne(
        {
            username: username,
        },
        function (err, user) {
            if (!user) {
                res.json({ error: "User not exist." });
            } else if (user && user.comparePassword(password)) {
                var payload = { id: user._id };
                var jwtToken = jwt.sign(payload, process.env.jwtSecret, {
                    expiresIn: 86400,
                });
                res.json({ message: "Login successful.", access_token: jwtToken });
                return jwtToken;
            } else {
                res.json({ message: "Something wrong.", error: err });
            }
        }
    );
};



