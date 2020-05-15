import { NextFunction, Request, Response, Router } from "express";
import moment from "moment";
import { AppConfig } from "../config";
import { AuthService } from "../services";
import { signJwt } from "../utils/jwt";

export class AuthController {
  get routes() {
    const router = Router();

    router.post("/sign-up", this.signUp);
    router.post("/login", this.login);
    router.post("/logout", this.logout);

    return router;
  }

  logout = (req: Request, res: Response, next: NextFunction) => {
    res.clearCookie("jwt");
    res.sendStatus(204);
  };

  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { body } = req;
      if (!body.username || !body.password)
        return res.status(400).json({
          message: "Missing username or password",
        });
      const user = await AuthService().findWithCredentials(
        body.username,
        body.password
      );
      if (!user)
        return res.status(401).json({
          message: "Wrong username or password",
        });
      const token = signJwt(user);
      res.cookie("jwt", token, {
        httpOnly: true,
        signed: true,
        sameSite: false,
        expires: moment().add(AppConfig.jwt.liveDays, "days").toDate(),
      });
      res.json({
        jwt: token,
      });
    } catch (error) {
      // TODO: replace console with another logging helper (morgan)
      console.error(error);
      next(error);
    }
  };

  signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData = req.body;
      if (!userData.firstName)
        return res.status(400).json({
          message: "Missing first name",
        });
      if (!userData.lastName)
        return res.status(400).json({
          message: "Missing last name",
        });
      if (!userData.username)
        return res.status(400).json({
          message: "Missing username",
        });
      if (!userData.password)
        return res.status(400).json({
          message: "Missing password",
        });
      if (await AuthService().usernameExists(userData.username)) {
        return res.status(400).json({
          message: "Username exists",
        });
      }
      const user = await AuthService().createUser(userData);
      res.json(user);
    } catch (error) {
      // TODO: replace console with another logging helper (morgan)
      console.error(error);
      next(error);
    }
  };
}
