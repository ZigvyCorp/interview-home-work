const express = require("express");
const {RESPONSE_CODE} = require("../constants");
const db = require('../constants/dummy')

const {
    authenticate,
} = require("../middlewares/veryfy-token.middleware");

const postsRouter = express.Router();

postsRouter.get(
    "/",
    authenticate,
    async (req, res) => {
        try {
            let data = db.post
            res.send(data).status(RESPONSE_CODE.OK);
        } catch (error) {
            res.status(RESPONSE_CODE.INTERNAL_SERVER_ERROR).send(error);
        }
    }
);

postsRouter.get(
    "/:postId",
    authenticate,
    async (req, res) => {
        try {
            const {postId} = req.params
            let listPosts = db.post
            let userList = db.user
            let commentList = db.comment
            const postDetail = listPosts.filter(x => x.id === parseInt(postId))[0]

            const data = {
                ...postDetail,
                user: userList.filter(x => x.id === postDetail.id)[0],
                comments: commentList.filter(x => x.postId === postDetail.id)
            }

            res.send(data).status(RESPONSE_CODE.OK);
        } catch (error) {
            res.status(RESPONSE_CODE.INTERNAL_SERVER_ERROR).send(error);
        }
    }
);

module.exports = {
    postsRouter,
};
