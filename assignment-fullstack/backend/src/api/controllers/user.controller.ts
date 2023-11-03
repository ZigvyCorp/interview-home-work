import { Request, Response, NextFunction } from 'express';
import UserService from '../../services/user.service';
import responseHandler from '../../helpers/responseHandler';

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await UserService.getUsers();
        responseHandler(res, 200, 'Get users successfully', users)
    }
    catch (err) {
        next(err);
    }
}

const getUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await UserService.getUserById(req.params.id);
        responseHandler(res, 200, 'Get user successfully', user)
    }
    catch (err) {
        next(err);
    }
}

const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await UserService.createUser(req.body)
        responseHandler(res, 201, 'Create user successfully', user)
    }
    catch (err) {
        next(err);
    }
}

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await UserService.updateUser(req.params.id, req.body);
        responseHandler(res, 201, 'Update user successfully', user)
    }
    catch (err) {
        next(err);
    }
}

export {
    getUsers,
    getUser,
    createUser,
    updateUser
}