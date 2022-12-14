import { NextFunction, Request, Response } from "express";
import { PostCreateRequestDTO } from "../../Models/DTO/Post/Post.Create.Request.DTO";
import {
  MapPostReponse,
  PostReponseDTO,
} from "../../Models/DTO/Post/Post.Reponse.DTO";
import { PostUpdateRequestDTO } from "../../Models/DTO/Post/Post.Update.Request.DTO";
import PostReposistory from "../../Repository/Post.Repository";
const logger = require("../../logger/logger");
const validator = require("validator");

class PostController {
  public async GetAll(req: Request, res: Response, next: NextFunction) {
    const list: Array<PostReponseDTO> = await PostReposistory.GetAll();

    if (list)
      return res.json(list.map((a: PostReponseDTO) => MapPostReponse.toDTO(a)));

    return res.status(400).send("error");
  }
  public async GetSingle(req: Request, res: Response, next: NextFunction) {
    const obj: PostReponseDTO | null = await PostReposistory.GetSingle(
      req.params.id
    );
    if (!validator.isMongoId(req.params.id))
      return res.status(400).send("Error Field");

    if (obj) return res.json(MapPostReponse.toDTO(obj));

    return res.status(400).send("error");
  }

  public async Create(req: Request, res: Response, next: NextFunction) {
    const { name, email, body }: PostCreateRequestDTO = req.body;

    if (!validator.isEmail(email)) return res.status(400).send("Error Field");

    const obj: PostReponseDTO | null = await PostReposistory.Create({
      name,
      email,
      body,
    });

    if (obj) return res.json(MapPostReponse.toDTO(obj));
    logger.error("error Post: " + req.body + "-------End");

    return res.status(400).send("error");
  }

  public async UpdateBy(req: Request, res: Response, next: NextFunction) {
    const { name, email, body }: PostUpdateRequestDTO = req.body;

    if (!validator.isEmail(email) || !validator.isMongoId(req.params.id))
      return res.status(400).send("Error Field");

    const obj = await PostReposistory.UpdateBy(req.params.id, {
      name,
      email,
      body,
    });

    return res.send(obj);
  }
  public async DeleteById(req: Request, res: Response, next: NextFunction) {
    if (!validator.isMongoId(req.params.id))
      return res.status(400).send("Error Field");

    const obj = await PostReposistory.DeleteById(req.params.id);

    res.send(obj);
  }

  public async HardDeleteById(req: Request, res: Response, next: NextFunction) {
    if (!validator.isMongoId(req.params.id))
      return res.status(400).send("Error Field");

    const obj = await PostReposistory.HardDeleteById(req.params.id);

    res.send(obj);
  }
}
export default new PostController();
