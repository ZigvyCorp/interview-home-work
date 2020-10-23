import { NextFunction, Request, Response, Router } from "express";
import path from "path";
import { AppConfig } from "../config";
import { FilterRequest } from "../models/requests/filter-request";
import { FilterResponse } from "../models/response/filter-response";
import { ProfileService } from "../services";

export class ProfileController {
  get routes() {
    const router = Router();

    router.patch("/avatar", this.updateAvatar);
    router.get("/:id/posts", this.getUserPosts);
    router.patch("/:id", this.updateProfile);
    router.get("/me", this.fetchMyProfile);
    router.get("/:id", this.getProfile);

    return router;
  }

  updateAvatar = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send("No files were uploaded.");
      }
      const avatar = (req.files as any).avatar;
      const { user } = req;
      const filePath = path.resolve(__dirname, `../../public/${avatar.name}`);
      await avatar.mv(filePath);
      const publicFilePath = `${AppConfig.publicUrl}/${avatar.name}`;
      const updatedProfile = await ProfileService().updateAvatar(
        (user as any)._id.toString(),
        publicFilePath
      );
      res.json(updatedProfile);
    } catch (error) {
      next(error);
    }
  };

  getUserPosts = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {
        user,
        params: { id },
        query,
      } = req;
      const filter = new FilterRequest();
      filter.key = query.key as string;
      filter.page = parseInt((query.page as string) || "0");
      filter.pageSize = parseInt((query.pageSize as string) || "10");
      const [posts, count] = await ProfileService().getUserPosts(id, filter);
      const response = new FilterResponse();
      response.data = posts as any[];
      response.metadata = {
        ...filter,
        total: count as number,
      };
      res.json(response);
    } catch (error) {
      next(error);
    }
  };

  updateProfile = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {
        user,
        params: { id },
        body,
      } = req;
      if (id !== (user as any)?._id?.toString())
        return res.status(403).json({
          message: "Forbidden",
        });
      const updatedProfile = await ProfileService().updateProfile(id, body);
      res.json(updatedProfile);
    } catch (error) {
      next(error);
    }
  };

  getProfile = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {
        user,
        params: { id },
      } = req;
      if (id === (user as any)?._id?.toString()) return res.json(user);
      const profile = await ProfileService().findById(id);
      res.json(profile);
    } catch (error) {
      next(error);
    }
  };

  fetchMyProfile = async (req: Request, res: Response, next: NextFunction) => {
    res.json(req.user);
  };
}
