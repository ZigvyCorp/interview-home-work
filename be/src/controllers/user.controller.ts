import { JSONSchemaType } from "ajv";
import { ValidationService } from "../helpers/validation";
import { UserService } from "../services/user.service";
import { HandleFunc } from "../utils/controller";
import { CreateUserDto } from "../dto/create-user.dto";
import { StatusCodes } from "http-status-codes";
import { UpdateUserDto } from "../dto/update-user.dto";

export class UserController {
  constructor(
    private userService: UserService,
    private validate: ValidationService
  ) {}

  getAllUser(): HandleFunc {
    return async (req, res, next) => {
      const data = await this.userService.getAllUser({
        perPage: Number(req.query.perPage as string),
        page: Number(req.query.page as string),
      });
      res.status(StatusCodes.OK).json({ docs: data });
    };
  }

  getUser(): HandleFunc {
    return async (req, res, next) => {
      const data = await this.userService.getUserById(req.params.id);
      res.status(StatusCodes.OK).json({ docs: data });
    };
  }

  updateUser(): HandleFunc {
    const schema: JSONSchemaType<UpdateUserDto> = {
      type: "object",
      properties: {
        username: { type: "string" },
        name: { type: "string" },
        dob: { type: "string", format: "date" },
      },
      required: ["username", "name", "dob"],
    };
    return async (req, res, next) => {
      const payload = this.validate.validate(schema, req.body);

      const data = await this.userService.updateUser(payload);
      res.status(StatusCodes.OK).json({ isSuccess: true });
    };
  }

  createUser(): HandleFunc {
    const schema: JSONSchemaType<CreateUserDto> = {
      type: "object",
      properties: {
        username: { type: "string" },
        password: { type: "string" },
        name: { type: "string" },
        dob: { type: "string", format: "date" },
      },
      required: ["username", "password", "name", "dob"],
    };
    return async (req, res, next) => {
      const payload = this.validate.validate(schema, req.body);

      const data = await this.userService.createUser(payload);
      res.status(StatusCodes.CREATED).json({ isSuccess: true });
    };
  }

  deleteUser(): HandleFunc {
    return async (req, res, next) => {
      const data = await this.userService.removeUserById(req.params.id);
      res.status(StatusCodes.OK).json({ isSuccess: true });
    };
  }
}
