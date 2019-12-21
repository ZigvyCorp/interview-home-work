const express = require('express');
const { isAuthenticated } = require('../../../middlewares/middlewares');
const SessionSchema = require('../../../database/models/session');
const SessionRouter = express.Router();

SessionRouter.post('/login', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    if (typeof username === 'undefined' || typeof password === 'undefined') {
        return res.status(400).send({ error: "Username and password are required for login" });
    }

    const sessionSchema = new SessionSchema();
    sessionSchema.login(username, password).then(token => {
        if (token.length !== 0) {
            return res.send({ token: token });
        } else {
            return res.status(401).send({ error: 'Failed to login, please try later' });
        }
    }).catch(err => {
        next(err)
        throw new Error(err);
    });
});

SessionRouter.get('/logout', isAuthenticated, async (req, res, next) => {
    try {
        const session = req.headers.session;
        session.logout();
        return res.send({msg: 'Logged out successfully'})
    } catch (err) {
        next(err)
        throw new Error(err);
    }
})

module.exports = SessionRouter;