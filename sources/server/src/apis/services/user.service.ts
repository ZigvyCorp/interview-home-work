import httpStatus from 'http-status-codes';
import { postService } from '.';

import { CustomError } from '../../utils/custom-error';
import { User } from '../models';
import { IPost, IUser } from '../types';

const getUsers = async (): Promise<Array<IUser>> =>
    User.find({}).select(['-password', '-createdAt', '-updatedAt', '-__v']);

const getPostsByUser = async (userID: string): Promise<Array<IPost>> => {
    const foundUser = await User.findById(userID).populate('posts');
    if (!foundUser) throw new CustomError(httpStatus.BAD_REQUEST, 'mongoose', 'User not found');
    return <Array<IPost>>foundUser.posts;
};

const getById = async (userID: string): Promise<IUser> => {
    const user = await User.findById(userID);
    if (!user) throw new CustomError(httpStatus.BAD_REQUEST, 'mongoose', 'User not found');
    return user;
};

const createUser = async (userBody: IUser): Promise<IUser> => {
    if (await User.isUsernameTaken(userBody.username)) {
        throw new CustomError(httpStatus.BAD_REQUEST, 'mongoose', 'Username already taken');
    }
    return User.create(userBody);
};

const updateUser = async (userID: string, user: IUser): Promise<IUser> => {
    const foundUser = await User.findById(userID);
    if (!foundUser) throw new CustomError(httpStatus.NOT_FOUND, 'mongoose', 'User not found');
    return User.findByIdAndUpdate(userID, user, {
        new: true,
    });
};

const deleteUser = async (userID: string) => {
    const foundUser = await User.findById(userID);
    if (!foundUser) throw new CustomError(httpStatus.NOT_FOUND, 'mongoose', 'User not found');

    // Delete post belong user
    foundUser.posts.forEach((post) => {
        postService.deletePost(post);
    });

    return User.findByIdAndDelete(userID);
};

export { getUsers, getById, createUser, updateUser, deleteUser, getPostsByUser };
