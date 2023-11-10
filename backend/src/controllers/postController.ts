import { IReqAuth } from "../types/user/user.req";
import { Response, Request } from "express";
import Posts from "../models/postsModels";

export const createPost = async (req: IReqAuth, res: Response) => {
	if (!req.username)
		return res.status(400).json({ msg: "Bị lỗi, không thể tạo" });
	try {
		const { title, content, tags } = req.body;
		const newPost = new Posts({
			username: req.username._id,
			title: title.toLowerCase(),
			content,
			tags,
		});
		const createPost = await newPost.save();
		return res.status(200).json({ msg: "Đã tạo thành công!", createPost });
	} catch (error) {
		return res.status(500).json(error);
	}
};

export const getPosts = async (req: Request, res: Response) => {
	try {
		const newPost = await Posts.aggregate([
			// USER to array
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
			// array => object
			{ $unwind: "$username" },

			// sort
			{
				$sort: { createdAt: -1 },
			},
			// group by category
		]);

		return res.status(200).json({ newPost });
	} catch (error) {
		return res.status(500).json(error);
	}
};
