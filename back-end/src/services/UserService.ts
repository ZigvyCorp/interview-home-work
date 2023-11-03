import { hashPassword } from './../utils/CommonUtil';
import { CreateUserRequestDto } from "@dto/request/CreateRequestDto";
import { PaginationRequestDto } from "@dto/request/PaginationRequestDto";
import HttpResponse from "@handler/HttpResponse";
import { Request, Response } from "express";
import { UserModel } from "src/models/UserModel";
import { ObjectLiteral, Repository, getRepository } from "typeorm";
import { BaseService } from "./BaseService";
import { GetRecordByIdRequestDto } from '@dto/request/GetRecordByIdRequestDto';
import { DeleteRecordRequestDto } from '@dto/request/DeleteRecordRequestDto';
import { UpdateUserRequestDto } from '@dto/request/UpdateUserRequestDto';

class UserService extends BaseService {
    async createUser(req: Request<{}, {}, CreateUserRequestDto, {}>, res: Response) {
        try {
            const { name, username, password, dob } = req.body;
            const repository = getRepository(UserModel);
            const findByUsername = await repository.findOne({ where: { username } })
            if (findByUsername) {
                return HttpResponse.error(res, "Username already exists!", 400);
            }
            const newPassword = hashPassword(password);
            const newUser = await this.createAndSave({ name, username, password: newPassword, dob: dob }, UserModel);
            return HttpResponse.success(res, newUser, 200);
        }
        catch (error) {
            console.log("CREATE_USER_ERROR", error);
            return HttpResponse.error(res, "Error when create new user", 400);
        }
    }

    async getUserById(req: Request<GetRecordByIdRequestDto, {}, {}, {}>, res: Response) {
        const { id } = req.params;
        try {
            const repository = getRepository(UserModel);
            const user = await repository.findOne(id);
            if (!user) {
                return HttpResponse.error(res, `User not found`, 400);
            }
            return HttpResponse.success(res, user, 200);
        } catch (error) {
            console.log("FIND_USER_ERROR", error);
            return HttpResponse.error(res, `Error when find user with id ${id}`, 400);
        }

    }

    async deleteUser(req: Request<{}, {}, {}, DeleteRecordRequestDto>, res: Response) {
        const { id, soft } = req.query;
        try {
            await this.deleteOneRecord(UserModel, { id }, JSON.parse(soft))
            return HttpResponse.success(res, { message: `Delete user ${id} successful` }, 200);
        } catch (error) {
            console.log("DELETE_USER_ERROR", error);
            return HttpResponse.error(res, `Error when find user with id ${id}`, 400);
        }
    }

    async updateUser(req: Request<{}, {}, UpdateUserRequestDto, {}>, res: Response) {
        const { id } = req.body;
        try {
            const repository = getRepository(UserModel);
            const user = await repository.findOne(id);
            if (!user) {
                return HttpResponse.error(res, `User not found`, 400);
            }
            await this.handleUpdateUser(user, req.body, res);
            const userSaved = repository.save(user);
            return HttpResponse.success(res, userSaved, 200);
        } catch (error) {
            console.log("UPDATE_USER_ERROR", error);
            return HttpResponse.error(res, `Error when update user with id ${id}`, 400);
        }
    }

    async handleUpdateUser(
        user: UserModel,
        request: UpdateUserRequestDto,
        res: Response) {
        const { name, username, dob, password } = request;
        if (name) {
            user.name = name;
        }
        if (username) {
            const repository = getRepository(UserModel);
            const findByUsername = await repository.findOne({ where: { username } })
            if (findByUsername) {
                return HttpResponse.error(res, "Username already exists!", 400);
            }
            user.username = username;
        }
        if (dob) {
            user.dob = dob;
        }
        if (password) {
            const newPassword = hashPassword(password);
            user.password = newPassword;
        }
    }

    async getAllUsers(req: Request<{}, {}, {}, PaginationRequestDto>, res: Response) {
        try {
            const { page, pageSize } = req.query;
            const select: (keyof UserModel)[] = ['id', 'name', 'username', 'password', 'dob', 'createdAt'];
            const paginationResponse = await this.findAndPagination<UserModel>({ page, pageSize }, UserModel, select);
            return HttpResponse.success(res, paginationResponse, 200);
        }
        catch (error) {
            console.log("FIND_ALL_USER_ERROR", error);
            return HttpResponse.error(res, "Error when find all users", 400);
        }
    }
}

export default new UserService();