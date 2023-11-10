import { CommentService } from "../services/comment.service";
import { HandleFunc } from "../utils/controller";
import { ValidationService } from "../helpers/validation";
import { CreateCommentDto } from "../dto/create-comment.dto";
import { JSONSchemaType } from "ajv";
import { UpdateCommentDto } from "../dto/update-comment.dto";
import { StatusCodes } from "http-status-codes";

export class CommentController {
  constructor(
    private commentService: CommentService,
    private validate: ValidationService
  ) {}

  getAllComment(): HandleFunc {
    return async (req, res, next) => {
      const data = await this.commentService.getAllComment(
        req.query.postId as string,
        {
          perPage: Number(req.query.perPage as string),
          page: Number(req.query.page as string),
        }
      );
      res.status(200).json({ docs: data });
    };
  }

  createComment(): HandleFunc {
    const schema: JSONSchemaType<CreateCommentDto> = {
      type: "object",
      properties: {
        owner: { type: "number" },
        post: { type: "number" },
        content: { type: "string" },
      },
      required: ["owner", "post", "content"],
    };
    return async (req, res, next) => {
      const payload = this.validate.validate(schema, req.body);

      const data = await this.commentService.createComment(payload);
      res.status(StatusCodes.CREATED).json({ isSuccess: true });
    };
  }

  updateComment(): HandleFunc {
    const schema: JSONSchemaType<UpdateCommentDto> = {
      type: "object",
      properties: {
        content: { type: "string" },
        id: { type: "number" },
      },
      required: ["id", "content"],
    };
    return async (req, res, next) => {
      const payload = this.validate.validate(schema, req.body);
      const data = await this.commentService.updateComment(payload);
      res.status(StatusCodes.OK).json({ isSuccess: true });
    };
  }

  deleteComment(): HandleFunc {
    return async (req, res, next) => {
      const data = await this.commentService.removeCommentById(
        req.params.postId
      );
      res.status(StatusCodes.OK).json({ isSuccess: true });
    };
  }
}
