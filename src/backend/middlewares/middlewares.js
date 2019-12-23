const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config');
const Session = require('../database/models/session');
const PostSchema = require('../database/models/post');
const CommentSchema = require('../database/models/comment');

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
    jwt.verify(token, SECRET_KEY, { algorithms: 'HS256' }, (err, decoded) => {
        if (err) return res.status(401).json({ error: `Invalid token` });

        Session.findOne({ token: token })
            .then(session => {
                if (!session) return res.status(401).json({ error: "Not authenticated: invalid token" });

                if (session.isLogout) {
                    return res.status(401).json({ error: "The user is logged out" });
                }

                req.headers.session = session;
                req.headers.username = decoded.username;

                return next();
            }).catch(err => {
                next(err);
                throw new Error(err);
            });
    })
}

const isPostAuthor = async function (req, res, next) {
    // Check if user is the owner of the post
    const postId = req.params.id;

    try {
        const targetPost = await PostSchema.findById(postId);
        if (targetPost.owner !== req.headers.username) {
            return res.status(403).send({ error: 'The current user is not the owner of the target post' });
        }
        return next();
    } catch (err) {
        next(err);
    }
}


const isCommentAuthor = async function (req, res, next) {
    const commentId = req.params.commentid;
    try {
        const targetComment = await CommentSchema.findById(commentId);
        if (targetComment.owner !== req.headers.username) {
            return res.status(403).send({ error: 'The current user is not the owner of the target comment' });
        }
        return next();
    } catch (err) {
        next(err);
    }
}
module.exports = { isAuthenticated, isPostAuthor, isCommentAuthor }