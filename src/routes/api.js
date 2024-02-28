const express = require('express');
const postController = require('../controllers/postController');
const authController = require('../controllers/authController');
const verifyToken = require('../middleware/verify_Token');


const postRouter = express.Router();
const authRouter = express.Router();


const initApiRoute = (app) => {

    authRouter.post("/register", authController.registers)
    authRouter.post("/login", authController.logins)


    postRouter.get("/getPost", verifyToken, postController.getPost);
    postRouter.get("/:id/comment", verifyToken, postController.getComment);


    app.use("/auth/", authRouter)
    app.use("/post/", postRouter);
    return app;
}

module.exports = initApiRoute;   