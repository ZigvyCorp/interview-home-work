import httpStatus from 'http-status-codes';
import { JwtPayload } from '../../types/jwt-payload.type';

import { CustomError } from '../../utils/custom-error';
import { User } from '../models';
import { IUser } from '../types';

const loginWithUsername = async (username: string, password: string): Promise<IUser> => {
    const user = await User.findOne({ username });

    if (!user) {
        throw new CustomError(httpStatus.NOT_FOUND, 'Authentication', 'User not found');
    }

    if (!user.checkPasswordMatch(password)) {
        throw new CustomError(httpStatus.UNAUTHORIZED, 'Authentication', 'Password is incorrect');
    }

    return user;
};

const changePassword = async (payload: JwtPayload, passwordPre: string, passwordNew: string): Promise<IUser> => {
    const { id } = payload;
    const user = await User.findById(id);
    if (!user) {
        throw new CustomError(httpStatus.NOT_FOUND, 'mongoose', 'User not found');
    }

    if (!user.checkPasswordMatch(passwordPre)) {
        throw new CustomError(httpStatus.UNAUTHORIZED, 'Authentication', 'Incorrect password');
    }

    user.password = passwordNew;

    return user.save();
};

export { loginWithUsername, changePassword };
