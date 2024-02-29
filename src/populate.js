import { readFile } from "fs/promises";
import bcrypt from "bcryptjs";
import connectDB from "./db/connect.js";

import "dotenv/config";

import { User, Post, Comment } from "./models/index.js";

const startServer = async () => {
	try {
		await connectDB(process.env.MONGO_URL);

		await User.deleteMany();
		const users = JSON.parse(await readFile(new URL("./mocks/users.json", import.meta.url)));
		const salt = await bcrypt.genSalt(10);
		for (let i = 0; i < users.length; i++) {
			users[i].password = await bcrypt.hash(users[i].password, salt);
		}
		await User.create(users);

		await Post.deleteMany();
		const posts = JSON.parse(await readFile(new URL("./mocks/posts.json", import.meta.url)));
		await Post.create(posts);

		await Comment.deleteMany();
		const comments = JSON.parse(await readFile(new URL("./mocks/comments.json", import.meta.url)));
		await Comment.create(comments);

		console.log("Success!!!");
		process.exit(0);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

startServer();
