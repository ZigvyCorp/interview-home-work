let jwt = require("jsonwebtoken");
const User = require("../models/UserSchema");
// Verify Token Function
const verifyJWT = (tokenKey) => {
    jwt.verify(tokenKey, process.env.jwtSecret, async (err, decodeJwt) => {
        if (decodeJwt !== undefined) {
            if (Date.now() / 1000 > decodeJwt.exp) {
                throw new Error("TimeOut");
            }
            let foundUser = await User.findById(decodeJwt.id)
            return foundUser;
        } else {
            throw new Error("User not exist.");
        }
    });
};

module.exports = { verifyJWT }