import { CreateUserRequestDto } from "@dto/request/CreateRequestDto";
import { DeleteRecordRequestDto } from "@dto/request/DeleteRecordRequestDto";
import { GetRecordByIdRequestDto } from "@dto/request/GetRecordByIdRequestDto";
import { PaginationRequestDto } from "@dto/request/PaginationRequestDto";
import { UpdateUserRequestDto } from "@dto/request/UpdateUserRequestDto";
import { Request, Response } from "express";
import UserService from "src/services/UserService";

class UserController {
    async createUser(req: Request<{}, {}, CreateUserRequestDto, {}>, res: Response) {
        return UserService.createUser(req, res);
    }

    async getUserById(req: Request<GetRecordByIdRequestDto, {}, {}, {}>, res: Response) {
        return UserService.getUserById(req, res);
    }

    async deleteUser(req: Request<{}, {}, {}, DeleteRecordRequestDto>, res: Response) {
        return UserService.deleteUser(req, res);
    }

    async updateUser(req: Request<{}, {}, UpdateUserRequestDto, {}>, res: Response) {
        return UserService.updateUser(req, res);
    }

    async getAllUsers(req: Request<{}, {}, {}, PaginationRequestDto>, res: Response) {
        return UserService.getAllUsers(req, res);
    }
}

export default new UserController();