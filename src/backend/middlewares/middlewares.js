const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config');
const Session = require('../database/models/session');

const isAuthenticated = function (req, res, next) {
    if (typeof req.headers.authentication === 'undefined') {
        return res.status(401).json({ error: 'Authentication information is required' });
    }

    // Format: jwt TOKEN
    const authenticationParts = req.headers.authentication.split(" ");
    if (!authenticationParts || authenticationParts.length !== 2) {
        return res.status(401).json({ error: 'Wrong authentication header format, the correct format: jwt EXAMPLE_TOKEN' });
    }

    if (authenticationParts[0] !== 'jwt') {
        return res.status(401).json({ error: 'Wrong authentication header format, the correct format: jwt EXAMPLE_TOKEN' });
    }

    const token = authenticationParts[1];
    jwt.verify(token, SECRET_KEY, { algorithms: 'HS256' }, err => {
        if (err) return res.status(401).json({ error: `Not authenticated - ${err}` });

        Session.findOne({ token: token })
            .then(session => {
                if (!session) return res.status(401).json({ error: "Not authenticated: invalid token" });

                if (session.isLogout) {
                    return res.status(401).json({ error: "The user is logged out" });
                }

                req.headers.session = session;
                return next();
            }).catch(err => {
                throw new Error(err);
                return next(err);
            });
    })
}

module.exports = { isAuthenticated }