const mongoose = require("mongoose");

const User = require("../models/user.model");
const users = require("../data/users.json");

const Post = require("../models/post.model");
const posts = require("../data/posts.json");

const Comment = require("../models/comment.model");
const comments = require("../data/comments.json");

async function seed() {
	try {
		await mongoose.connect(process.env.DB_URL || "mongodb://root:root@localhost:27017/test");

		await Promise.all([
			User.deleteMany(),
			Post.deleteMany(),
			Comment.deleteMany(),
		]);

		for (const user of users) {
			const u = await User.create(user);

			for (const post of posts) {
				if (post.owner === user.id) {
					const p = await Post.create({...post, owner: u._id });
					
					for (const comment of comments) {
						if (comment.post === post.id) {
							await Comment.create({...comment, owner: u._id, post: p._id });
						}
					}
				}
			}
		}

		console.log("Seed complete");
	} catch (err) {
		console.error(err);
	} finally {
		mongoose.disconnect();
	}

}

seed();
