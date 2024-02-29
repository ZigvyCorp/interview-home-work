import { Router } from "express";
import user from "./user.router";
import post from "./post.router";
import comment from "./comment.router";
const router = Router();

export default (): Router => {
  user(router);
  post(router);
  comment(router);
  return router;
};
