const express = require('express');
const { isAuthenticated } = require('../../../middlewares');
const UserSchema = require('../../../database/models/user');
const SessionRouter = express.Router();

SessionRouter.post('/register', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (typeof username === 'undefined' || typeof password === 'password') {
        return res.status(400).send({ error: "Username and password are require for registration" })
    }

    try {
        await UserSchema.register(username, password);
        return res.send({msg: `Hello ${username}, your user was registered!`})
    } catch (err) {
        throw new Error(err);
    }
});

SessionRouter.post('/login', (req, res) => {

});

SessionRouter.get('/logout', isAuthenticated, (req, res) => {

})

module.exports = SessionRouter;