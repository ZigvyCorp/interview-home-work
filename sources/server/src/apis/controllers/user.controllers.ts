import httpStatus from 'http-status-codes';
import { Request, Response } from 'express';

import { postService, userService } from '../services';
import catchAsync from '../../utils/catch-async';

const getUsers = catchAsync(async (req: Request, res: Response) => {
    const users = await userService.getUsers();
    res.status(httpStatus.OK).send({ users });
});

const getPostsByUser = catchAsync(async (req: Request, res: Response) => {
    const posts = await userService.getPostsByUser(req.jwtPayload.id);
    res.status(httpStatus.OK).send({ posts });
});

const createUser = catchAsync(async (req: Request, res: Response) => {
    const user = await userService.createUser(req.body);
    res.status(httpStatus.CREATED).send({ user });
});

const updateUser = catchAsync(async (req: Request, res: Response) => {
    const updatedUser = await userService.updateUser(req.params.userID, req.body);
    res.status(httpStatus.OK).send({ updatedUser });
});

const deleteUser = catchAsync(async (req: Request, res: Response) => {
    const deletedUser = await userService.deleteUser(req.params.userID);
    res.status(httpStatus.OK).send({ deletedUser });
});

export { getUsers, createUser, updateUser, deleteUser, getPostsByUser };
