import { IReqAuth } from "../types/user/user.req";
import { Response, Request } from "express";
import Comments from "../models//commentsModels";
import mongoose from "mongoose";

export const postComments = async (req: IReqAuth, res: Response) => {
	if (!req.username)
		return res.status(400).json({ msg: "Bị lỗi, không thể tạo" });
	try {
		const { content, postId, postUserId } = req.body;

		const newComment = new Comments({
			username: req.username._id,
			content,
			postId,
			postUserId,
		});

		await newComment.save();

		return res.status(200).json({ newComment });
	} catch (error) {
		return res.status(500).json(error);
	}
};

export const getComments = async (req: Request, res: Response) => {
	try {
		const getAllComments = await Comments.aggregate([
			// {
			// 	$facet: {
			// 		totalData: [
			// 			{
			// 				$match: {
			// 					postId: new mongoose.Types.ObjectId(
			// 						req.params.id
			// 					),
			// 				},
			// 			},
			// 			{
			// 				$lookup: {
			// 					from: "users",
			// 					localField: "username",
			// 					foreignField: "_id",
			// 					as: "username",
			// 				},
			// 			},
			// 			{ $unwind: "$username" },
			// 			{ $sort: { createdAt: -1 } },
			// 		],
			// 		totalCount: [
			// 			{
			// 				$match: {
			// 					postId: new mongoose.Types.ObjectId(
			// 						req.params.id
			// 					),
			// 				},
			// 			},
			// 			{ $count: "count" },
			// 		],
			// 	},
			// },
			{
				$lookup: {
					from: "users",
					let: {
						username_id: "$username",
					},
					pipeline: [
						{
							$match: {
								$expr: { $eq: ["$_id", "$$username_id"] },
							},
						},
						{ $project: { password: 0 } },
					],
					as: "username",
				},
			},
			{ $unwind: "$username" },
			{
				$sort: { createdAt: -1 },
			},
		]);

		// const comments = getAllComments[0].totalData;
		// const count = getAllComments[0].totalCount;

		// console.log({ comments, count });
		return res.status(200).json({ getAllComments });
	} catch (error) {
		return res.status(500).json(error);
	}
};
