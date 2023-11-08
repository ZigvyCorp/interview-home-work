// import Post from "../models/post";
import { Request, Response } from "express"

export const getAllPosts = async (req: Request, res: Response) => {
	console.log("getAllPosts: ");
	// try {
	// 	const users = await User.findById(req.body.userId);
	// 	if (req.body.img) {
	// 		const result = await cloudinary.uploader.upload(req.body.img, {
	// 			upload_preset: "network_library"
	// 		});
	// 		const createPost = {
	// 			...req.body,
	// 			img: result.secure_url,
	// 			cloudinaryId: result.public_id,
	// 			username: users.username,
	// 			avatar: users.avatar
	// 		};
	// 		const newPost = new Post(createPost);
	// 		const post = await newPost.save(); //save post information to the model
	// 		res.status(200).json(post);
	// 	} else {
	// 		const createPost = {
	// 			...req.body,
	// 			username: users.username,
	// 			avatar: users.avatar
	// 		};
	// 		const newPost = new Post(createPost);

	// 		const post = await newPost.save();
	// 		res.status(200).json(post);
	// 	}
	// } catch (err) {
	// 	res.status(500).json(err);
	// }
};