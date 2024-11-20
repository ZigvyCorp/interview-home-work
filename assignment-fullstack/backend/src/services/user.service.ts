import userModel from "../models/user.model"

class UserService {
    static getUsers = async () => {
        const users = await userModel.find();
        return users
    }

    static getUserById = async (userId) => {
        const user = await userModel.findById(userId);
        return user
    }

    static createUser = async (user) => {
        const newUser = await userModel.create(user)
        return newUser
    }

    static updateUser = async (userId, user) => {
        const updatedUser = await userModel.findByIdAndUpdate(userId, user, { new: true })
        return updatedUser
    }
}

export default UserService