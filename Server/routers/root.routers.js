const express = require("express");
const {authRouter} = require("./auth.routers");
const {userRouters} = require("./user.router");

const rootRouter = express.Router();
rootRouter.use("/user", userRouters);
rootRouter.use("/auth", authRouter);

module.exports = {
    rootRouter,
};
