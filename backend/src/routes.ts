import { Router } from "express";
import passport from "passport";
import { AuthController } from "./controllers/auth.controller";
import { ProfileController } from "./controllers/profile.controller";

const authController = new AuthController();
const profileController = new ProfileController();

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

  return router;
};
