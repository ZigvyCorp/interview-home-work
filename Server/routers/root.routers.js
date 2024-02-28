const express = require("express");
const {authRouter} = require("./auth.routers");
const {postsRouter} = require("./post.router");
const {commentsRouter} = require("./comment.router");
const {userRouter} = require("./user.router");

const rootRouter = express.Router();
rootRouter.use("/posts", postsRouter);
rootRouter.use("/comments", commentsRouter);
rootRouter.use("/users", userRouter);
rootRouter.use("/auth", authRouter);

module.exports = {
    rootRouter,
};
