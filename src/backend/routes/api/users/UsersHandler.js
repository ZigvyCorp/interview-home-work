const express = require('express');
const UserSchema = require('../../../database/models/user')
const UsersRouter = express.Router();

UsersRouter.post('/', async (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    if (typeof username === 'undefined' || typeof password === 'undefined') {
        return res.status(400).send({ error: "Username and password are required for registration" })
    }

    try {
        const userSchema = new UserSchema();
        const message = await userSchema.register(username, password);
        return res.send({msg: message})
    } catch (err) {
        next(err)
        throw new Error(err);
    }
});

module.exports = UsersRouter;