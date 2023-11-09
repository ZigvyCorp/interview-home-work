import { PostService } from "../services/post.service";
import { HandleFunc } from "../utils/controller";
import { ValidationService } from "../helpers/validation";
import { JSONSchemaType } from "ajv";
import { UpdatePostDto } from "../dto/update-post.dto";
import { CreatePostDto } from "../dto/create-post-dto";
import { StatusCodes } from "http-status-codes";

export class PostController {
  constructor(
    private postService: PostService,
    private validate: ValidationService
  ) {}

  getAllPost(): HandleFunc {
    return async (req, res, next) => {
      const data = await this.postService.getAllPost(
        {
          perPage: Number(req.query.perPage as string),
          page: Number(req.query.page as string),
        },
        req.query.key as string
      );
      res.status(StatusCodes.OK).json({ docs: data });
    };
  }

  getPostDetailById(): HandleFunc {
    return async (req, res, next) => {
      const data = await this.postService.getPostDetailById(req.params.id);
      res.status(StatusCodes.OK).json({ docs: data });
    };
  }

  getAllCommentOfPost(): HandleFunc {
    return async (req, res, next) => {
      const data = await this.postService.getAllCommentOfPost(req.params.id);
      res.status(StatusCodes.OK).json({ docs: data });
    };
  }

  updatePost(): HandleFunc {
    const schema: JSONSchemaType<UpdatePostDto> = {
      type: "object",
      properties: {
        id: { type: "number" },
        title: { type: "string" },
        content: { type: "string" },
        tag: {
          type: "array",
          items: {
            type: "string",
          },
        },
      },
      required: ["id", "title", "content", "tag"],
    };
    return async (req, res, next) => {
      const payload = this.validate.validate(schema, req.body);

      const data = await this.postService.updatePost(payload);
      res.status(StatusCodes.OK).json({ isSuccess: true });
    };
  }

  createPost(): HandleFunc {
    const schema: JSONSchemaType<CreatePostDto> = {
      type: "object",
      properties: {
        owner: { type: "number" },
        title: { type: "string" },
        content: { type: "string" },
        tag: {
          type: "array",
          items: {
            type: "string",
          },
        },
      },
      required: ["owner", "title", "content", "tag"],
    };
    return async (req, res, next) => {
      const payload = this.validate.validate(schema, req.body);

      const data = await this.postService.createPost(payload);
      res.status(StatusCodes.CREATED).json({ isSuccess: true });
    };
  }

  deletePost(): HandleFunc {
    return async (req, res, next) => {
      const data = await this.postService.removePostById(req.params.id);
      res.status(StatusCodes.OK).json({ isSuccess: true });
    };
  }
}
