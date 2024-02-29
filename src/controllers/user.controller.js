import { StatusCodes } from "http-status-codes";
import { userService } from "../services/index.js";

const getUsers = async (req, res) => {
	const result = await userService.getUsers(req.query);
	res.status(StatusCodes.OK).json({ status: "success", data: { ...result } });
};

const getUser = async (req, res) => {
	const user = await userService.getUserById(req.params.id);
	res.status(StatusCodes.OK).json({ status: "success", data: { user } });
};

const updateUser = async (req, res) => {
	const user = await userService.updateUser(req.params.id, req.body);
	res.status(StatusCodes.OK).json({ status: "success", data: { user } });
};

const deleteUser = async (req, res) => {
	const user = await userService.deleteUser(req.params.id);
	res.status(StatusCodes.OK).json({ status: "success", data: { user } });
};

export default { getUsers, getUser, updateUser, deleteUser };
