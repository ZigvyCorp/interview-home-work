import express from "express";
import { GetPosts } from "../controllers/postController.js";
import { GetComments } from "../controllers/commentController.js";

let router = express.Router();

export let initWebRoutes = (app) => {
    router.get('/api/posts', GetPosts)
    router.get('/api/comments', GetComments)
    return app.use("/", router);
}
