import { NextFunction, Request, Response, Router } from "express";

export class ProfileController {
  get routes() {
    const router = Router();

    router.get("/me", this.fetchMyProfile);

    return router;
  }

  fetchMyProfile = async (req: Request, res: Response, next: NextFunction) => {
    res.json(req.user);
  };
}
