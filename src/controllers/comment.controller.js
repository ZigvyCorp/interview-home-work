import { StatusCodes } from "http-status-codes";
import { commentService } from "../services/index.js";

const getComments = async (req, res) => {
	const result = await commentService.getComments(req.query);
	res.status(StatusCodes.OK).json({ status: "success", data: { ...result } });
};

export default { getComments };
