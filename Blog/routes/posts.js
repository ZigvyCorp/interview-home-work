import { Router } from "express";
import { postController } from "../controllers/PostController.js";
export const postRouter = Router();

//Create post
//[POST]
postRouter.post("", postController.create);

//Update post
//[PUT]
//Params:@post._id
postRouter.put("/:id", postController.update);

//Delete post
//[DELETE]
//Params:@post._id
postRouter.delete("/:id", postController.delete);

//Get post by id
//[GET]
//Params:@post._id
postRouter.get("/:id", postController.displayPrivate);

//Get post
//[GET]
postRouter.get("/timeline/all", postController.display);

//Search post
//[GET]
//req.body.word
postRouter.get("/search", postController.search);
