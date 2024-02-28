import prisma from '../../prismadb';
import { CreateUserRequest, UpdateUserRequest, UserFromMockApi } from '../types';

export const fetchUsers = async (users: UserFromMockApi[]) => {
    try {
        //reset
        await prisma.user.deleteMany();
        const modifiedUsers = users.map(user => {
            return {
                id: user.id,
                name: user.name,
                username: user.username,
                email: user.email
            };
        });
        const res = await prisma.user.createMany({ data: modifiedUsers });
        console.log(`Already fetch ${res.count} users!`);
    } catch (error) {
        console.log({ error });
    }
};

export const getUsers = async (page: number | undefined) => {
    try {
        if (!page) return prisma.user.findMany({});
        const users = await prisma.user.findMany({
            skip: (page - 1) * 10,
            take: 10
        });
        return users;
    } catch (error) {
        throw error;
    }
};

export const getUser = async (id: number) => {
    try {
        const user = await prisma.user.findFirst({
            where: { id }
        });
        if (!user)
            throw {
                message: 'User does not exist'
            };
        return user;
    } catch (error) {
        throw error;
    }
};

export const createUser = async (user: CreateUserRequest) => {
    try {
        //check user exist
        const checkUser = await prisma.user.findFirst({
            where: { id: user.id }
        });
        if (checkUser) throw { message: 'User is already exist' };

        //create user
        const createdUser = await prisma.user.create({
            data: { ...user }
        });
        return createdUser;
    } catch (error) {
        throw error;
    }
};

export const updateUser = async (userId: number, user: UpdateUserRequest) => {
    try {
        //check user exist
        await getUser(userId);

        //update
        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: user
        });
        return updatedUser;
    } catch (error) {
        throw error;
    }
};

export const deleteUser = async (id: number) => {
    try {
        const res = await prisma.user.delete({
            where: { id }
        });
        return res;
    } catch (error) {
        throw error;
    }
};
