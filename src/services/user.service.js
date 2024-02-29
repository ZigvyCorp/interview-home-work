import { User } from "../models/index.js";

const getUsers = async (filters) => {
	const page = Number(filters.page) || 1;
	const limit = Number(filters.size) || 10;
	const skip = (page - 1) * limit;

	const users = await User.find().select("-password").skip(skip).limit(limit);

	return { users, page, size: limit, totalUsers: users.length };
};

const getUserById = async (id) => {
	return User.findOne({ id }).select("-password");
};

const updateUser = async (id, updatedUserData) => {
	return User.findOneAndUpdate({ id }, updatedUserData, { new: true }).select("-password");
};

const deleteUser = async (id) => {
	return User.findOneAndDelete({ id }).select("-password");
};

const userService = {
	getUsers,
	getUserById,
	updateUser,
	deleteUser,
};

export default userService;
