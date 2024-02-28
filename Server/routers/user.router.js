const express = require("express");
const {RESPONSE_CODE} = require("../constants");
const db = require('../constants/dummy')

const {
    authenticate,
} = require("../middlewares/veryfy-token.middleware");

const userRouter = express.Router();

userRouter.get(
    "/",
    authenticate,
    async (req, res) => {
        try {
            let data = db.user
            res.send(data).status(RESPONSE_CODE.OK);
        } catch (error) {
            res.status(RESPONSE_CODE.INTERNAL_SERVER_ERROR).send(error);
        }
    }
);

userRouter.get(
    "/detail/:userId",
    authenticate,
    async (req, res) => {
        try {
            const {userId} = req.params
            let listPosts = db.post
            let userList = db.user
            let commentList = db.comment

            const userDetail = userList.filter(x => x.id === parseInt(userId))[0]

            const posts = listPosts.filter(x => x.userId === parseInt(userId))

            const data = {
                ...userDetail,
                posts: posts.map(post => ({
                    ...post,
                    comments: commentList.filter(comment => comment.postId === post.id)
                }))
            }

            res.send(data).status(RESPONSE_CODE.OK);
        } catch (error) {
            res.status(RESPONSE_CODE.INTERNAL_SERVER_ERROR).send(error);
        }
    }
);

module.exports = {
    userRouter,
};
