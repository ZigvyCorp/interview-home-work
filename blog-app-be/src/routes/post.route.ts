import { Router } from "express";
import PostController from "../controllers/post.controller";

const postRouter = Router();

postRouter.post("/", PostController.create);
postRouter.get("/", PostController.getMany);
postRouter.put("/:id", PostController.update);
postRouter.delete("/:id", PostController.delete);

export default postRouter;
