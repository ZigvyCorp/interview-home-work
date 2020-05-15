import { Router } from "express";
import passport from "passport";
import { AuthController } from "./controllers/auth.controller";
import { PostController } from "./controllers/post.controller";
import { ProfileController } from "./controllers/profile.controller";
import { TagController } from "./controllers/tag.controller";

const authController = new AuthController();
const profileController = new ProfileController();
const tagController = new TagController();
const postController = new PostController();

export const routes = () => {
  const router = Router();

  router.use("/auth", authController.routes);
  router.use(
    "/profiles",
    passport.authenticate("jwt-cookiecombo", {
      session: false,
    }),
    profileController.routes
  );
  router.use(
    "/tags",
    passport.authenticate("jwt-cookiecombo", {
      session: false,
    }),
    tagController.routes
  );
  router.use(
    "/posts",
    passport.authenticate("jwt-cookiecombo", {
      session: false,
    }),
    postController.routes
  );

  return router;
};
