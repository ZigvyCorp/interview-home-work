import mongoose from 'mongoose';
import { UserModel, IUser, ICreateUser } from './user.model';

export const UserService = {
    async createUser(User: ICreateUser) {
        return await UserModel.create(User);
    },
    async findAllUsers() {
        return await UserModel.find();
    },
    async findById(id: string) {
        return await UserModel.findById(id);
    },
    async findByEmail(email: string) {
        return await UserModel.findOne({ email });
    },
    async deleteUser(id: string) {
        return await UserModel.deleteOne({ _id: id });
    },
    async findAllPostsOfUser(id: string) {
        return await UserModel.aggregate([
            {
                $match: { _id: new mongoose.Types.ObjectId(id) }
            },
            {
                $lookup: {
                    from: 'blogs',
                    localField: 'post',
                    foreignField: '_id',
                    as: 'post'
                }
            }
        ]);
    },
}