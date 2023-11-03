import userModel from "../user.model";

export const findUserById = async (userId) => {
    const user = await userModel.findById(userId);
    return user;
}