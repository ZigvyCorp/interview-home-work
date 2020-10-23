import { Router } from "express";
import passport from "passport";
import { AuthController } from "./controllers/auth.controller";
import { CommentController } from "./controllers/comment.controller";
import { PostController } from "./controllers/post.controller";
import { ProfileController } from "./controllers/profile.controller";
import { TagController } from "./controllers/tag.controller";

const authController = new AuthController();
const profileController = new ProfileController();
const tagController = new TagController();
const postController = new PostController();
const commentController = new CommentController();

export const routes = () => {
  const router = Router();

  router.use("/auth", authController.routes);
  router.use((req, res, next) => {
    passport.authenticate(
      "jwt-cookiecombo",
      {
        session: false,
      },
      (err, user, info) => {
        if (err || !user)
          return res.status(401).json({
            message: "Unauthenticated",
          });
        req.user = user;
        next();
      }
    )(req, res, next);
  });
  router.use("/profiles", profileController.routes);
  router.use("/tags", tagController.routes);
  router.use("/posts", postController.routes);
  router.use("/comments", commentController.routes);

  return router;
};
